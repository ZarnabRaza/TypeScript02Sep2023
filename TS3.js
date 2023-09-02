"use strict";
// Create a function that takes an array, an index amd value as parameters. Inside the function, use the splice method
// to insert the value at the specified index in the array. Return the modified array
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function addValue(arr, index, toAdd) {
    arr.splice(index, 0, toAdd);
    return arr;
}
let myindex0 = 4;
let toAdd0 = 94;
let result = addValue(array1, myindex0, toAdd0);
console.log(result);
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, 
// and update quantities using the splice method. print the cart's content after each operation
let myCart0 = ["Apple", "Orange", "Peaches", "Guava", "Grapes"];
function addToCart(arr, index, toAdd) {
    arr.splice(index, 0, ...toAdd);
    return arr;
}
;
let myindex1 = 3;
let toAdd1 = ["Blueberry", "Rasberry"];
const result101 = addToCart(myCart0, myindex1, toAdd1);
console.log(result101);
function removeitems(arr, index, toRemove) {
    arr.splice(index, toRemove);
    return arr;
}
;
let myindex2 = 4;
let toRemove1 = 2;
const result102 = removeitems(myCart0, myindex2, toRemove1);
console.log(result102);
let mycart1 = ["Apple $3/kg", "Orange $6/kg", "Grapes $9/kg", "Kiwi Rs47/kg"];
function toUpdateItems(arr, index, toUpdate) {
    arr.splice(index, 2, ...toUpdate);
    return arr;
}
;
let myIndex3 = 0;
let myToUpdate1 = ["Apple $4/kg", "Orange $8/kg"];
const result103 = toUpdateItems(mycart1, myIndex3, myToUpdate1);
console.log(result103);
//Write a program that uses a while loop to print the first 25 integers
let i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}
// write a program that uses a while loop to print the 10 even numbers
let index = 1;
while (index <= 10) {
    if (index % 2 == 0) {
        console.log(index);
    }
    index++;
}
;
// Create a function that takes positive integer as a parameter, and uses a while loop to calculate and
// return the factorial of that number.
function factorialCal(integer) {
    if (integer < 0) {
        console.log("That number is negative");
    }
    let currentValue = 1;
    let factorial = 1;
    while (currentValue <= integer) {
        factorial *= currentValue;
        currentValue++;
    }
    return factorial;
}
const factorialNum = factorialCal(5);
console.log(factorialNum);
// write a program havimg an array of numbers , if the number is negative it should remove the negative
// number from the array
let nNumberArray = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6, -7, 7, -8, 8, -9, 9, -10, 10];
const removeNegativeNumbers = nNumberArray.filter((number) => {
    return number > 0;
});
console.log(removeNegativeNumbers);
// Create a function that takes an array of numbers as a parameter. Use a while loop to calculate and 
// return the sum of all the numbers in the array 
let sumOfNumbersArray = [45, 78, 67, 90, 87, 34, 23, 12, 56, 87, 65, 43];
function sumOfAllNumbers(numbers) {
    let sum = 0;
    let index = 0;
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    return sum;
}
const sum101 = sumOfAllNumbers(sumOfNumbersArray);
console.log(sum101);
// Implement a program that takes a list of temperatures in celsius as input from the user. Convert each 
// temperature to farenhite using the formula F = (C*9/5) + 32 and store the converted temperature in an 
// array . Use a ehile loop to perform the conversion for each temperature 
let tempInCelsius = [12, 34, 56, 78, 90, 56, 34];
let far = [];
let index4 = 1;
while (index4 < tempInCelsius.length) {
    let farehite = (tempInCelsius[index4] * 9 / 5) + 32;
    far.push(farehite);
    index4++;
}
console.log(far);
