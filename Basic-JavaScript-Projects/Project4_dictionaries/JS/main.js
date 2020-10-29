function myDictionary() {    //creating KVP dictionary 
	var Animal = {
		species: "dog",
		color: "black",
		breed: "poodle",
		age: 3,
		sound: "bark"
	};
	delete Animal.breed;   //using delete operator in KVP dictionary 
	document.getElementById("dictionary").innerHTML = Animal.breed;   
}

/*function mySecondDictionary {   //attempt to have two values with the same key, did not work, broke everything
	var Animal2 = {
		species: "dog",
		color: "black",
		breed: "poodle",
		age: 3,
		sound: "bark",
		species: "cat"
	};
	document.getElementById("dictionary2").innerHTML = Animal2.species;
} */ 

