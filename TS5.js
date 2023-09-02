"use strict";
// Write a program that calculates area of the rectangle
let lengthOfRectangle = 25;
let widthOfRectangle = 45;
let areaOfRectangle = lengthOfRectangle * widthOfRectangle;
console.log(areaOfRectangle);
// Write a program that takes input and calculates the volume of the cube
// Formula V = a3
function volumeOfTheCube(edge) {
    return edge ** 3;
}
;
const cubeVolume = volumeOfTheCube(34);
console.log(cubeVolume);
// Write a program that check if a given number is positive negative or zero.
let givenNumber = 12;
if (givenNumber < 0) {
    console.log("Number is a neagtive number");
}
else if (givenNumber > 0) {
    console.log("Number is a positive number");
}
else {
    console.log("Number equals to zero");
}
;
// Write a program that checks if a given number is even or odd
let givenNumber1 = 15;
if (givenNumber1 % 2 == 0) {
    console.log("number is even");
}
else {
    console.log("number is odd");
}
;
// write a program that determines if a person is eligible to vote based on their age.
let age1 = 25;
if (age1 >= 18) {
    console.log("The person is eligible for vote");
}
else {
    console.log("Person is not eligible for vote");
}
;
// write a program taht caculates the result of a mathematical operation 
// let mathematicalExpression:number = ((10 + 5) * 3 - 2) / (4 % 3)  - 7
