

// let myFavNum:number = 10;
// let myFullName:string = "salman farcy is the great parsone";


// // myFavNum = "thapa";
// console.log(myFavNum.toString());

// let sum1 = myFavNum + 10;
// console.log(sum1);


let myFullName = "salman farcy"
let myFirstName = "salman"
let myLastName = "farcy"

myFullName = myFirstName + myLastName
// console.log(myFullName)


// TODO: string initialization: 
let message:string = "Hello , Typescript!"
// console.log(message)



// TODO: string Length: 
let sentence:string =  "Please subscribe my channel";
let sentenceLength:number = sentence.length;
// console.log(sentenceLength);


//  TODO: Uppercase and Lowercase:
let text:string = "Please Subscribe My Channel";
let uppercaseText:string = text.toUpperCase();
let lowercaseText:string = text.toLowerCase();
// console.log(uppercaseText);
// console.log(lowercaseText);


// TODO: BOOLEAN TYPE
let isMyNameVinod:boolean = true;
let isDone:boolean = true;
let hasStarted:boolean = false;


// hasStarted = "yes" // invalid


//!Question: Check Even Number
function isEven(a:number):boolean{
     return a % 2 ==  0
}

//functiion call
console.log(isEven(11));