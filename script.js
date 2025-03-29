
let i = 0; // Index for characters within a sentence
let sentenceIndex = 0; // Index for the current sentence in fullTextArray
let placeholder = "";
const fullTextArray = ["This is sentence 1", "This is sentence 2", "This is sentence 3"];
var speed = 170;

function PetScreen() {
  // Check if we've finished the current sentence
  if (i < fullTextArray[sentenceIndex].length) {
    // Add one character from the current sentence
    placeholder += fullTextArray[sentenceIndex].charAt(i);
    document.getElementById("myDiv").textContent = placeholder;
    i++;
    setTimeout(PetScreen, speed); // Continue typing the current sentence
  } else {
    // We've finished the current sentence
    placeholder = ""; // Reset placeholder for the next sentence
    i = 0; // Reset character index for the next sentence
    sentenceIndex++; // Move to the next sentence

    // Check if we've finished all sentences
    if (sentenceIndex < fullTextArray.length) {
      setTimeout(PetScreen, speed); // Start typing the next sentence
    } else {
        //All sentences have been displayed.
        console.log("All sentences have been displayed.");
    }
  }
}

PetScreen();











































PetScreen();

