"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let layer = 5;
let apple = 2;
let power = layer ** 2; //this indicates powwer of base ()**// called exponenation//
console.log(power);
let base = 10; //stacks of apples//
let exponenation = 3; //three apples in stacks//
let answer = base ** 3;
console.log(answer);
let totalAircrafts = 28;
let airports = 4;
let divide = totalAircrafts / airports;
console.log(divide); // simple divide//
let totalAircrafts = 48;
let airports = 5;
let distrbute = totalAircrafts % airports;
console.log(distrbute); // this is called modulus %, just divide 48/5, so reminder = 3 //
//example 48/5= 9.36 this is the answer but it divide completely 5*9=45 and reminder = 3//
let apple = 5;
let bags = 2;
let divide = apple % bags;
console.log(divide); // remonder will be one//
let a = 5;
let b = 6;
console.log(++a, --b); // ++a will add a number and --b will a number//
console.log(a++ + b--); // a++ will add a digit = 5+1=6 and b-- subtract a digit = 6-1=5 so 6+5=11//
console.log(++a + --b + b-- + a + b++ + b);
// called unary operators ++, --)
let c = (++a + --b + b-- + a + b++ + b);
console.log(c);
let result = 3 + 5 * 4;
console.log(result);
result++;
console.log(result);
