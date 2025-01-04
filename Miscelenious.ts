// Partial<T>: Makes all properties optional.

// Required<T>: Makes all properties required.

// Readonly<T>: Makes all properties read-only.

// Record<K, T>: Constructs an object type with specific keys and value types.

// Exclude<T, U>: Excludes types assignable to U from T.

// Extract<T, U>: Extracts types from T that are assignable to U.

// NonNullable<T>: Excludes null and undefined from T.

// Pick<T, K>: Picks a subset of properties from T.

// Omit<T, K>: Omits specific properties from T.

// Record<K, T>: Creates a type with specific keys and their associated value types (again).

// Partials makes all properties optional
type semiConductor={
    readonly name:string,
    doping?:boolean,
    pType?:boolean
}

// type paritalType:Partial<semiConductor>={
//  name:string,
// }
const partialPerson: Partial<semiConductor> = {
  name: "Alice", // doping,pType are optional
};


//Required<T>, it make all properties of the type are compulsory

const RequiredSemiconductor:Required<semiConductor>={
    name:"silicon",
    doping:true,
    pType:false,
    
}

// smilarly Readonly<T>, makes all properties in the object as readonly
type Course = "math" | "science" | "history";
type Grades = Record<Course, number>;

const studentGrades: Grades = {
  math: 95,
  science: 88,
  history: 92
};

// The Exclude utility type constructs a type by excluding from type T all properties that are assignable to U.
type Person3 = {
  name: string;
  age: number;
  address?: string;
};

type NoAddress = Exclude<keyof Person3, "address">;
// Resulting type is "name" | "age"

//Extract<T,U>, The Extract utility type constructs a type by extracting types from T that are assignable to U.
type Animal = "dog" | "cat" | "fish";
type Pet = Extract<Animal, "dog" | "cat">;  // Resulting type: "dog" | "cat"


//The NonNullable utility type constructs a type by excluding null and undefined from T
type Data = string | number | null | undefined;

type ValidData = NonNullable<Data>;
// Resulting type: string | number


//The Pick utility type constructs a new type by selecting a subset of properties K from the type T.
type Person1 = {
  name: string;
  age: number;
  address: string;
};

type NameAndAge = Pick<Person1, "name" | "age">;

const person: NameAndAge = {
  name: "Alice",
  age: 30
};

//The Omit utility type constructs a type by removing properties K from type T.
type Person2 = {
  name: string;
  age: number;
  address: string;
};

type PersonWithoutAddress = Omit<Person2, "address">;

const personWithoutAddress: PersonWithoutAddress = {
  name: "Alice",
  age: 30
};

//records
type Language = "JavaScript" | "TypeScript";
type LanguageScores = Record<Language, number>;

const scores: LanguageScores = {
  JavaScript: 95,
  TypeScript: 88
};



