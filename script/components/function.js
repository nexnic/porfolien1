// Strict mode on
    'use strict';

// Function loading 
    function loadingpage(){
        
    }

// Function Form-mail 
    
    function form(){

    }

// Text Readting function for add text one letter at the time

    function typeSpeed(value1, value2){
        // if length is great then length of value1
        if(t < value1.lenght){
            // value 2 is the dom to add to 
            value2.innerHTML += value1.charAt(t);
            // charAT is build inn function on js
            t++
            // this will sett the speed off typing
            setTimeout(typeSpeed, speedOfType);
        }
    }

