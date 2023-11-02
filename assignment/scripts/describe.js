// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Assigning the name "Dane" to the variable name
// stating that if "name" is equal to Mary, then 
// print on the screen "Hi, Mary!"
// if the name isn't Mary, the screen will print out "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We are assigning nothing to secret, so it is undefined and we are defining code as 123.
// Then, we are saying that if code is the same type and same value as 123, then the secret is super and the code is 123 times 2, which reassigns code to 246
// Then, if the code is greater than 250, then the secret is "duper" and it will print on the screen nothing, because there's no "" around secret
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Assigns isStudent as being true, it also assigns age to be 34 and the zip as 55407
// Then, it says if the isStudent is both true and also the zip is greater that 8000, then print "You're a student on the West Coast!"
// Or, if it is true that isStudent is false or if the age is under 30, print out "What are your hobbies?"
// Or, if isStudent is equal to true, then print "Welcome to Prime"
// If any of the above is not true, then last resort, print "How about the weather?" and moonwalk away

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - instructions say that colorOne is set to blue, but the code below has it set to red, 
// so change the code to say let colorOne = 'blue'
// Instructions say that colorTwo is set to red, but the code below has it set to blue, 
// so change the code to say let colorTwo = 'red'
// add colorTwo = 'purple' because it was missing and only colorOne was assigned 'purple' in the incorrect code

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// FIX - the instructions say to assign temp and time as variables.  The code below needs to be changed from const time = 4; to say let time = 4;
// change || to && 

let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*

//FIX - instructions say to assign both age and minAge as a variable.  The incorrect code has minAge as a constant.  Change to let minAge = 21;
// instructions say that we check if the age is greater than or equal to minAge.  The code below is checking if the minAge is less than or equal to age.  
// so we change it to: 
// if(age >= minAge) {
//   console.log('enter');
// then delete the console.log('no entry') because the statement above is true.

let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

