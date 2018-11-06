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

$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=starwars&callback=?", function(json) {
    if (json != "Nothing found.") {
        console.log(json.results[0].poster_path);
        $('body').css('background-image', `url('http://image.tmdb.org/t/p/w500${json.results[0].poster_path}')`)
    }})

fetch("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=starwars&callback=?")
    .then(data => {
            console.log(data.results);
    // <img src=\"http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path + '\" class=\"img-responsive\" >'
    //         $('body').css('background image', `'url(' + http://image.tmdb.org/t/p/w500/${data} + ')'`)
        })
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

