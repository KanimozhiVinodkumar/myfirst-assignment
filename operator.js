//arithmetic operator

function SumOf2Numbers(a,b){
    return a+b;
}
const sum=SumOf2Numbers(3,5);
console.log(sum);
//8

function SumOf2Numbers(a,b){
    return a-b
}
const sum=SumOf2Numbers(10,5)
console.log(sum);
//5

function SumOf2Numbers(a,b){
    return a*b
}
const sum=SumOf2Numbers(3,5);
console.log(sum);
//15
function SumOf2Numbers(a,b){
    return a%b;
}
const sum=SumOf2Numbers(3,5);
console.log(sum);
//3
function SumOf2Numbers(a,b){
    return a**b;
}
const sum=SumOf2Numbers(3,5);
console.log(sum);
//243


//ASSIGNMENT OPERATOR

let assop= 10;
assop += 5;
console.log(assop);
//15

let assop= 10;
assop -= 5;
console.log(assop);
//5

let assop= 10;
assop *= 5;
console.log(assop);
//50


//COMPARISON OPERATOR

console.log(10==10);
//true
console.log(10=='10');
//true
console.log(15===15)
//true
console.log(25!=25)
// false
console.log(10!=15)
//true
console.log(5!="5")
//false

const age=18;
console.log(age>18); //false
console.log(age>=18); //true

const age=25;
console.log(10<10)//false
console.log(age<26)//true
console.log(age<=26)//true

//EX:2
let mark10th = 450;
let mark12th = 750;
let aadhar =  true;
console.log(mark10th>=400 && mark12th>=700 && aadhar)
//true

let mark10th = 450;
let mark12th = 750;
let aadhar =  true;
console.log(mark10th>=460 || mark12th>=760 || aadhar) 
//true

//TERNARY OPERATOR
let age = 30;
age>18?
console.log("you get an driving licence"):
console.log("you not get an driving licence");
//you get an driving licence

let age = 15;
age>18?
console.log("you get an driving licence"):
console.log("you not get an driving licence");
//you not get an driving licence

//UNARY OPERATOR
let num1 ="25";
let num2 = 25;
console.log(typeof num1)   //string
console.log(typeof num2)   //number
 let num11="10";
 let num22=+ num11;
 let num33 = false;
 console.log(num33);  //fasle
 console.log(+num11); // 0

 let num11="10";
 let num22=+ num11;
 let num33 = false;
 console.log(num33);  //fasle
 console.log(+num11); //10