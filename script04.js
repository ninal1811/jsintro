alert("Guess the number")
let num = prompt("Enter a number between 0 and 10: ")
let randomNum = Math.floor(Math.random() * 11);

function choice(num) {
	if (num == randomNum) {
		return "You guessed the number";
	} else if (num > randomNum) {
		return "Your guess is greater than the number";
	} else {
		return "Your guess is less than the number";
	}
}

alert(choice(num));
alert("The number is " + randomNum);