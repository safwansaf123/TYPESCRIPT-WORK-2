
// just simple typing or type inference//
userName = "safwan";
age = 38
console.log(userName,age)

//strong typing means means username is string means textual data, age is number no textual data, isstudent is boolean mean true or false etc..//
let userName: string = 'safoo'; // red under the username is showing due to already taken before or error in writting same for below//
let age: number = 38;
let isStudent: boolean = false;
let randomValue: any = "safoo is a good boy by sir aleem alam";
console.log(userName, age, isStudent, randomValue);// string concatenation means series of interconnected things//

let message: string = 'BIO DATA OF';
console.log(`${message}, ${userName}, ${isStudent}, ${randomValue}`);//template literals//
//both concatenation and template literals serve the purpose of manipulating the strings//
//difference between concatenantion and literals is more consice than concatenation//

//for example you need to type space between two strings via concatenation//
let concatenantion1: string=(message+userName);//so//
console.log(concatenantion1);
let concatenantion: string=(message+"   "+userName);//so enter + sign and "" spcae between them//
console.log(concatenantion);
let template:string= (`${message} ${userName}`)// just add back tik and $ sign with curly brackets{}//
console.log(concatenantion);
console.log(template);
