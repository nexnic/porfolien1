// use strice mode on 
    'use stric';

// API to bio read 

async function api(){
    try{
        const response = await fetch(urlBio);
        const result = await response.json();

        console.log(result);
    }
    catch(error) {
        console.log(error)
    }
}

api()