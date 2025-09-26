// Coded this to learn. Doesn't take a while when you can already code.
let answer = Math.floor((Math.random() * 50) + 1);
let turns = 5;
let guess = ""

alert("Welcome to my number guessing game! It is my first javascript project as I try to learn the language.");

while (turns >= 1) {
    
    //console.log("Answer:", answer) // Debug
    console.log("You have", turns, "turns left.");
    
    let guess = prompt("Guess a number between 1 - 50:");

    if (guess < answer) { // Player's guess is too low
        console.log("Too low:", guess);
        alert("Too low!", turns, "tries left.");
        turns = turns - 1;

    } else if (guess > answer) { // Player's guess is too high
        console.log("Too high:", guess);
        alert("Too high!", turns ,"tries left!");
        turns = turns - 1;

    } else if (guess == answer) { // Player guesses correct
        let attempts = 5 - turns;
        console.log("Correct:", guess)
        console.log("You found the answer (", answer, ") in", attempts, "tries.");
        alert("You found the answer (", answer, ") in", attempts, "tries.");
        break;

    } else { // User provides garbage
        console.log("Invalid input:", guess);
        alert("You must enter a number. No turns lost.");
    };
    
};

if (turns == 0) {
    console.log("You ran out of turns, the answer was", answer);
    alert("You ran out of turns, the answer was" + answer + ".");
};