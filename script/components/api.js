// use strice mode on 
    'use stric';

// API to bio read 
// Read document from 

const encodedParams = new URLSearchParams();
encodedParams.append("content", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
encodedParams.append("response_type", "html");
encodedParams.append("request_type", "html");
encodedParams.append("fixation", "1");
encodedParams.append("saccade", "10");

const options = {
    method: 'POST',
    headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '9414022446mshd502f7f7e4899ecp1bcb90jsne39d304749eb',
		'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
	},
	body: encodedParams
};

async function api(){
    try{
        const response = await fetch(urlBio, options);
        const result = response.json()
        console.log(result)        
    }
    catch(error) {
        console.log(error)
    }
}

api()