function firstChar(text) {
	let arr = text.split("");
	return arr[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
