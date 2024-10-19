"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let aircraft = ['B777', 'A320', 'A310', 'B747'];
console.log(aircraft[0]);
console.log(aircraft[6]); // undefined//
let message = 'i have full experience on';
console.log(message, aircraft[0]);
console.log(message, 'also', aircraft[1]);
aircraft.forEach(aircraft => { console.log(`i would like to own a ${aircraft}.`); });
//this will print for all data mentioned in string//3
aircraft.forEach(aircraft => console.log(`mine ${aircraft}`));
