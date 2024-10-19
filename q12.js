"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 48;
if (age > 2) {
    console.log("the person is a baby");
}
if (age > 6) {
    console.log("the person is a toddler");
}
if (age > 38) {
    console.log("the person is a man");
}
if (age > 48) {
    console.log("person is wise man");
}
else {
    console.log("person is old");
}
let favorite_fruits = ['apple', 'banana', 'orange', 'grapes', 'cherries'];
if (favorite_fruits.includes('banana')) {
    console.log("you fruit basket is complete");
}
// this will print basket complete other wise not//// see down//
if (favorite_fruits.includes('pineappple')) {
    console.log("you fruit basket is complete");
} // not print due not included pineapple//
if (favorite_fruits.includes('pineappple')) { }
else
    (console.log("you fruit basket is incomplete"));
// this will print basket incomplete//
if (favorite_fruits.includes('apple')) { }
else
    (console.log("you fruit basket is incomplete"));
if (age < 6) {
    console.log(age);
}
else {
    console.log("safoo");
}
;
//switch case same as if else 
switch (variable_expression) {
    case constant_expr1: {
        //statements; 
        break;
    }
    case constant_expr2: {
        //statements; 
        break;
    }
    default: {
        //statements; 
        break;
    }
}
