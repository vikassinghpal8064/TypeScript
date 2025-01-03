//Write a function that takes an array of strings and returns a new array with all the strings converted to uppercase.

let arr :string[]=["apple","mango","algebra","iPad","hero"]

function convert(arr:string[]):string []{
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].toUpperCase();
}
return arr;
}

let convertedArr=convert(arr);
//console.log(convertedArr);

//Write a function that takes an object and prints all its keys.

let obj={
    name:"Vikas",
    sirname:"singh",
    age:27,
    phone:8287216314
}

function keyConvert(obj1:object):void{
 console.log(Object.keys)
}
keyConvert(obj)

//Write a function that takes an array of numbers and returns their sum.

function sumOfArr(arr:number[]):number{
    let sum:number=0;
    for(let item of arr){
  sum+=item;
    }
    return sum;
}
//console.log(sumOfArr([1,2,3,4,5,6,7,8,100]))

//Write a function that doubles each element in a number array and returns a new array.

function doubleArr(arr:number[]):number[]{
    let arr1:number[]=[]
    for(let i=0;i<arr.length;i++){
        arr1.push(arr[i]*2);
    }
    return arr1;
}
console.log(doubleArr([1,2,3,4]))

//Write a function that takes an array of strings and returns an array of their lengths.
function calculateLength(arr:string[]):number[]{
    let lengthArr:number[]=[];
    for(let item of arr){
     lengthArr.push(item.length)
    }
    return lengthArr
}

//Write a function that filters out all the odd numbers from an array and returns only even numbers.
function filterArr(arr:number[]):number[]{
  let arr1:number[]= arr.filter((value:number,index:number)=>{
     if( value%2==0){
        return value
     }
   })
   return arr1;
}

//console.log(filterArr([1,2,3,4,5,6,7,8,9,10]))

//Write a function that greets a user. If no name is provided, default to "Guest".
function greet(name  :string ="guest" ):string{
    if(name){
        return `hello my name is ${name}`
    }
    else{
        return name
    }
}
//console.log(greet())

//Write a function that takes two numbers or two strings and adds them together. 
//Use TypeScript to ensure type safety.


function add(x:number | string,y:number | string): number | string{
    if(typeof(x)==="number" && typeof y=== "number"){
        return x+y;
    }
   else if(typeof x==="string" && typeof y==="string"){
    return x+y
   }
   else throw Error("some other type")
}
//Write a function that checks if an array is empty.



