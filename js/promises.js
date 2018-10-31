"use strict";
let wait = number => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(`Youll see this after ${number/1000} seconds`)
        }, number)
    })
}

const timer = wait(100);
console.log(timer);
timer.then(data => console.log('Promise resolved!', data));
timer.catch(error => console.log('Promise rejected!', error));

// 'Authorization': 'token c05fec6ed0324e415f24edbc698c5c30fd6bf1fc'

let gitHubLastCommit = (username, token) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${token}`}})
    .then(response =>
        response.json().then(data => {
            console.log((data[0].created_at).substring(0,10));
        })
            .catch(error => console.error(error)));
}


