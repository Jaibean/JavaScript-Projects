// Variable declared globally
const color = 'blue';

function printColor() {
  console.log(color);
}

printColor(); // Prints: blue

//Variable declared locally 

function myFunction() {
  var pizzaName = "Pepperoni";
  console.log(pizzaName);
  
}
// using if statements 
function get_date() {
	if (new Date().getHours() < 18) {
	document.getElementById("greeting").innerHTML = "How are you today?"
}
}

// using if else statemnts
/*const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday')); */

function plantsNeedWater() {
	day = document.getElementById("day").value;
	if (day === 'Wednesday') {
		water = "You do not need to water the plants today";
	} else  {
		water = "It is time to water the plants";
	}
	document.getElementByID("plants").innerHTML = water;
}


function Time_function() {
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0) {
		Reply = "It is morning time!";
	} else if (Time > 12 == Time < 18) {
		
	} else {
		Reply = "It is evening time.";
	}
	document.getElementById("Time_of_day").innerHTML = Reply;
}

