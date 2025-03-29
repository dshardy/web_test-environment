
let i = 0;
let placeholder = "";
//const fullTextArray = ["This is senctence 1", "This is senctence 2", "This is senctence 3"];
const txt = "example@domain.com";
var speed = 100;

/* const myDiv = document.getElementById("myDiv");
var currentcharacter = 0;
var currentsentence = 0;
var totalcharacters = 0;
const blinkcursorate = 500;  */

 function PetScreen(){
    // function type(){
    placeholder += txt.charAt(i); // Add one character
    document.getElementById("myDiv").textContent = placeholder;
    //document.getElementById("myDiv").setAttribute("placeholder", placeholder);
    //document.getElementById("email-id").setAttribute("placeholder", placeholder);
    i++;
    setTimeout(PetScreen,speed); // Call the function again after a delay
}

/* function type(){
    placeholder += txt.charAt(i);
    document.getElementById("email-id").setAttribute("placeholder",placeholder);
    i++;
    setTimeout(type,speed);
} */

PetScreen();

