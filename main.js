let sum;
let cards;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let player = {
  name: "Per",
  chips: "145",
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomNumber() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card === 1) {
    return 11;
  } else if (card > 10) {
    return 10;
  } else {
    return card;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = " cards:  ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomNumber();
  sum += card;
  cards.push(card);
  renderGame();
}
