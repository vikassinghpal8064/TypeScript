// tuples are noting but an array with fixed number of elements
// and can have differnt types of elements
let randomArr:[string,number,boolean]=["vikas",100,true];
randomArr[2]=false;
console.log(randomArr[2])

// in tuples length ofthe arrayis fixed you cannot change the length of the array
// it means you cannot push or pop the elements from the array
// you can only change the value of the elements



type allFunctions={
    add:(x:number,y:number)=>number,
    sub:(x:number,y:number)=>number,
    mul:(x:number,y:number)=>number,
    div:(x:number,y:number)=>number,
}

// note the above syntax, here return type is shown as =>number