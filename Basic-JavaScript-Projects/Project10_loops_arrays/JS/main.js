// while loop
function Call_Loop() {
	var Digit = "";
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Loop").innerHTML = Digit;
}

// for loop calling to the console

var instruments = ['Bass', 'Guitar', 'Drums'];
for (i = 0; i < instruments.length; i++){
  console.log(`I would love to play ${instruments[i]}`);
}

// for loop calling to html

var Insts = ['Bass', 'Guitar', 'Drums'];
var content = "";
var Y;
function for_Loop() {
	for (Y = 0; Y < Insts.length; Y++) {
		content += Insts[Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = content;
}

// array and function 

var groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
	function array_Function(arr) {
		groceryList[arr] = "Tea bags";
		document.getElementById("Array").innerHTML = groceryList[arr];
	}


//object wtih const
function constant_function(){
	const Musical_Instrument = { type:"guitar", brand:"Fender", color:"black", texture:"smooth", sound:"electric"};
	Musical_Instrument.color = "red";
	Musical_Instrument.price = "$900";
	document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.sound + " " + Musical_Instrument.type + " is " + Musical_Instrument.price;
}

// function with let & break 

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}


// return statment 
function myName(name) {
  return "Hello " + name;
}
document.getElementById('post').innerHTML = myName('Jaimie');

// object function

let car = {
	make: "Volkswagen ",
	model: "Tiguan ",
	year: "2019 ",
	color: "black ",
	description: function() {
		return "The car is a " + this.year + this.color + this.make + this.model;
	}
	
};
document.getElementById("Car_Object").innerHTML = car.description();

// break keyword ~ allows program to break out of a loop
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

// continue keyword ~ allows the program to jumo over one iteration in the loop 