// Coded this to learn. Doesn't take a while when you can already code.
const answer = Math.floor((Math.random() * 50) + 1);
let turns = 5;
let guess = "";

alert("Welcome to my number guessing game! It is my first javascript project as I try to learn the language.");

while (turns >= 1) {
    
    //console.log("Answer:", answer) // Debug
    console.log("You have", turns, "turns left.");
    
    let guess = prompt("Guess a number between 1 - 50:");

    if (guess < answer) { // Player's guess is too low
        console.log("Too low:", guess);
        turns -= 1;
        alert(`Too low! ${turns} attempts left.`);

    } else if (guess > answer) { // Player's guess is too high
        console.log("Too high: " + guess);
        turns -= 1;
        alert(`Too high! ${turns} attempts left!`);
        
    } else if (guess === answer) { // Player guesses correct
        console.log("Correct:", guess)
        console.log(`You found the answer ${answer} in ${5 - turns} attempt(s).`);
        alert(`You found the answer ${answer} in ${5 - turns} attempt(s).`);
        break;

    } else { // User provides garbage
        console.log("Invalid input: " + guess);
        alert("You must enter a number. No turns lost.");
    };
    
};

if (turns == 0) {
    console.log("You ran out of turns, the answer was " + answer);
    alert("You ran out of turns, the answer was " + answer + ".");
};
