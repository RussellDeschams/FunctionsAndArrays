//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let ages =[3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length-1] - ages[0]);

ages.push(32);
//console.log(ages);// ages = 3,9,23,64,2,8,28,93,32

console.log(ages[ages.length-1] - ages[0]);

let total = 0;
for(i=0; i < ages.length; i++){
    total = total + ages[i];
    //console.log(total);
}
let averageAge = total/ages.length;
console.log('Average age: ' + averageAge);//should I round? doesnt say.
console.log('Average age rounded: ' + averageAge.toFixed(0));

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
//b.    Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let letterLength=0
for (i=0; i< names.length; i++){
    letterLength += names[i].length;
    //console.log(letterLength);
}
let averageLength = letterLength / names.length;
console.log('Average number of letters: ' + averageLength);
console.log('Average number of letters rounded: ' + averageLength.toFixed(0));

let allNames= '';
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + ' ';
    //console.log(allNames);
}
console.log(allNames);

//3.	How do you access the last element of any array?
//there are three ways to access the last element hte first is using the array length property, where by you can use the las arrays length to regurgitate the element within.
//There is also the slice method, which can help you access an element at any point in the array. and lastly there is pop, which can access the last element but changes the length of hte array
//4.	How do you access the first element of any array?
//There are several ways of accessing the first array, the first being array indexing, but that doesnt always prove true, because not always is theres something in index of 0,
//It is also possible to use find, and filter, both very similar, except find stops once element is found and filters continues through the whole array, sometimes making it less efficient.
//And lastley shift, which returns the first element of the array, but removes it from array, modifying the array itself.

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
let nameLengths = [];
for (i = 0; i < namesArray.length; i++){
    nameLengths[i] = namesArray[i].length;
    //console.log(nameLength);
}
console.log(nameLengths);

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sumOfElements = 0;
for (i=0; i < nameLengths.length; i++){
    sumOfElements += nameLengths[i];
    //console.log(sumOfElements);
}
console.log('Sum of all Elements: ' + sumOfElements);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, 
//I would expect the function to return ‘HelloHelloHello’).

function twoParametes(word, n){
    let word1 = ''; 
    if(n > 0){
    for(i =0; i< n; i++){
        word1 += word;
        //console.log(word1);
    }
    return word1;
    }
    else{
        return('please enter number for second parameter.');
    }
}
let wordPar = 'Cheese';
let numPar = 5;
console.log(twoParametes(wordPar, numPar));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName){
    return (firstName + ' ' + lastName);
}
console.log(fullName('Russll', 'Deschams'));

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
//let trial = [1,2,4,5,1,200];
function countArray(numAry){
    let count =0;
    for(i=0; i< numAry.length; i++){
        count += numAry[i];
        //console.log(count);
    }
    if(count > 100){
        return true;
    }
    else{
        return false;
    }
}
//onsole.log(countArray(trial));

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageNum(numArray){
    let countAry = 0;
    for(i=0; i < numArray.length; i++){
    countAry += numArray[i];
    //console.log(countAry);
    }
    return countAry / (numArray.length);
}

let tryAry = [1,6,5,3,1,2,6];
console.log(averageNum(tryAry));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first
// array is greater than the average of the elements in the second array.

function AvTest(num1, num2){
    let countOfOne = 0;
    let countOfTwo = 0;
    let countOfSpace = 0;
    let countOfSpace2 = 0;

    for(i=0; i < num1.length; i++){
        countOfSpace++
        countOfOne += num1[i];
        
    }
    for(i=0; i < num2.length; i++){
        countOfSpace2++
        countOfTwo += num2[i];
        //console.log(countOfTwo);
    }
    
    let average1 = countOfOne /countOfSpace;
    let average2 = countOfTwo/ countOfSpace2;
    
    if(average1 > average2){
        return true;
    }else{
        return false;
    }
    
}
//test
let one = [112,15,112,5,100];
let two = [11,24,12,16,23,56];

console.log(AvTest(one, two));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns  
//true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink(true, 15));

//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// this function takes any string and capitalizes the leters and removes the spaces. 
// I wanted to create this function to better understand arrays and funtions. I wanted to use things learned in class, like using a function
//within a function

function toCapNoSpace(argument){
    const wordAry = argument.toUpperCase().split('').filter(function(letter){
        return letter !== " ";})
        return wordAry.join('');
}

console.log(dateConvert('Orange Chicken'));