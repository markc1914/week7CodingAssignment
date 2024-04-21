/**


Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.


 */


let arrayOfValues = [3, 9, 23, 64, 2, 8, 28, 93];

function subtractFirstFromLast(array) {
    return array[array.length-1] - array[0];
}

console.log (` The value of the last element minus the first element is ${subtractFirstFromLast(arrayOfValues)}`);
arrayOfValues.push(131);
console.log (` The value of the last element minus the first element is ${subtractFirstFromLast(arrayOfValues)}`);

let average = arrayOfValues.reduce((total,value) => {
    return total + value
},0) / arrayOfValues.length;

console.log(`The average age is ${average}`)

/**

Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.




 */

let arrayOfNames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let averageLength = arrayOfNames.reduce((total,value) => {
    return total + value.length;
},0) / arrayOfNames.length;
let concatenatedString = arrayOfNames.reduce((runningString,value)=>{
    return runningString.concat(value + ' ');
},'').trimEnd();

// as a Java programmer, this was my solution

console.log(`the average name length is ${averageLength}`);
console.log(`the concatenated array is: ${concatenatedString}`);

/**

Question 3: How do you access the last element of any array?

 */

console.log(`the last element in an array is always at address array[array.length -1], for our names array, this is ${arrayOfNames[arrayOfNames.length-1]}`);

/**
 *
 * Question 4: How do you access the first element of any array?

 */

console.log(`the last element in an array is always at address array[0], for our names array, this is ${arrayOfNames[0]}`);

/**
 *
 * Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
 *
 */

let nameLengths = [];
for(let index=0; index<arrayOfNames.length; index++){
    nameLengths.push(arrayOfNames[index].length);
}

console.log(nameLengths);

let sumOfNameLengths = nameLengths.reduce((total,value)=>{return total + value},0);

/**
 Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
 */
console.log (`The sum of the name lengths is ${sumOfNameLengths}`);



/**
 *
 *  Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
 *
 *
 *
 * @param {*} stringToConcatenate - the text to concatenate
 * @param {*} numberOfTimes - the number of times to repeat the process
 * @returns
 */
function concatenateSomeNumberOfTimes(stringToConcatenate,numberOfTimes) {
    let newString = stringToConcatenate;
    for(let index =1; index<numberOfTimes; index++){
        newString = newString.concat(stringToConcatenate);
    }
    return newString;
}

console.log (`Hello using the concat method with 3 should produce HelloHelloHello and it produces ${concatenateSomeNumberOfTimes('Hello',3)}`);


/**
 * Question 8 : Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
 */


function buildFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

let firstName = 'Mark';
let lastName = 'Cornelius';
console.log(`The result for ${firstName} and ${lastName} is ${buildFullName(firstName,lastName)}`);


/**
 * Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
 */

function isSumOverOneHundred(array) {
    return array.reduce((total,value)=>{return total + value},0) > 100;
}

console.log (`the sum of ${arrayOfValues} is  over 100: ${isSumOverOneHundred(arrayOfValues)} the sum of ${nameLengths} is over 100: ${isSumOverOneHundred(nameLengths)}`);


/**
 *
 * Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.
 */

function averageOfValues(array) {
    return array.reduce((total,value) => { return total + value},0) / array.length;
}

console.log (`the average of ${arrayOfValues} is: ${averageOfValues(arrayOfValues)} the average of ${nameLengths} is: ${averageOfValues(nameLengths)}`);


/**
 * Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
 */

function isArray1AverageGreaterThanArray2Average(array1,array2) {
    return averageOfValues(array1) > averageOfValues(array2);
}

console.log (`the average of ${arrayOfValues} is > the average of ${nameLengths} is: ${isArray1AverageGreaterThanArray2Average(arrayOfValues,nameLengths)}`);
console.log (`the average of ${nameLengths} is > the average of ${arrayOfValues} is: ${isArray1AverageGreaterThanArray2Average(nameLengths,arrayOfValues)}`);


/**
 * Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 *
 */

function willBuyDrink(isHotOutside,moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.5;
}

console.log (`If it is not hot outside, will I buy a drink even if I have $100 : ${willBuyDrink(false,100)}` );
console.log(`If it is hot outside, but I only have 10 will I buy a drink? ${willBuyDrink(true,10)}`);
console.log(`If it is hot outside, but I  have 20 will I buy a drink? ${willBuyDrink(true,20)}`);



/**
 * Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
 *
 *
 * Computes the factorial of a number. Why? Because this is one of the first recursive algorithms I ever learned a long time ago
 * @param {*} number
 * @returns
 */
function factorial (number) {
    if (number <= 1) {
         return 1;
    }
    return number * factorial(number -1);
}

for (let i = 2; i <=10; i++){
    console.log(`The factorial of ${i} is ${factorial(i)}`);
}
