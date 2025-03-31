
let i = 0; // Index for characters within a sentence
let sentenceIndex = 0; // Index for the current sentence in fullTextArray
let placeholder = "";
var speed = 170;
const fullTextArray = ["Darren, \“The \‘old man\’ of often too many words\”.",
  "Hi, I'm Darren Hardy and I am the CEO of Aleph-null Ltd.",
  "I became interested in computer programming in 1981 after realising that the writing on the screen of a friend's TV was emanating from the large ‘calculator’ on the floor.", 
  "The calculator was a Sinclair ZX81 personal computer.", 
  "After many hours of manually typing code from a magazine onto the TV I was amazed when we discovered that the code could be transferred using an audio lead onto a tape recorder and later, with varying success replayed back into the TV. How clever!", 
  "For the majority of my career I have been self employed.", 
  "In 1985 when I was 18 I took over joint ownership of, and helped to run, our 'family run' pub (bar).",
  "In 1991 we agreed that I could buy a £3000 Dell computer (a mighty sum in those days) to help with managing the business finances which wasn't easy because the business was significantly overdrawn.",
  "The computer had the first Pentium 60 processor (upgrade from the 486 pc), 4 MB (not Gigabytes) of RAM and a 350 MB hard drive.",
  "A friend asked me what i was going to use all of that storage for?",
  "During the day I worked in the construction industry, worked sessions behind the bar in the evening and stayed up late learning finance, accounting and computing at night.",
  "Within 2 years, I had taken control of the finances, stock control and pricing using Microsoft Excel and written tools to help with this using VBA (Visual Basic for Applications in those days).",
  "Businesses would previously have no option but to trust their suppliers pricing and just pay invoices. Our suppliers were amazed that I was able to calculate accurately penny increases in product prices and be able to tell them which products had been increase contrary to our agreement.",
  "The telesales staff would call management for help during our weekly order negotiations and declare in the office\, \"Computer man is on the phone\".",
  "The power of computing propelled the business into a comfortable financial position as Bill Gates predicted in his book \"The Road Ahead\".",
  "In the mid 1990's we lost significantly investing in the Tech stock boom (don't remind me) and over 3 weeks were, as an anonymous forum poster predicted, \"played like a piano\".",
  "At 19, I qualified with distinctions in City and Guilds Carpentry and Joinery, learned plastering, and started my own construction company \"Adur Construction\".",
  "In 2006, Part 'P' was introduced in the Electrical industry and I gained the 2382 - 17th Edition Electrical Installation and 2391 - Electrical Testing and Inspection qualifications.",
  "I started an Electrical Installation company \"DHardyElectrical\" and joined the NICEIC as an Approved Contractor which i ran until 2013.",
  "This was a difficult time for my family. The 2008 Banking crisis took its toll and we were one of many families that lost their homes.",
  "After a period of nine months without work I decided to take another direction in my career and applied to study Electronic and Computer Engineering at the University of Brighton.",
  "In the foundation year, I achieved one of my bucket list dreams, programming an EPROM, which i thought was cutting edge technology.",
  "A 1st Class Honours may have been possible if I had not become obsessed with programming microcontrollers in year 1 and FPGA's (very fast reconfigurable processors that 'parallel' process digital logic) in year 2.",
  "I Graduated from the University of Brighton with 2:1 MEng Electronic and Computer Engineering in 2018 at the grand age of 51 (it’s never too late) not at all confident that I would be able to secure employment.",
  "A technological button click can be life changing. I submitted 'available for work' on LinkedIn without realising this request would go out to the world and a good friend (who didn't often visit the site) saw this.",
  "He had secured a position in a local start-up company and overheard the Boss mention that the company was looking for additional Engineers. I secured a job as a Senior Embedded Systems Engineer with the company after an interview, during which I realised that my Boss and I had lived only 200m apart for many years, shared a mutual interest in Technology and Computing from a very early age, and I was surprised that we had not 'crossed paths' proir to the inverview.",
  "Sammy joined the company two years later and we have worked closely together since then and will hopefully continue to do so."
  ];




function PetScreen() {
  // Check if we've finished the current sentence
  if (i < fullTextArray[sentenceIndex].length) {
    // Add one character from the current sentence
    placeholder += fullTextArray[sentenceIndex].charAt(i);
    document.getElementById("myDiv").innerHTML = placeholder;
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

PetScreen()











































PetScreen();

