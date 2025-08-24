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
    

//ARRAYS ____________________________________________
/*
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2[0]);

// array destructuring (rest operator)
const arr4 = [1, 2, 3, 4, 5, 6];
const [x, x2, ...y] = arr4;
console.log(x, x2, y); // 1 2 [3,4,5,6]

// spread operator
const arr5 = [...arr, 6, 7, 8];
console.log(arr5); // [1,2,3,4,5,6,7,8]


//>spread operator
const arr3 = [...arr, 6, 7, 8] //new array  
console.log()
*/


//LOOPS ____________________________________________
const arr = [1, 2, 3];

for (let /*u cannot use const*/ i = 0 ; i < 10; i++){
    console.log(arr[i])
    continue
}


//YA DA
const arr2 = [4, 5, 6];

for (let value of arr2){
    console.log(value)
    
}