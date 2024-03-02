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
// it firsts initializes the variable let name to value 'Dane'.
// the if/else statement code checks if the value of name is equal to 'Mary'.
// Since name is not, the condition name === 'Mary' evaluates to false. 
// The code inside the else block executes.
// It logs 'How do you do?' to the console.
// 



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
// The code initializes a variable 'secret' without assigning a value.
// Another variable 'code' is paired with the value 123. 
// checks if 'code' is equal to 123. 
//The condition is true, so it assigns the value 'super' to 'secret' and doubles the value of 'code'.
//it then checks if 'code' is greater than 250. If true, it reassigns the value of 'secret' to 'duper'.
//  Console.log's value of secret will be 'super' because 246 > 250







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
// The code initializes three variables: 'isStudent' is set to true, 'age' is set to 34, and 'zip' is set to 55407. 
//it checks conditions :
// If 'isStudent' is true and 'zip' is greater than 80000, it logs "You're a student on the West Coast!".
// Otherwise, if 'isStudent' is false or 'age' is less than 30, it logs "What are your hobbies?".
// Otherwise it will continue to the next condition, if 'isStudent' is true, it logs "Welcome to Prime!".
// If none of the above conditions are met, it logs "How about the weather?" as the final else statment

// Console.log's value at the end: "Welcome to Prime!" because let isStudent = true;



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
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX - colorTwo = 'purple'; 
  // only 'colorOne' is being set to 'purple', leaving out colorTwo all together. 
  // this code needs to include colorTwo as changed to purple indicated by FIX above
  // this FIX will make mix accurate for both color variables 
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  // FIX: Replace || with &&. 
  //the insructions indicate to check if temp is higher than 39 AND if time is greater or equal to 4... not "or"
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  //tychnically this code should still run just fine without error
  //the human readibility is confusing so it is cleaner code to switch the condition in the code to
  //FIX - check if age is greater than or equal to minAge -- if (age >= minAge)
  console.log('no entry');
} else {
  console.log('enter');
}
*/

