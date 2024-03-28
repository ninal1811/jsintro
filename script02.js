alert("Lets compare numbers");
let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");

if (num1 == num2) {
	alert(num1 + " is equal to " + num2);
} else if (num1 > num2) {
	alert(num1 + " is greater than " + num2);
} else {
	alert(num1 + " is less than " + num2);
}