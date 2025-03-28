

const myDiv = document.getElementById("myDiv");
var currentcharacter = 0;
const fullTextArray = ["This is senctence 1", "This is senctence 2", "This is senctence 3"];
var currentsentence;
var typingspeed = 100;
var index = 0;
var totalcharacters = 0;
const blinkcursorate = 500;

function PetScreen() {
    myDiv.innerHTML += fullTextArray.charAt(index); // Add one character
    index++;
    setTimeout(PetScreen, typingspeed); // Call the function again after a delay
    var totalcharacters =  fullTextArray.length;

}

PetScreen();
