// Obtain random numbers until at least 0.75 is reached
// Ralph 12/06/2023

// console.log('JavaScript is running.');

// Create function to check if the random number is > 0.75
// if it is; console log the result and end.
// if not; wait 1 second, then get another random number.
function randomGame() {
    if (selectedNumber >= .75){
        console.log(`It took ${randomCount} tries to get to .75 or greater.`)
    } // END if...
    else {
       setTimeout(randomNumber, 1000);
        } // END else...
    }  // END Random Game


// Function to select a random number, display it, 
// keep track of the attempt count, and then call randomGame
// to check against our requirement criteria.
function randomNumber() {
    selectedNumber = Math.random().toFixed(2);
    randomCount++;
    console.log(`${randomCount}   ${selectedNumber}`);
    randomGame();
    }  // END randomNumber

    
let selectedNumber, randomCount = 0;

// Call randomnumber to start the app
randomNumber();