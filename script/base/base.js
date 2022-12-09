// use strice mode
    'use strict';

// Default value 

    // value for textspeed function
        // Value of t
        const t = 0;
        // Speed is sett to 30 as default
        const speedOfType = 30; 

    // API url for bioread 
        const urlBio = 'https://bionic-reading1.p.rapidapi.com/convert'

// Time 
    const now = new Date();
    let year = now.getFullYear(); 

// Object 
let kent = {
    firstName: 'kent Erik',
    lastName: 'Hole',
    birthYear: 1989,
    mail: 'kent.erik.hole@outlook.com', 

    project: {
        noroff: {
            html:{
                name: 'test',
                website: 'index.html', 
                xd: 'linke',
            },
            js: {
                name: 'test',
                website: 'index.html',
                xd: 'link',
            },
            designe: {
                name: 'test',
                website: 'test',
                xd: 'link', 
            },

            eXsam: {
                name: 'test',
                wedsite: 'test',
                xd: 'link',
            }
        },
        bootcamp: {
            spaceX: {
                name: 'spaceapi',
                wedsite: 'index.html',
                xd: 'test',
            },
            [2]: {
                name: 'brilleland',
                wedsite: 'index.html',
                xd: 'test',
            }
        },

        myproject: {
            [1]: {
                name: 'site',
                website: 'project',
                xd: 'linke',
            },
            [2]: {
                name: 'site',
                website: 'project',
                xd: 'info',
            }
        }
    },

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



