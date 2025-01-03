"use strict";
//Write a function that takes an array of strings and returns a new array with all the strings converted to uppercase.
let arr = ["apple", "mango", "algebra", "iPad", "hero"];
function convert(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}
let convertedArr = convert(arr);
//console.log(convertedArr);
//Write a function that takes an object and prints all its keys.
let obj = {
    name: "Vikas",
    sirname: "singh",
    age: 27,
    phone: 8287216314
};
function keyConvert(obj1) {
    for (let key in obj1) {
        //console.log(obj1[`${key}`])
    }
}
keyConvert(obj);
//Write a function that takes an array of numbers and returns their sum.
function sumOfArr(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}
//console.log(sumOfArr([1,2,3,4,5,6,7,8,100]))
//Write a function that doubles each element in a number array and returns a new array.
function doubleArr(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i] * 2);
    }
    return arr1;
}
console.log(doubleArr([1, 2, 3, 4]));
//Write a function that takes an array of strings and returns an array of their lengths.
function calculateLength(arr) {
    let lengthArr = [];
    for (let item of arr) {
        lengthArr.push(item.length);
    }
    return lengthArr;
}
//Write a function that filters out all the odd numbers from an array and returns only even numbers.
function filterArr(arr) {
    let arr1 = arr.filter((value, index) => {
        if (value % 2 == 0) {
            return value;
        }
    });
    return arr1;
}
console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
