const myDiv = document.getElementById("myDiv");
var currentCharacter = 0;
const fullTextArray = ["This is senctence 1", "This is senctence 2", "This is senctence 3"];
var currentSentence = 0;
var typingSpeed = 100;
var totalCharacters = 0;
const blinkCursoRate = 500;

function PetScreen() {
    myDiv.innerHTML += fullTextArray.charAt(currentCharacter); // Add one character
    currentCharacter++;
    setTimeout(PetScreen, typingSpeed); // Call the function again after a delay
    var totalcharacters =  fullTextArray.length;
    console.log(totalCharacters);
    

}

PetScreen();
