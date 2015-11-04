var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 !== "rock" || choice1 !== "paper" || choice1 !== "scissors") {
    compare(userChoice,computerChoice);
    } else if (choice1 === choice2) {
        console.log("The result is a tie!");
        compare(userChoice,computerChoice);
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else if (choice2 === "scissors") {
            return "scissors wins";
        }
    }
};

compare(userChoice, computerChoice);
