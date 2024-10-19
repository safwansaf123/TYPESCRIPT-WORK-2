let quiz : string = "hello";
console.log(quiz.length);   //tell quantity of words in the string//

console.log(10<=5);// 10 is neither less than 5 or equals to 5//
console.log(5/0);// infinity
console.log(2**3);//exponential or power of base

let x: number = 10;
x+=2;    //x=x+2
console.log(x);

let num1: number= 5;
let num2: string='5';
console.log(num1===num2);  //error//

console.log(10+5*2);

//a++, a+=1, a=a+1   use for increment
console.log("5"+5);//55   concatation no add 
console.log("5"-2); // 3 here subtract no concatation

// true indicates 1, "hello" (string), [](empty array)
//false indicates 0, "" (empty string), null
let x1=0;
if(x1){
    console.log("true");
    }else {
        console.log("false");
            }
// in above statement zero to be consider false
// in above statement, if condition will be true always and else will be false see example below 
let x2=0;
if(x2){
    console.log("false");
    }else {
        console.log("true");
            }
let myname: unknown = "safoo" // here it is not string
console.log(myname as string);// to covert we us "as" 