"use strict";
// Develop a program that caluculates and and prints the sum of first n even numbers using a for loop 
let evenNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20];
var sum = 0;
for (let i = 0; i <= evenNumber.length; i++) {
    if (evenNumber[i] % 2 == 0) {
        sum += i;
    }
}
console.log(sum);
// implement a pfrogram that iterate through an array of number and
// print only even number
let arrayOfNumber = [2, 34, 55, 67, 88, 89, 56, 45, 22, 76];
for (let i = 0; i <= arrayOfNumber.length; i++) {
    if (arrayOfNumber[i] % 2 == 0) {
        console.log(arrayOfNumber[i]);
    }
}
;
// Implement a program that uses a loop to iterate through an array of 
// numbers ans remove all even numbers from them just leav the odd ones.
let eAndONumbersArray = [2, 23, 44, 56, 78, 90, 55, 77, 89, 21];
for (let i = 0; i <= eAndONumbersArray.length; i++) {
    if (eAndONumbersArray[i] % 2 != 0) {
        console.log(eAndONumbersArray[i]);
    }
}
;
// Write a program that defines a function to calculate the area 
// of the circle. The function should take the radius as input and
// return the calculated area
function areaOfTheCircle(radius) {
    return 3.14 * radius ** 2;
}
;
const area = areaOfTheCircle(7);
console.log(area);
// Develop a program that needs a list pof grades and uses the splice 
// method to remove falling grades(below 50) from the array.
let listOfGrades = [45, 50, 90, 80, 40, 35, 20, 65];
function removeLowerGrades(numbers, index) {
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > 50) {
            console.log(numbers[i]);
        }
    }
}
const myIndex = 0;
const removal = removeLowerGrades(listOfGrades, myIndex);
// second solution through filter
const numbersLessthan50 = listOfGrades.filter((number) => {
    return number > 50;
});
console.log(numbersLessthan50);
//Write a program that uses a function to find the largest element in the array of numbers 
let array_Numbers = [200, 300, 400, 500, 600, 700, 800, 900, 1000.10];
const max = Math.max(...array_Numbers);
console.log(max);
