"use strict";
// write a program that uses filter to remove all negative numbers from an Array
// of numbers
let numbers = [1, 2, 3, -4, -5, -6, -7, -8, -9, 10, 11, -12, 13, -14];
const removeNegativeNumber = numbers.filter((number) => {
    return number > 0;
});
console.log(removeNegativeNumber);
// given an array of numbers [1,2,3,4,5], use the map method to create
// a new array where each number is multiply by 2
let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const multiplyby2 = number1.map((number) => {
    return number * 2;
});
console.log(multiplyby2);
// Given an array of strings ["Apple", "Banana", "Cherry", "Date", "Grape"]
// use the filter method to create a new array containing only the fruits 
// with more than 5 characters
let fruitsName = ["apple", "banana", "cherry", "date", "grape"];
const fruitsWith5Characters = fruitsName.filter((fruit) => {
    return fruit.length > 5;
});
console.log(fruitsWith5Characters);
// Given an array of numbers [1,2,3,4,5,6,7,8,9,10] use the map and filter methods together to create a new array 
// contaning the squares of even numbers 
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = arrayOfNumbers.map((number) => {
    return number * number;
});
const evenNumberSquare = squares.filter((number) => {
    return number % 2 == 0;
});
console.log(evenNumberSquare);
// Given an array of temperature in celsius [0,10,20,30,40], use teh map method to create anew array where 
// each temperature is converted to farenhite using the formula (Celsius *9/5) + 32.
let arrayTemp = [0, 10, 20, 30, 40];
const conversionToFarenhite = arrayTemp.map((celsius) => {
    return (celsius * 9 / 5) + 32;
});
console.log(conversionToFarenhite);
// Given an array of numbers [3,6,9,12,15,18], use the map and filter
// methods together to create a new array containing the doubled 
// values of od numbers
let arrayNumber102 = [3, 6, 9, 12, 15, 18];
const doubledValue = arrayNumber102.map((number) => {
    return number ** 2;
});
const oddNumbers = doubledValue.filter((number) => {
    return number % 2 != 0;
});
console.log(oddNumbers);
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"],
// use the foreach method to log each name with an excalamation mark
// at the end e.g,. "Alice!"
// let arrayOfNames:string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
// const excalamationMark = arrayOfNames.forEach((name) => {
//     return (name + "!");
// });
// console.log(excalamationMark); with for each only console.log can be used
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name) => {
    console.log(name + "!");
});
