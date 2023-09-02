// Write a program to converts the temperature from celsius to farenhite and vice versa.
function celsiusToFarenhite(_temp:number){
    return _temp*(9/5) +32
};
let convertedToFarenhite:number = celsiusToFarenhite(78);
console.log(convertedToFarenhite);

// Write a program that calculates the percentage
function percentage(obtainedMarks:number, totalMarks:number){
    return obtainedMarks/totalMarks *100;
};

const percentageObtained:number = percentage(894, 1100);
console.log(percentageObtained);

// Write a program that converts given number of days into weeks and days such as 17 days = 2 weks and 3 days
function daysIntoWeeks(numbers:number): {weeks: number, remainingDays: number} {
    const weeks = Math.floor(numbers/7);
    const remainingDays = numbers % 7;
    return {weeks, remainingDays};
};
const days = 17;
const DintoW = daysIntoWeeks(17);
console.log(`${days} days = ${DintoW.weeks} weeks and ${DintoW.remainingDays}`);

// Write a program that calculates the discount for the product based on its price. if the price is above
// $100, apply a 10% discount; otherwise apply a 5% discount.

let listPrice:number = 110;
if(listPrice > 100){
    console.log(listPrice*110/100);
}else {
    console.log(listPrice*105/100);
};

// create a program that determines the category of a user-provided. if the age is between 0 and 12 print  
// "child" if its betwween 13 and 19, print "Teenager" otherwise print "Adult".

let age:number = 45;
if(age==0 && age<=12){
    console.log("Child");
}else if(age>12 && age<=19){
    console.log("Teenager");
}else {
    console.log("Adult");
}

// Write a program that takes temperature and check it. if it is cold then suggest the user to wear the warm
// clothes and so on according to weather.

let temp:number = 20;
if(temp<=12){
    console.log("Wear the sweater");
}else if(temp<=5){
    console.log("Wear the jackets");
}else if(temp<=21){
    console.log("Wear the cotton clothes");
}else{
    console.log("Wear half Seleeves trouser shirt");
}

// Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone
// show output accordingly 

let dNumber:number = 15;
if(dNumber%3==0){
    console.log(`${dNumber} is divisble by 3`);
}else if(dNumber%5==0){
    console.log(`${dNumber} is divisible by 5`);
}else if(dNumber%3==0 && dNumber%5==0){
    console.log(`${dNumber} is divisible by both 3 and 5`);
}else{
    console.log(`${dNumber} is neither divisible by 3 and 5`);
}

// write a program that checks if a given number is leap yera or not
let year:number = 366;
if(year<=366){
    console.log("It's a leap year");
}else{
    console.log("it's not a leap year");
}

// Develop a program that detemines the day of the week. Ask the user for a number(1-7) and use the nested 
// if statements to print the corresponding day's name

let day:number = 4
switch(day){
    case 1:
        console.log("today is Monday");
        break;
        case 2:
            console.log("today is tuesday");
            break;
            case 3:
                console.log("today is wednesday");
                break;
                case 4:
                    console.log("today is thursady");
                    break;
                    case 5:
                        console.log("today is Friday");
                        break;
                        case 6:
                            console.log("today is satursday");
                            break;
                            case 7:
                                console.log("today is sunday");
                                break;
                                default:
                                console.log("today is Wednesday");
};


// Write a program that takes the number of units consumed by a user if it is greater than 100 the add 10%
// if greater than 200 then 15% of tax so on up to if greater than 500 then add 25% of tacx, Where the tax
// amount is calculated as amount if bill

let amountOfTheBill:number = 25000;
let numberOfUnits:number = 200;
if(numberOfUnits > 100 || numberOfUnits == 200 ){
    console.log(amountOfTheBill*110/100);
}else if(numberOfUnits > 200 || numberOfUnits == 500){
    console.log(amountOfTheBill*115/100);
}else if(numberOfUnits > 500){
    console.log(amountOfTheBill*125/100);
}else{
    console.log(amountOfTheBill);
};
