//Mapped types allow you to transform or modify types based on existing ones, 
// and they can be quite powerful when used creatively.

//1.typeof operator -->it gives the type of the variable
//2.keyof operator -->it gives the keys of the types or object 


type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"|"alive"];

// the above code showa index based types from the existing types

//Question 1: create a mapped type ReadonlyProperties that takes an object type 
// and returns a new type with all properties marked as readonly.

type detail={
    name:string,
    age:number,
};
type sername = keyof detail;

const obj1:detail={
name:"captain america",
age:100,
}
