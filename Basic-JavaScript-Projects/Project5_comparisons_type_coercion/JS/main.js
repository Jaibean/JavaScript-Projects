document.write(typeof "word");  // typeof string
document.write(typeof 3);  //type of number

function myFunction() {
	document.getElementById("test").innerHTML = 0/0;  //NaN 
}

document.write(isNaN("hello"));

function nan() {
	document.getElementById("test1").innerHTML = isNaN("hello");  // NaN output false

}
function nan2() {
	document.getElementById("test2").innerHTML = isNaN('7');  //NaN  output true
}

document.write(2E310); // number higher than floating point number = infinity 

document.write(-3E310); // number lower than floating point number = -infinity 

document.write(10 > 8); // Boolean logic true

document.write(10 < 8); // Boolean logic false

console.log(4 +4);  //calling result to console

document.write("10" + 5);  // tyoe coercion, numbers will not add becasue of inconsistent syntax

console.log(10 < 8);  // false boolean to console

document.write(10 == 10);   //equal to operator true
document.write(10 == 1);  //equal to operator false

y = 10;
x = 10;
document.write(x === y);  // equal to operator

a = "ten";
b = 10;
document.write(a === b);   // equal to operator

a = "eleven";
b = 10;  
document.write(a === b);    // equal to operator

c = "hello";
d = "hell";
document.write(c === d);     // equal to operator

document.write(10 > 8 && 8 > 2);   // and operator true
document.write(5 > 8 && 8 > 2);   // and operator false

document.write(10 > 8 || 2 > 8); /// or operator true
document.write(8 > 2 || 2 > 8); /// or operator false

function notFunction() {
	document.getElementById("not").innerHTML = !(20 >10);
	
}