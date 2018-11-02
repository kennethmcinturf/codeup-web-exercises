"use strict";
let wait = number => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(`Youll see this after ${number/1000} seconds`)
        }, number)
    })
}


wait(1000).then((data) => {
    console.log(data)
});
// timer.then(data => console.log('Promise resolved!', data));
// timer.catch(error => console.log('Promise rejected!', error));


let gitHubLastCommit = (username, repo,token) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${token}`}})
    .then(response =>
        response.json().then(data => {
            for (let i = 0; i < data.length; i++){
                if (data[i].type === 'PushEvent'){
                    fetch(`https://api.github.com/repos/${data[i].repo.name}/commits`,{headers: {'Authorization': `token ${token}`}})
                        .then(response =>
                            response.json().then(data =>{
                                // console.log((data[0].commit.author.date).substring(11,13));
                                // console.log((data[1].commit.author.date).substring(11,13));
                                // console.log((data[2].commit.author.date).substring(11,13));
                                let dateOne = (data[0].commit.author.date).substring(11,13);
                                let dateTwo = (data[1].commit.author.date).substring(11,13);
                                let dateThree = (data[2].commit.author.date).substring(11,13);
                                let avgOfDates = (parseInt(dateOne) + parseInt(dateTwo) + parseInt(dateThree))/3;
                                console.log(avgOfDates - 11);
                            })
                        )
                    break
                }
            }
        })
            .catch(error => console.error(error)));
}

