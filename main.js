const myDiv = document.getElementById("myDiv");
var currentcharacter;
const storefulltext = ["This is senctence 1", "This is senctence 2", "This is senctence 3"];
var currentsentence;
var typingspeed;
var totalcharacters;
const blinkcursorate = 500;

function PETscreen() {
    myDiv.innerHTML += fullTextArray.charAt(index); // Add one character
    index++;
    setTimeout(typeWriter, typingSpeed); // Call the function again after a delay
    var totalcharacters =  storefulltext.length;
    console.log(totalcharacters);
    

}

PETscreen();
