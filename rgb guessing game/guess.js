var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerBackground = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardBt = document.querySelector("#hardBt");
var easyBt = document.querySelector("#easyBt");

easyBt.addEventListener("click", function(){
	easyBt.classList.add("selected");
	hardBt.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBt.addEventListener("click", function(){
	hardBt.classList.add("selected");
	easyBt.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a random color from array
	pickedColor = pickColor();
	console.log(colors, pickedColor);
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}
	headerBackground.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			message.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			colorChange(pickedColor);
			headerBackground.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			message.textContent = "Try Again!";
		}
	});
}

function colorChange(color){
	//select all squares
	for (var i = 0; i < squares.length; i++) {
		//make all colors same as the correct color
		squares[i].style.background = color;
	}
}

//random colorDisplay
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add random colors to the array
	for(var i = 0; i < num; i++){
		arr.push(randomColors());
	}
	//return that array
	return arr;
}

function randomColors(){
	//pick a "red" from 0 -255
		var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 -255
		var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
		var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}