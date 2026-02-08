//JavaScript OOP & Error Handling – Daily Learning

//This repository demonstrates core JavaScript Object-Oriented Programming concepts using practical examples, including prototype chaining, class-based objects, inheritance, super keyword usage, and error handling.

/*1️⃣ Object Creation & Prototype Inheritance (__proto__)
Example*/
const School ={
    status(){
        console.log("The student is Indian");
    }
}
const Student={
    name:"Pravallika",
    marks:"95",
    printMarks:function(){
        console.log('Marks=',this.marks)
    }
}
Student.__proto__ = School;
console.log(Student.status());

//Explanation
/*
Student does not originally contain the status() method
By assigning School as the prototype of Student, JavaScript allows Student to access status()
When a method is not found in Student, JavaScript looks it up in the prototype chain
*/

//Key Concept
/*
JavaScript uses prototype-based inheritance, where objects can inherit properties and methods from other objects through the prototype chain.
*/

//⚠️ Note:
/*__proto__ is used for learning; Object.setPrototypeOf() or classes are preferred in production.*/

//2️⃣ Class & Object Creation (ES6 Classes)
//Example
class ToyotoCar{
    constructor(brand){
        console.log("Constructor is called");
        this.brandName=brand;
        console.log("Toyoto's Brand name is:", this.brandName);
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop")
    }
}
//Object Creation
let fortuner = new ToyotoCar("Fortuner");
console.log(fortuner);
console.log(fortuner.start());
console.log(fortuner.stop());

//Explanation
/*
constructor() runs automatically when the object is created
this.brandName stores instance-specific data
Methods like start() and stop() are shared across all objects
*/

//Key Concept
/*
A class acts as a blueprint, and objects are created from it using the new keyword.
*/

//3️⃣ Class Inheritance using extends
//Example
class Parent{
    constructor(){
        this.country="India"
        console.log("We are from ",this.country ) 
    }
    hello(){
        console.log("Hello World");
    }   
    eat(){
        console.log("Eat healty Food");
    }
    sleep(){
        console.log("Have 7hrs sleep");
    }
}

class Child extends Parent{
    // Method Overriding possible here
}
//Object Creation
let obj = new Child();
console.log(obj)
console.log(obj.hello());

//Explanation
/*
Child inherits all properties and methods from Parent
Parent constructor runs automatically when child object is created
Method overriding can be done by redefining methods in the child class
*/

//Key Concept
/*
Inheritance allows child classes to reuse and extend parent class functionality.
*/

//4️⃣ Usage of super Keyword
//Example
class Occupation{
    constructor(country){
        console.log("entered into Parent constructor");
        this.country=country;
        console.log("Country:",this.country);
    }
    work(){
        console.log("Work")
    }
}

class Engineer extends Occupation{
    constructor(country){
        console.log("entered into child constructor");
        super(country); 
        console.log("exited from child constructor");
    }
    build(){
        super.work(); 
        console.log("Build Product/Software");
    }
}

//Object Creation
let engObj = new Engineer("India");
console.log(engObj.build());

//Explanation
/* 
super(country) calls the parent constructor
Parent properties are initialized before child logic executes
super.work() allows reuse of parent class methods
 */

//Key Concept
/* The super keyword is used to access parent class constructors and methods in child classes.*/

/*5️⃣ Error Handling with try...catch
Example*/
a = 5
b = 10
console.log("a+b:",a+b);
console.log("a-b:",a-b);
try{
    console.log("a-c:",a-c);
}catch(err){
    console.log(err);
}
console.log("a*b:",a*b)
// Explanation
/*
Accessing an undefined variable (c) throws an error
try...catch prevents the program from crashing
Execution continues after error handling
*/

//Key Concept
/*
Error handling allows applications to handle runtime errors gracefully without stopping execution.
*/

//✅ Overall Learning Outcome
/* 
Prototype-based inheritance
ES6 classes and object creation
Constructor execution flow
Class inheritance and method reuse
super keyword usage
Error handling with try...catch
*/