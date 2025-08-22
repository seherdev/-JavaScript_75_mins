const prompt = require("prompt-sync")();  

const v = prompt("Enter a value: ");
console.log(v)

//data types:
String // ""  '' `` 
boolean //true or false
number // 1, 2, 3, -4, 5
undefined //is a type and where an expr. dont have correct value
null // empty or nothing value. also type of value

BigInt // for large numbers
Symbol // unique and immutable value

//VARIABLES
var helloWorld = "HELLO" //func. scoped , u can change it later

let x = 3 //u can change it later //BLOCK scoped

const y = 5 //cant be changed later //BLOCK scoped

//BLOCK VS FUNC. SCOPE

//BLOCK SCOPE:  
//block içinde ulaşılabilir. Dışında değil.

/*
== are they same, 
=== tamamen aynı mı diye bakar. strict comparison. RECOMMENDED
 != , !== 
 , > , < , >= , <=
&& , || , !
+ , - , * , / , %
++ , --
*/    

/*       ------conditional statements------*/
if(true) {
    console.log("this is true")
} else if(false) {
    console.log("this is false")}
    