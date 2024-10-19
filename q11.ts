
//if and else statement// // also if else chain//

let alien_color = "green";

if(alien_color == "green"){console.log("you earned 5 points")};
if(alien_color == "red"){console.log("you earned 0 points")};// this will not print due color not matched//

if(alien_color == "green"){console.log(alien_color)};// in continuation of point 2 of q11.ts//



if(alien_color == "green"){console.log("you earned 5 points");} else{console.log("you have earned 10 points more")};
//this will print on 5 points beacuse you have predict the color is green//

if(alien_color == "red"){console.log("you earned 5 points");} else{console.log("you have earned 10 points more")};
////this will print on 10 points beacuse you have predict the color is wrong//

alien_color = "blue";
if(alien_color == "green"){console.log("you have finish the goal");} // in this case it will not print//
else if(alien_color == "yellow"){console.log("you earned 5 points");}
else(alien_color == "blue"){console.log("you earned 10 points");}


alien_color = "yellow";
if(alien_color == "green"){console.log("you have finish the goal");} 
else if(alien_color == "yellow"){console.log("\t\n you earned 5 points\t\n");}// \t\n for space and line break\\
else(alien_color == "blue"){console.log("you earned 10 points");}