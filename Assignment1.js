// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function outer(inner) {
  console.log("Inside Outer Function.");
  inner();
}

function inner() {
  console.log("Inside Inner function.");
}

outer(inner);

// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the
//first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
// Submit the github link to the code

var arrow = (firstName, lastName) => {
  let str = firstName[0] + lastName[0];
  return str;
};

console.log(arrow("Roger", "Waters"));
