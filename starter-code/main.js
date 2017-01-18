var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardTwo === cardFour){
// 	alert ("You found a match!");
// } else {
// 	alert ("Sorry, try again.")
// }
// // queen comparison
// if (cardOne === cardTwo){
// 	alert ("You found a match!");
// } else {
// 	alert ("Sorry, try again.")
// }
// // king comparison 
// if (cardThree === cardFour){
// 	alert ("You found a match!");
// } else {
// 	alert ("Sorry, try again.")
// }

var cards = ['queen' , 'queen' , 'king' , 'king'];
var cardsInPlay = [];

function isMatch(cardsInPlay){
	if (cardsInPlay[0] == cardsInPlay[1]){
		alert('We have a match!');
	}

	var temp = document.getElementsByClassName('card');
	for(var i = 0; i < cards.length; i ++){
		temp[i].innerHTML = "";
	}
}

function isTwoCards(){
	var type = this.getAttribute('data-card');
	cardsInPlay.push(type);
	this.innerHTML = '<img src="images/'+type+'.jpg" />';
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function createCards(){
	var gameboard = document.getElementById("game-board");

	for(var i = 0; i < cards.length; i ++){
		var card = document.createElement('div');
		card.className = 'card';
		gameboard.appendChild(card);
		card.setAttribute('data-card' , cards[i]);
		card.addEventListener('click', isTwoCards);
	}
}

createCards();



