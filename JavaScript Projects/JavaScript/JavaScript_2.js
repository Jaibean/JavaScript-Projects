function validateForm() {
  var x = document.forms["myForm"]["First_Name"]["Last_Name"]["Email"].value;
  if (x == "") {
    alert("All fields must be filled out must be filled out");
    return false;
  }
}// JavaScript Document