//contineous operation of script called loop example song repeating//
//WHILE loop is a control flow statement that executes a block of code repeatedly executes a block of code as long as a specified condition is true//
// IS A CONTROLLED FLOW STATEMENT means a condition is met it stops//

//--------------syntax----------

/*  
while (condition){  
  }
*/                                     // initialization, condition , print with incrememnt/decrement, 

let f = 0;
while (f<10){             //condition f is less than 10 print it//
    console.log(f)       // it will print zero ten times//
    f++;                 //this uniary operators with 1 increment this will print 0123456789////10 will not print condition met//
};

while (f<=10){        //ten will print f is less than and equal to 10//
    console.log(f)
    f++
};

// let f=11                             
//  while (f>10){               // never do this becuase condition will never meet and it will run contineous system hangs memory crash// 
//   console.log(f)                // f is greator than 10// // CONDITION IS ALREDY TRUE//
//    f++ }

//DO-WHILE LOOP is a control flow statement that executes a block of code at least once, 
// and repeatedly executes a block of code as long as a specified condition is true//
//difference b/w while and do while, in while data will not print and in do-while statement will print first and loops starts
//--------------syntax----------

/*  
  
  do  { 
 }  while (condition);

 */                                        // initialization, print atleast one, incrememnt/decrement, condition
let g=5
do{
    console.log(g)
    g++
}
while(g>10); //g is greater than ten    //loops not work because g is greater than 5, but it will print at least once. 




let h=0
do{
    console.log(h)
    h++
}
while(h<4);// h is less than 4

/* FOR-LOOP is a control flow statement that goes through a list of things or steps,
executes a block of code for each item in the list */
/*example shopping list you buy until list is complete*/

//--------------syntax----------
/*   for (initialization; condition; increment/decrement){   }    */

for(let k=0; k<4; k++){
    console.log(k)
};


for(let k=2; k<=50; k+=2){
    console.log(k)             //print all even numbers till 50//
};


for(let k=1; k<=50; k+=3){
    console.log(k)             //print all odd numbers till 50//
};0

// FOR-in LOOP  or FOR-EACH LOOP     works with array
//first see simple for loop for array
let i:any;   // because data store in array [] in form of numbers [0,1,2,3,4,5,]
let names:string[]=["safoo","adil","asharib", "ameen", "reeha", "marium"];

for (i=0; i<names.length; i++)
{
console.log(i)    // will print [0,1,2,3,4,5] not print data in array
};

for (i=0; i<names.length; i++)
    {
    console.log(names[i])    // will print names in []
    };
//now for in loop for array

let k:any;
let names1:any[]=["safoo","adil","asharib", "ameen", "reeha", "marium","mehwish"];

//example 1
for (k in names1){
    console.log(k)  // will print [0,1,2,3,4,5] not print data in array
};

//example 2
for (k in names1){
    console.log(names1[k])   // will print names in [] one time
};

// example 3
for (k in names1){
    console.log(names1[2])   // will print names six times due to data in [] at position 2
};



// FOR-off LOOP       works with array

for(k of names1){
    console.log(k)   // here of means what is written in k
};
