"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
ball = sphere;
sphere = ball; // both have diameter in number so can be equal or both keys are same i.e diameter not value 
console.log(sphere);
console.log(ball);
