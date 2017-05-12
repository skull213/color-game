var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
		setupModeButtons();
		setUpSquares();
		reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
			reset();
			//figure out how many squares to show
			//pick new colors
			//pick new pickedColor
			//update pages to reflect changea

		});
	}
}

function setUpSquares(){
		for(var i = 0; i < squares.length; i++ ){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			console.log(clickedColor, pickedColor);
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}

		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new colors from arr
	pickedColor = pickColor();
	//change color dispaly to mach picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";	
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.background = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.dispaly = "none";
		}	
	}
	h1.style.background = "#232323";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop  trough all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = []
	//add sum random colors to array
	for(var i= 0; i < num; i ++ ){
		//get random color and push in array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}
