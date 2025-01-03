//Write a generic function identity that takes an argument of type T and returns the same value. 
//The type T should be inferred from the argument.

function identity<T>(args:T):T{
    return args
}

const val=identity<string>("my name is vikas")

//Create a generic class ArrayWrapper<T> that wraps an array and provides a method
// getFirstElement that returns the first element of the array. 
//Ensure the class and method are generic, so it can work with arrays of any type.

class ArrayWrapper<Type>{
  private arr:Array<Type>
   constructor(args:Array<Type>){
    this.arr=args;
   }
getFirstElement():Type {
 return this.arr[0];
}
}

const Array1=new ArrayWrapper([1,2,3,4,5,])
const Array2= new ArrayWrapper(["vikas","singh","sir","rohit"])
console.log(Array1.getFirstElement(),"   ",Array2.getFirstElement());

//Write a generic function map that takes an array of items and a function that transforms each item, 
//and returns a new array of the transformed items

function map<T >(arr:Array<T>,fun :Function):Array<T>{
  return fun(arr)
}

function transFormed(arr:number[]){
  let arr1:number[]=[];
  for(let i=0;i<arr.length;i++){
    arr1.push(arr[i]*2);
  }
 console.log(arr1)
  return arr1;
}
map<string>(['vikas','singh','lol'],transFormed)
