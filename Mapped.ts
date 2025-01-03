//Mapped types allow you to transform or modify types based on existing ones, 
// and they can be quite powerful when used creatively.

//1.typeof operator -->it gives the type of the variable
//2.keyof operator -->it gives the keys of the types or object 


type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"|"alive"];

// the above code showa index based types from the existing types



type Horse = { name: string; age: number };

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse; // notice this line , in the closed bracket, these are keys,it says that keys are of string type
};

const conforms: OnlyBoolsAndHorses = {
  del: true,         // a boolean value
  rodney: false,     // another boolean value
  blackBeauty: {     // a Horse object
    name: "Black Beauty",
    age: 5
  }
};

// Property Modifiers and Keysof operator

type horses={
    breed:string,
    origin:string,
    age:number,
}

type animals= 'breed'|"origin"|"age";// or keysof horses
//console.log(typeof animal1)
// type animals= string|number;

const animal1:animals="age"

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean; // Properties loops all keys of Types
};

const flags:OptionsFlags<horses>={
    breed:false,//"heroine",
    origin :true,//"saudiArabia",
   age:false,//100
}

//  in above code all types are boolean in OptionsFlags type, what if you want 
// other types

type Flags<T>={
    -readonly [Property in keyof T]:T[Property]
}

// remove optional attribute
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property]; // here -ve sign and ? sign are used to remove optional attribute
  };
   
  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };
   
  type User1= Concrete<MaybeUser>;
        
  type User = {
      id: string;
      name: string;
      age: number;
  }

  // remove read only attribute
  // Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property]; // notice here -ve sign is used to remove readonly attribute
  };
   
  type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };
   
  type UnlockedAccount1 = CreateMutable<LockedAccount>;
             
  type UnlockedAccount = {
      id: string;
      name: string;
  }