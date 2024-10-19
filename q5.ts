//are called operators//
console.log(5+3);//add//    
console.log(5-3);//sub//
console.log(5*3);//mul//
console.log(5/3);//divode//

let a: number = 5;
let b: number = 8;
let c: number = 11;
console.log(a + b);// simple add//
console.log(a - b);// simple add//
console.log(a*b);
console.log(a/b);

let reminder = c % a;// it means 11 divide by 5 = 2.2 but it tells remain or reminder not complete divisible
console.log(reminder);//1


console.log(a++, a--, b++, b--); 
console.log(++a, --a, ++b, --b);   // unary operators ++ or --//

console.log(c-=5);//subtract 5 to 11 another method  c=c-5//
console.log(c-=5);
console.log(c-=5);
//if above statement written one by one it will act like series c=c-5, c=6  and again c=c-5 c=1 now c=c-5 so c=-4//
//same for add multiply and divide//

let isEqual = (a==b);//statement true or false boolean expression 'a is equal to b' so it will print false//\\its asking that a isEqual to b//
console.log(isEqual);
let isNotEqual = (a!=b)// statement true or false boolean expression 'a is not equal to b' so it will print true//
console.log(isNotEqual);
let isGreaterThan = (a>b);//a is greater than b//
console.log(isGreaterThan);
let isLessThan = (a<b);//a is less than b//
console.log(isLessThan);

console.log(5>0);// answer will be true 5 is greater than 0//

console.log((5<0)||(2>0));// the sign || indicates OR GATES means one statement correct, answer will be true//
console.log((5<0)&&(2>0));// the sign && indicates AND GATES means all statements must be correct, answer will be false//
console.log(!(5>0));// the sign ! indicates NOT GATES means what ever is the statement answer will be opposite//
/*
AND (&&) Operator: The AND && operator returns true if both operands are true.
OR (||) Operator: The OR || operator returns true if at least one of the operands is true.
XOR (^):Operator, represented by the symbol ^, performs a logical exclusive OR operation between corresponding bits of two numbers. The result is a new number where each bit is set to 1 only if one of the bits in the same position of the operands is 1, but not both.
NOT (!) Operator: The NOT ! operator negates a boolean value, converting true to false and vice versa.
NOT (~) Complement (~): operator:  ~, performs a bitwise NOT operation on a number, flipping all its bits. This operator effectively changes each 0 to 1 and each 1 to 0.
Left Shift (<<): The left shift operator, represented by the symbol <<, shifts the binary bits of a number to the left by a specified number of positions. The leftmost bits are discarded, and new zeros are added on the right side. Each shift to the left doubles the value of the number.
Right Shift (>>): The right shift operator, represented by the symbol >>, shifts the binary bits of a number to the right by a specified number of positions. The rightmost bits are discarded, and new zeroes are added on the left side. For positive numbers, each shift to the right halves the value of the number.
*/

let logicalNot= !(a>0);
console.log(logicalNot);
let logicalOr=((5<0)||(2>0));
console.log(logicalOr);
let logicalAnd=((5<0)&&(2>0));
console.log(logicalAnd);


console.log((10>5)&&(20<30));


/*
Equal to (==): Checks if two values are equal.
Not equal to (!=): Checks if two values are not equal.
Strictly equal to (===): Checks if two values are equal in value and type.
Strictly not equal to (!==): Checks if two values are not equal in value and type.
Greater than (>): Checks if the value on the left is greater than the value on the right.
Less than (<): Checks if the value on the left is less than the value on the right.
Greater than or equal to (>=): Checks if the value on the left is greater than or equal to the value on the right.
Less than or equal to (<=): Checks if the value on the left is less than or equal to the value on the right.*/
