// use strice mode
    'use strict';

// Time 
    const now = new Date();
    let year = now.getFullYear(); 

// Object 
let kent = {
    firstName: 'kent Erik',
    lastName: 'Hole',
    fullName: kent.firstName + ' ' + kent.lastName, 
    birthYear: 1989,
    age: year - kent.birthYear,
    mail: 'kent.erik.hole@outlook.com', 

    course: {
        udemy: {
            js: {
                name: 'the complete javascript course 2023',
                percent: 35, 
                courseinstructor: 'Jonas Schmedtmann',
                webside: 'https://codingheroes.io',
            },
            sass: {
                name: 'advanced css and sass', 
                percent: 40, 
                courseinstructor: 'Jonas Schmedtmann',
                webside: 'https://codingheroes.io',
            }, 
            ux: {
                name: 'User Experiencene designe',
                precent: 10, 
                courseinstructor: 'Daniel Walter Scott',
                webside: 'https://www.udemy.com/user/danielwalterscott/',
            },
        },
    },

    

}

// DOM Tree 
    // Loader 
        //const loadingsection = document.querySelector('#loader"');
    // loader text
        // const loaderTXT = document.querySelector('#loader__content--text');


console.log(typeof(kent.birthYear))
console.log(typeof(year))

console.log(year - kent.birthYear)
console.log(typeof(kent.age));
console.log(kent.age)
console.log(kent.fullName);
