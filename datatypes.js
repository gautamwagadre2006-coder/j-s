//primitibe data types in javascript are: 
// number, string, boolean, null, undefined, symbol and bigint.
let num1=10;
 //this is a number data type
let num2="10";
 //this is a string data type because it is enclosed in double quotes
let isLoggedIn=true;
 //this is a boolean data type
let empty=null;
 //this is a null data type
let undefinedValue=undefined;
 //this is an undefined data type
let symbolValue=Symbol('key'); 
//this is a symbol data type
let bigintValue=BigInt(123456789012345678901234567890);
 //this is a bigint data type

 //non-primitive data types in javascript are:
// object, array and function.
let person={
    name: "John",
    age: 30,
    isEmployed: true
}; // this is an object data type

let numbers=[1, 2, 3, 4, 5]; // this is an array data type  
function greet(name){
    return "Hello, " + name + "!";
} // this is a function data type
