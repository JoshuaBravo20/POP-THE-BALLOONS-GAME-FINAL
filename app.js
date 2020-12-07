const grid = document.querySelector("#balloon-grid");
let score = 0;
let selectedBalloons = [];
let activeBalloons = 0;

let balloonColors = [
	"red","green", "blue","pink",
    "grey","purple","orange","purple",
    "pink","red","black","green",
    "brown","yellow","blue","yellow",
    "grey","black","orange","brown",
];

function popBalloon(position) {

	selectedBalloons.push(balloonColors[position]);

	let firstBalloon = document.querySelector('#' + `${balloonColors[position]}`);
	let secondBalloon = document.querySelectorAll('#' + `${balloonColors[position]}`)[1];

	let len = selectedBalloons.length;

	if (len === 2) {
		if (selectedBalloons[0] === selectedBalloons[1]) {
			firstBalloon.classList.add('popped');
			secondBalloon.classList.add('popped');
			activeBalloons--;
			activeBalloons--;
			document.querySelector('#count').innerHTML = activeBalloons;
			selectedBalloons = [];
		}
		else {
			selectedBalloons = [];
		}
	}


	if (activeBalloons === 0) {
	renderAgain();
}

if(activeBalloons >= 24) {
	grid.style.height = "500px";
}

else if(activeBalloons >= 20) {
	grid.style.height = "450px";
}

else if(activeBalloons >= 16) {
	grid.style.height = "400px";
}

else if(activeBalloons >= 12) {
	grid.style.height = "350px";
}

else if(activeBalloons >= 8) {
	grid.style.height = "300px";
}

else if(activeBalloons >= 28) {
	grid.style.height = "600px";
}

else if(activeBalloons >= 32) {
	grid.style.height = "800px";
}

}

function render() {

let content = "";

balloonColors.forEach(function(color, position) {

	let visibility = "active";

	if (color === null) {
		visibility = 'popped';
		activeBalloons--;
	}
	else {
		activeBalloons++;
	}

	content = content + `<div id="${color}" class="balloon ${visibility}" style="background: ${color}" onClick="popBalloon(${position}); makePopSound();"></div>`;

});

grid.innerHTML = content;
document.querySelector('#count').innerHTML = activeBalloons;

if (activeBalloons === 0) {
	renderAgain();
}

else if(activeBalloons >= 20) {
	grid.style.height = "450px";
}

else if(activeBalloons >= 16) {
	grid.style.height = "300px";
}

else if(activeBalloons >= 12) {
	grid.style.height = "250px";
}

else if(activeBalloons >= 8) {
	grid.style.height = "300px";
}

else if(activeBalloons >= 28) {
	grid.style.height = "600px";
}

}

const gridSizeSelect = () => {

	let size = prompt("Select a SIZE: 1. 4x3 / 2. 4x4 / 3. 4x5");

	if (size == '1') {
		balloonColors = [
			"red","green", "blue",
		    "grey","purple", "purple",
		    ,'red','green',
		    "yellow",'blue',"yellow",
		    'grey'
		];
		render();
	}

	if (size == '2') {
		balloonColors = [
			"red","green", "blue",
		    "grey","purple", "purple",
		    ,'red','green',
		    "yellow",'blue',"yellow",
		    'grey', 'pink', 'brown', 'brown',
				'pink'
		];
		render();
	}

	if (size == '3') {
		render();
	}

}

window.onload = gridSizeSelect();

function renderAgain() {
	gridSizeSelect();
	increaseScore();
	playResetGridMusic();
}

let popSound = new Audio('sounds/balloonPop.wav');

const makePopSound = () => {
	popSound.play();
}

let resetGridMusic = new Audio('sounds/gridReset.wav');

const playResetGridMusic = () => {
	resetGridMusic.play();
}

function increaseScore() {
	score++;
	document.querySelector('#score').innerHTML = score;
}

function refresh() {
	window.location.reload();
}
