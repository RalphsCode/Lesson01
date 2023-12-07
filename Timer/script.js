// timer function that counts down from the argument number
// Ralph 12/06/2023

// console.log('JavaScript is running.');

// Create a function to put the countdown numbers into an Array
function createArray(num) {
    numbersArray = [];
    for (let i = 0; i <= num ; i++) {
        numbersArray.push(i);
         }      // END for loop
    return numbersArray;
}           // END countdown()

// Create a function to take a number from the array and display it.
// If the number is 0 display 'done' and exit.
// Repeat until all numbers in the array have been displayed.
function countdown() {
    count--;
    if (count !== 0){
        console.log(numbersArray[count]);
        setTimeout(countdown, 1000);
    }           // END if...
    else {
        console.log("DONE!!")
    }           // END else...
} //            END timeRelease


// Call the createArray function
createArray(6);

// Set the count variable to keep track of the elements in the array
let count = numbersArray.length;

// Call countdown to loop through the array elements with a 1 second delay
countdown();