// READ EVERY LINE, IMAGINE WHAT IS HAPPENING, AND RESEARCH IF I DONT KNOW.
const myDiv = document.getElementById("myDiv");
const fullTextArray = ["Darren, “The \"old man\" of often too many words\”", "Hi, I'm Darren Hardy and I am the CEO of Aleph-null Ltd.", "I became interested in computer programming in 1981 after realising that the writing on the screen of a friend's TV was emanating from the large \"calculator\" on the floor"];
var charIndex = 0; // Current character of current arrayIndex
let arrayIndex = 0; // The Array index we are currently in.
const typingSpeed = 80; // Milliseconds between each character (adjust for speed)
    
function typeWriter() {
    // start with arrayIndex[0] updating charIndex until the last character in arrayIndex is reached then move onto the next arrayIndex value.
    // put in a <br> when arrayIndex changes and exit the function when charIndex reaches the last member of the array at the final value of the array.
    // if fullTextArray = charIndex.count x arrayindex.count Exit the function. NO

    // Function prints out all of the characters
    myDiv.innerHTML += fullTextArray.charAt(index); // Add one character
    index++;
    setTimeout(typeWriter, typingSpeed); // Call the function again after a delay
    // if at the end of the arrayIndex, put in a <br> and go to the next member of arrayIndex.   
    if (arrayIndex > fullTextArray.length - 1) {
        charIndex = "<br>";
        arrayIndex += arrayIndex;
         // if at the end of fullTextArray.count exit the function.
        if (charIndex = fullTextArray.length - 1) {
            return;
        }
    }
}

// Start the typing effect
typeWriter();
