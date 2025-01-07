// Solid principal are very important in software development. It is a design principle that helps us to write a clean and maintainable code. It is a collection of five design principles that are used to make our object-oriented software development more understandable, flexible, and maintainable. 
//SOLID stands for:
//S - SinghleResponsibility Principal
//O _ Open Close Principal
//L - Liskov Sunstitution Principal
//I - Interface Segregation Principal
//D - Dependency Inversion Principal

// Single Responsibility Principal
// A class should have only one reason to change, meaning that a class should have
// only one job.

class UserValidation{
  public name:string;
  public age:number;
  constructor(name:string,age:number){
    this.age=age;
    this.name=name;
  }
  validateAge(){
    if(this.age>18){
      return true
    }
    return false;
  }
  validateName(){
    if(this.name.length>3){
      return true;
    }
    return false;
  }
  display(){
    if(this.validateAge() && this.validateName()){
      console.log("User is valid");
  }else{
    console.log("User is not valid");
  }
}
}

// here in above example it, violate the single responsibility principal as, its job is to validate the person
//but it also has a display method which is not its job. So, we can create a new class for display method.

//Open - Close Principal
// Define the IceCreamFlavor interface
interface IceCreamFlavor {
    isAvailable(): boolean;
    getFlavor(): string;
}

// Concrete implementations for specific flavors
class ChocolateFlavor implements IceCreamFlavor {
    getFlavor(): string {
        return "chocolate";
    }

    isAvailable(): boolean {
        return true;
    }
}

class VanillaFlavor implements IceCreamFlavor {
    getFlavor(): string {
        return "vanilla";
    }

    isAvailable(): boolean {
        return true;
    }
}

// A generic unknown flavor
class UnknownFlavor implements IceCreamFlavor {
    private flavor: string;

    constructor(flavor: string) {
        this.flavor = flavor;
    }

    getFlavor(): string {
        return this.flavor;
    }

    isAvailable(): boolean {
        return false;
    }
}

// The makeIceCream class that depends on the IceCreamFlavor interface
class MakeIceCream {
    private flavor: IceCreamFlavor;

    constructor(flavor: IceCreamFlavor) {
        this.flavor = flavor;
    }

    make(): void {
        if (this.flavor.isAvailable()) {
            console.log(`Great success. You now have ${this.flavor.getFlavor()} ice cream.`);
        } else {
            console.log(`Epic fail. ${this.flavor.getFlavor()} is not available.`);
        }
    }
}

// Usage examples
const chocolate = new ChocolateFlavor();
const vanilla = new VanillaFlavor();
const strawberry = new UnknownFlavor("strawberry");

const chocolateIceCream = new MakeIceCream(chocolate);
chocolateIceCream.make(); // Output: Great success. You now have chocolate ice cream.

const vanillaIceCream = new MakeIceCream(vanilla);
vanillaIceCream.make(); // Output: Great success. You now have vanilla ice cream.

const strawberryIceCream = new MakeIceCream(strawberry);
strawberryIceCream.make(); // Output: Epic fail. strawberry is not available.




// Abstract class
abstract class Animal1{
    abstract makeSound():void // note abstract keyword , if included then no need to define the body of the function
  run():void{
        console.log("i am running");
    }
}
class Dog extends Animal1{
    makeSound(){
        console.log("bark");
    }
}
const d1= new Dog();
d1.run();


// Liskov Substitution Principal
//"Objects of a superclass should be replaceable 
// with objects of a subclass without altering the correctness of the program."

class Payment {
    process(amount: number): void {
        console.log(`Processing payment of ${amount}`);
    }
}

class CreditCardPayment extends Payment {
    process(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class BankTransferPayment extends Payment {
    process(amount: number): void {
        if (amount > 10000) {
            throw new Error("Bank transfers cannot process payments above 10000!");
        }
        console.log(`Processing bank transfer payment of ${amount}`);
    }
}

function processPayment(payment: Payment, amount: number): void {
    payment.process(amount);
}

// Usage
const creditCard = new CreditCardPayment();
processPayment(creditCard, 5000); // Works fine.

const bankTransfer = new BankTransferPayment();
processPayment(bankTransfer, 15000); // Throws error.

// The BankTransferPayment subclass violates LSP because it introduces a restriction 
// //(amount > 10000) that is not present in the Payment class.
// Any function using the Payment type cannot safely use BankTransferPayment without 
// additional checks.


abstract class Payment1 {
    abstract process(amount: number): void;
}

class CreditCardPayment1 extends Payment {
    process(amount: number): void {
        console.log(`Processing credit card payment of ${amount}`);
    }
}

class BankTransferPayment1 extends Payment {
    private static readonly LIMIT = 10000;

    process(amount: number): void {
        if (amount > BankTransferPayment1.LIMIT) {
            console.log(
                `Payment exceeds bank transfer limit of ${BankTransferPayment1.LIMIT}. Processing partially.`
            );
            console.log(`Processing partial bank transfer payment of ${BankTransferPayment1.LIMIT}`);
        } else {
            console.log(`Processing bank transfer payment of ${amount}`);
        }
    }
}

function processPayment1(payment: Payment, amount: number): void {
    payment.process(amount);
}

// Usage
const creditCard1 = new CreditCardPayment();
processPayment(creditCard, 15000); // Output: Processing credit card payment of 15000.

const bankTransfer1 = new BankTransferPayment();
processPayment(bankTransfer, 15000);
// Output:
// Payment exceeds bank transfer limit of 10000. Processing partially.
// Processing partial bank transfer payment of 10000.




//Interface Segregation Principal
// it means seperating the interface, for example

interface Shapes{
    getArea():number;
    getVolume():number;
}

class Reactangle implements Shapes{
    constructor( private length:number, private bredth:number){};
    getArea():number{
        return this.length*this.bredth;
    }
    getVolume():number{
        return 0; // notice here i agve to implemnt that interface even if the reactangle is 
        // 2d type not 3d so it doesnot have volume, So make seperate interface
    }
}


interface TwoDimension{
    getArea():number;
}

interface ThreeDimension{
    getSurfaceArea():number;
    getVolume:()=>number;
}
// Abstract Class Vs Interface
// Abstract Class method can have defination but interface can't have defination
// Abstract class can have modifiers like private, protected, public but interface can't have
//classes can extends can only one Abstract class but can implement multiple interfaces
// classes extends but interface implements

//Dependency inversion Principal
//
// Abstraction for logging
interface Logger {
    log(message: string): void;
}

// Concrete implementation for file logging
class FileLogger implements Logger {
    log(message: string): void {
        console.log(`Logging to a file: ${message}`);
    }
}

// Concrete implementation for console logging
class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`Logging to the console: ${message}`);
    }
}

// High-level module depends on abstraction (Logger)
class ReportGenerator {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger; // Dependency Injection
    }

    generateReport(): void {
        // Business logic
        console.log("Generating report...");
        this.logger.log("Report generated successfully.");
    }
}

// Usage
const fileLogger = new FileLogger();
const reportGenerator1 = new ReportGenerator(fileLogger);
reportGenerator1.generateReport();
// Output:
// Generating report...
// Logging to a file: Report generated successfully.

const consoleLogger = new ConsoleLogger();
const reportGenerator2 = new ReportGenerator(consoleLogger);
reportGenerator2.generateReport();
// Output:
// Generating report...
// Logging to the console: Report generated successfully.
