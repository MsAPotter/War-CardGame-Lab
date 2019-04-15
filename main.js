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


 /*********** 2. Create a class for a Player, with the property "stack" as an array. This will hold the cards.  */

/***********  Copied from js-oop-practice  *****************************/


class Player {
    constructor(stack) {
        this.stack = [];
    }
}


 /*********** 3. Using the Card class, generate a standard deck of 52 playing cards *********  */

/***********  and use the Player class to generate two Players for the game.  *****************************/


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
// console.log(fullDeck)

let playerOneCards = Player.stack;
let playerTwoCards = Player.stack;



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
// console.log(fullDeck)

 /*********** 4.b. and distribute it evenly to two players - one user, one computer.  ***********/
/**************************************************/

playerOneCards = fullDeck.splice(0,26)
playerTwoCards = fullDeck.splice(0,26)


/*********** 5. handle the logic for adding the cards to bottom of the stack of the winning player.  ***********/
/**************************************************/


// x = 0; // ==> CANT USE X AND INDECES BC AT SOME POINT THE INDEX WILL BE LARGER THAN WHAT IS IN THE ARRAY, RESULTING IN AN ERROR MSG


function playGame() {
    
        while (playerOneCards.length !== 51 || playerTwoCards.length !== 51) {    // Step 7. Once one player has all 52 cards in their stack....
                
                if (playerOneCards[0].score > playerTwoCards[0].score) {
                    console.log("Player One wins")
                    playerOneCards.push(playerTwoCards[0]);     // Pushes top card of P2 to end of Player 1 array
                    playerTwoCards.shift();                     // Removes P2 top card from P2 array

                    playerOneCards.push(playerOneCards[0]);     // Pushes top card of P1 to end of P1 deck
                    playerOneCards.shift()                      // Removes that top card card from P1 array

                    console.log(playerOneCards.length)
                    console.log(playerTwoCards.length)

                } else if (playerTwoCards[0].score > playerOneCards[0].score) {
                    console.log("Player Two wins")
                    playerTwoCards.push(playerOneCards[0]);
                    playerOneCards.shift();

                    playerTwoCards.push(playerTwoCards[0]);
                    playerTwoCards.shift()

                    console.log(playerOneCards.length)
                    console.log(playerTwoCards.length)
                    
                } else if (playerOneCards[0].score == playerTwoCards[0].score) {    // Step 6. In the case of the tie, each player takes the card they played and places it 
                    console.log("It's a tie")
                    playerOneCards.push(playerOneCards[0])                        //  at the bottom of their stack, and then the game automatically plays the next round.
                    playerOneCards.shift()
                    playerTwoCards.push(playerTwoCards[0])    
                    playerTwoCards.shift()

                    console.log(playerOneCards.length)
                    console.log(playerTwoCards.length)
                } 

            }

    if (playerOneCards.length === 51 ) {
        return "Game over. Player One is the winner!"
    } else if (playerTwoCards.length === 51 ) {
        return "Game over. Player Two is the winner!"
    } else if ( playerOneCards.length === 50 && (playerOneCards.score === playerTwoCards.score) || playerTwoCards.length === 50 && (playerOneCards.score === playerTwoCards.score) ){
        return "Its a tie"
    }
    
}
playGame()

