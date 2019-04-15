 /*********** 1. Create a class for a Card, with the properties "suite" and "rank".  */

 /***********  Copied from js-oop-practice  *****************************/

let suits = ["heart","diamond","spade","club"]
let ranks = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
let scores = [2,3,4,5,6,7,8,9,10,11,12,13,14]

class Card {
    constructor(suit, rank, score){
        this.suit = suit
        this.rank = rank
        this.score = score
        
    }
}

// class Deck {
//     constructor() {
//         this.length = 52
//         this.cards = []
//     }
//     draw() {
//         let random = Math.floor(Math.random() * 51)
//         return this.cards[random]
//     }
// }

 /*********** 2. Create a class for a Player, with the property "stack" as an array. This will hold the cards.  */

/***********  Copied from js-oop-practice  *****************************/


class Player {
    constructor(stack) {
        this.stack = [];
    }
}


 /*********** 3. Using the Card class, generate a standard deck of 52 playing cards *********  */

/***********  and use the Player class to generate two Players for the game.  *****************************/


// let fullDeck = new Deck()

let fullDeck = [];

function putDeckTogether() {
    for(let i = 0; i < ranks.length; i++) {
        for(let s = 0; s < suits.length; s++) {
               let rank = ranks[i]
               let suit = suits[s]
               let score = scores[i]
               let card = new Card(suit, rank, score)
               fullDeck.push(card)
        }
    }

}
putDeckTogether()
console.log(fullDeck)

// console.log(fullDeck.draw())

// let Deck = fullDeck.cards

let playerOneCards = Player.stack;
let playerTwoCards = Player.stack;

//shuffle fullDeck
// divide fulldeck between two players
// 

 /*********** 4.a. "Shuffle" the deck   ***********/
/**************************************************/
/*** Reference:  2nd example ---> https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array   ***/

function shuffleArray(fullDeck) {
    for (var i = fullDeck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = fullDeck[i];
        fullDeck[i] = fullDeck[j];
        fullDeck[j] = temp;
    }
}
shuffleArray(fullDeck)
console.log(fullDeck)

 /*********** 4.b. and distribute it evenly to two players - one user, one computer.  ***********/
/**************************************************/

playerOneCards = fullDeck.splice(0,26)
// console.log(playerOneCards)
// console.log(playerOneCards.length)
// console.log(playerOneCards[0].score)
playerTwoCards = fullDeck.splice(0,26)
// console.log(playerTwoCards)
// console.log(playerTwoCards[0].score)
// console.log(playerTwoCards.length)


// // playerOne = document.querySelector('#p1');
// // playerOne.addEventListener('click', drawCard)

// // playerTwo = document.querySelector('#p2');
// // playerTwo.addEventListener('click', drawCard)

// // function drawCard() {
//     playerOneCards = fullDeck.splice(0,26)
//     playerTwoCards = fullDeck.splice(0,26)


/*********** 5. handle the logic for adding the cards to bottom of the stack of the winning player.  ***********/
/**************************************************/


                                        // discardPile = [];
x = 0;
    while (x < 2) {
        
        if (playerOneCards[x].score > playerTwoCards[x].score) {
            console.log("Player One wins")
                                        // discardPile.push(playerOneCards[x])
                                        // playerOneCards.shift([x])
                                        // discardPile.push(playerTwoCards[x])
                                        // playerTwoCards.shift([x])
                                        // console.log(discardPile)
            
            // 
            playerOneCards.push(playerTwoCards[x]);
            console.log(playerOneCards.length)          // Player One cards should add 1
            playerTwoCards.pop([x]);
            console.log(playerTwoCards.length)          // Player Two cards should minus 1

            playerOneCards.push(playerOneCards[x]);     // Player One cards should add 1 (for 2 total)
            console.log(playerOneCards.length)
            x++;
            console.log(playerOneCards)
        } else {
                                        // console.log("Player Two wins")
                                        // discardPile.push(playerOneCards[x])
                                        // playerOneCards.shift([x])
                                        // discardPile.push(playerTwoCards[x])
                                        // playerTwoCards.shift([x])
                                        // console.log(discardPile)
            console.log("Player Two wins")
            playerTwoCards.push(playerOneCards[x]);
            playerOneCards.pop([x]);
            playerTwoCards.push(playerTwoCards[x]);
            x++;                        
        }

    }

