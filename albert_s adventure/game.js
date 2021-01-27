const levels = [  
    //level 0    
	["flag", "rock", "", "", "",
	 "fenceside", "rock", "", "", "rider",
	 "", "tree", "animate", "animate", "animate",
	 "", "water", "fenceup", "", "",
	 "", "fenceup", "", "horseup", ""],

	 //level 1
	 ["flag", "water", "", "", "",
	  "fenceside", "water", "", "", "rider",
	  "animate", "bridge animate", "animate", "animate", "animate",
	  "", "water", "", "", "",
	  "", "water", "horseup", "", ""],

	 //level 2
	 ["tree", "tree", "flag", "tree", "tree",
	  "animate", "animate", "animate", "animate", "animate",
	  "water", "bridge", "water", "water", "water",
	  "", "", "", "fenceup", "",
	  "rider", "rock", "", "", "horseup"] 
];  //end of levels 

const gridBoxes = document.querySelectorAll("#gameBoard div");
const noPassObstacles = ["rock", "tree", "water"];

var gameLost = false;
var currentLevel = 0; //starting level
var riderOn = false; //is the rider on?  
var currentLocationOfHorse = 0;
var currentAnimation; //allows to have one animation per level
var widthOfBoard = 5;

if(currentLevel == 0) {
	showStartMessage("Albert and Simon's Adventure", "Simon is a world-famous rider. He and his best horse, Albert, are invited to a showoff of their abilities. The goal is to get to the flag without passing through water, tree and rocks. But remember, Albert can neither get the flag nor jump fences as long Simon isn't riding him.\nEnjoy!");
}

//start game 
window.addEventListener("load", function () {
	loadLevel();
});

//close light box
function startGame() {
	changeVisibility("lightbox");
    changeVisibility("startMessage");
} //continueGame

function newGame() {
	//show lightbox
    changeVisibility("lightbox");

    if(currentLevel < 2) {
    	changeVisibility("boundaryMessage");
    }

    if(currentLevel >= 2) {
 	   changeVisibility("finalMessage");
	}

    changeVisibility("controls");

    gameLost = false; 
	currentLevel = 0; //starting level
	riderOn = false; //is the rider on?  
	currentLocationOfHorse = 0;
	currentAnimation; //allows to have one animation per level
	widthOfBoard = 5; 
	
	document.onkeydown =  function (e) { keydownEventListener(e); };

	loadLevel();
} //newGame

//move horse
document.onkeydown =  function (e) { keydownEventListener(e); };


function keydownEventListener(e){

	switch (e.keyCode) {
		case 37: //left arrow
		if (currentLocationOfHorse % widthOfBoard !== 0) {
			tryToMove("left");
		}
		break;

		case 38: //up arrow
		if (currentLocationOfHorse - widthOfBoard >= 0) {
			tryToMove("up");
		}
		break;

		case 39: //right arrow			
		if (currentLocationOfHorse % widthOfBoard < widthOfBoard - 1) {
			tryToMove("right");
		}
		break;

		case 40: //down arrow
		if (currentLocationOfHorse + widthOfBoard < widthOfBoard*widthOfBoard) {
			tryToMove("down");
		}
		break;
	} //switch

}; //key event listener


//try to move horse
function tryToMove (direction) {

	//location before move
	let oldLocation = currentLocationOfHorse;

	//class of location before move
	let oldClassName = gridBoxes[oldLocation].className;

	let nextLocation = 0;   //location we wish to move to
	let nextClass = "";  //class of location we wish to move to

	let nextLocation2 = 0;
	let nextClass2 = "";

	let newClass = "";  //new class to switch to if move succesful

	switch (direction) {
		case "left":
		nextLocation = currentLocationOfHorse - 1;
		break;

		case "right":
		nextLocation = currentLocationOfHorse + 1;
		break;

		case "up":
		nextLocation = currentLocationOfHorse - widthOfBoard;
		break;

		case "down":
		nextLocation = currentLocationOfHorse + widthOfBoard;
		break;	

	} //switch

	nextClass = gridBoxes[nextLocation].className;

	//if the obstacle is not passable, don't move
	if (noPassObstacles.includes(nextClass)) { return; }

	//if the next obstacle's a fence and there's no rider don't move
	if (!riderOn && nextClass.includes("fence")) { return; }

	//if there's a fence and there's the rider, move two spaces with animation
	if (nextClass.includes("fence")) {
		
		//if there's a side fence and the player tries to jump over it from the side, don't move
		if (nextClass.includes("fenceside") && riderOn && (nextLocation == currentLocationOfHorse - 1 || nextLocation == currentLocationOfHorse + 1)) { return; }

    	//if there's a fence up and the player tries to jump over it from the side, don't move
		if (nextClass.includes("fenceup") && riderOn && (nextLocation == currentLocationOfHorse - widthOfBoard || nextLocation == currentLocationOfHorse + widthOfBoard)) { return; }

		//rider must be on to jump
		if (riderOn) {
			gridBoxes[currentLocationOfHorse].className = "";
			oldClassName = gridBoxes[nextLocation].className;
		
		//set values according to direction
		if (direction == "left") {
			if(gridBoxes[currentLocationOfHorse - 2].className == "fenceside" || gridBoxes[currentLocationOfHorse - 2].className == "fenceup" || gridBoxes[currentLocationOfHorse - 2].className == "rock" || gridBoxes[currentLocationOfHorse - 2].className == "tree" || gridBoxes[currentLocationOfHorse - 2].className == "water") {
				gridBoxes[currentLocationOfHorse].className = "horserideleft";
				return;
			} else {
				nextClass = "jumpleft";
				nextClass2 = "horserideleft";
				nextLocation2 = nextLocation - 1;
            }

		} else if (direction == "right") {
			if(gridBoxes[currentLocationOfHorse + 2].className == "fenceside" || gridBoxes[currentLocationOfHorse + 2].className == "fenceup" || gridBoxes[currentLocationOfHorse + 2].className == "rock" || gridBoxes[currentLocationOfHorse + 2].className == "tree" || gridBoxes[currentLocationOfHorse + 2].className == "water") {
				gridBoxes[currentLocationOfHorse].className = "horserideright";
				return;
			} else {
				nextClass = "jumpright";
				nextClass2 = "horserideright";
				nextLocation2 = nextLocation + 1;
            }

		} else if (direction == "up") {
			if(gridBoxes[currentLocationOfHorse - widthOfBoard*2].className == "fenceside" || gridBoxes[currentLocationOfHorse - widthOfBoard*2].className == "fenceup" || gridBoxes[currentLocationOfHorse - widthOfBoard*2].className == "rock" || gridBoxes[currentLocationOfHorse - widthOfBoard*2].className == "tree" || gridBoxes[currentLocationOfHorse - widthOfBoard*2].className == "water") {
				gridBoxes[currentLocationOfHorse].className = "horserideup";
				return;
			} else {
				nextClass = "jumpup";
				nextClass2 = "horserideup";
				nextLocation2 = nextLocation - widthOfBoard;
            }

		} else if (direction == "down") {
			if(gridBoxes[currentLocationOfHorse + widthOfBoard*2].className == "fenceside" || gridBoxes[currentLocationOfHorse + widthOfBoard*2].className == "fenceup" || gridBoxes[currentLocationOfHorse + widthOfBoard*2].className == "rock" || gridBoxes[currentLocationOfHorse + widthOfBoard*2].className == "tree" || gridBoxes[currentLocationOfHorse + widthOfBoard*2].className == "water") {
				gridBoxes[currentLocationOfHorse].className = "horseridedown";
				return;
			} else {
				nextClass = "jumpdown";
				nextClass2 = "horseridedown";
				nextLocation2 = nextLocation + widthOfBoard;
            }
		}

		//show horse jumping
		gridBoxes[nextLocation].className = nextClass;

		setTimeout(function() {

			//set jump back to just a fence
			gridBoxes[nextLocation].className = oldClassName;

			//update current location of horse to be 2 spaces past take off
			currentLocationOfHorse = nextLocation2;

			//get class of box after jump
			nextClass = gridBoxes[currentLocationOfHorse].className;

			//show horse and rider after landing
			gridBoxes[currentLocationOfHorse].className = nextClass2;

			//if next box is a flag, go up to a level
			levelUp(nextClass);


		}, 350);
		return;

	  } // if riderOn

	} //if class has fence


	//if there's a rider, add rider
	if (nextClass == "rider") {
		riderOn = true;
	}

	//if there's a bridge in the old location keep it
	if (oldClassName.includes("bridge")) {
		gridBoxes[oldLocation].className = "bridge";
	} else {
		gridBoxes[oldLocation].className = "";
	} //else

	//build name of new class
	newClass = (riderOn) ? "horseride" : "horse";
	newClass += direction;

	//if there's a bridge in the next location, keep it
	if (gridBoxes[nextLocation].classList.contains("bridge")) {
		newClass += " bridge";
	}

	//move 1 space
	currentLocationOfHorse = nextLocation;
	gridBoxes[currentLocationOfHorse].className = newClass;

	//if you run into an enemy
	if (nextClass.includes("enemy")) {
		showLightBox("You lost", "The enemy defeated you");
		changeVisibility("controls");
    	//add the feature of ending the game 
    	clearTimeout(currentAnimation);
		gameLost = true;
	}
		
	//don't move if you lost the game
	if(gameLost == true) {
		console.log("dedadad");
		document.onkeydown = function(){};
	} 

	//move up to the next level if needed
	levelUp(nextClass);


} //tryToMove

//move up a level
function levelUp(nextClass) {
	var gameLost = false;
	
	if(nextClass == "flag" && riderOn) {
        currentLevel++;
        if(currentLevel>2) {
        	showFinalMessage("Game Over!","Albert and Simon made a fantastic impression. Most likely, they will make it to the World-Horse-Cup in Berlin next year. Good job and thanks for playing!");
			gameLost = true;
        	changeVisibility("controls");
        	clearTimeout(currentAnimation);
			//don't move if you lost the game
			if(gameLost == true) {
				document.onkeydown = function(){};
			} 
        } else {
			showLightBox("Next Level...", "Congrats, that wasn't easy!")
			clearTimeout(currentAnimation);
			setTimeout(function(){
				showLightBox("Next Level...", "Congrats, that wasn't easy!");
				loadLevel();
			}, 1000);

		} //else	
	}

}//levelUp


//load level 0 - maxlevel
function loadLevel () {
	let levelMap = levels[currentLevel];
	let animateBoxes;
	riderOn = false;

	//load board
	for (i = 0; i < gridBoxes.length; i++) {
		gridBoxes[i].className = levelMap[i];
		if (levelMap[i].includes("horse")) currentLocationOfHorse = i;
	} //for

	animateBoxes = document.querySelectorAll(".animate");

	animateEnemy(animateBoxes, 0, "right", currentLocationOfHorse, currentAnimation); 

} //loadLevel

//animate enemy left to right (could add up and down to this)
//boxes- array of grid boxes that include animation
//index - current location of animation
//direction - current direction of animation
function animateEnemy (boxes, index, direction, currentLocationOfHorse) {

	var gameLost = false;
		
	//exit function if no animation
	if (boxes.length <= 0) { return; }

	//update images
	if (direction == "right") {
		//if the enemy runs into you while going right
		if(boxes[index].className.includes("horse")) {
			showLightBox("You lost", "The enemy defeated you");
			changeVisibility("controls");
			//add the feature of ending the game 
			gameLost = true;
		} else {
			boxes[index].classList.add("enemyright")
		}
	} else {
		//if the enemy runs into you going left
		if(boxes[index].className.includes("horse")) {
			showLightBox("You lost", "The enemy defeated you");
			changeVisibility("controls");
			//add the feature of ending the game 
			gameLost = true;
		} else {
			boxes[index].classList.add("enemyleft")
		}
	}
		 

	//remove images from other boxes
	for (i = 0; i < boxes.length; i++) {
		if ( i != index) {
			boxes[i].classList.remove("enemyleft");
			boxes[i].classList.remove("enemyright");
		} //if
	} //for

	//moving right
	if (direction == "right")
		//turn around if hit the right side
		if (index == boxes.length -1 ) {
			direction = "left";
		} else {
			index++;
		} //else
		
	//moving left
	if (direction == "left") 
	//turn around if hit the left side
	if (index == 0) {
		index++;
		direction = "right";
	} else {
		index--;
	} //else
		

	currentAnimation = setTimeout (function() {
		animateEnemy(boxes, index, direction);
	}, 750);

	if(gameLost == true) {
		document.onkeydown = function(){};
		clearTimeout(currentAnimation);
	}
} //animateEnemy

//change the visibility of ID
function changeVisibility(divID) {
	var element = document.getElementById(divID);

	// if element exists, it is considered true
	if (element) {
		element.className = (element.className == 'hidden') ? 'unhidden' : 'hidden';
	} //if
} //changeVisibility

//display message in lightbox
function showLightBox(message, message2) {

	//set messages
	document.getElementById("message").innerHTML = message;
	document.getElementById("message2").innerHTML = message2;

	//show lightbox
    changeVisibility("lightbox");
    changeVisibility("boundaryMessage");

}

function showStartMessage(message3, message4) {

	//set messages
	document.getElementById("message3").innerHTML = message3;
	document.getElementById("message4").innerHTML = message4;

	//show lightbox
    changeVisibility("lightbox");
    changeVisibility("startMessage");

}

function showFinalMessage(message5, message6) {

	//set messages
	document.getElementById("message5").innerHTML = message5;
	document.getElementById("message6").innerHTML = message6;

	//show lightbox
    changeVisibility("lightbox");
    changeVisibility("finalMessage");
}




