"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["northkorea", "iran", "russia", "pakistan", "america",];
console.log(names); //this wiil print all data mentioned in string//
let message = ("will join");
console.log(names[0], message, names[3]); //this will print the data mentioned or located at 0 and 3//
// to print message for all countries//
names.forEach(names => { console.log(`${message} ${names}`); });
// to print message for all countries with all countries//
names.forEach(names => { console.log(names, `${message} ${names}`); });
//to print message for one alphabet of countries with all//
names.forEach(names => { console.log(names[(2)], `${message} ${names}`); });
names.forEach(names => { console.log("pakistan" + `${message} ${names}`); });
names.forEach(names => { console.log(names + 'loves me'); });
names.forEach(names => { console.log(names, `${message}`); });
console.log(names, `${"loves me"}`);
