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
// console.log(playerOneCards)
// console.log(playerOneCards.length)
// console.log(playerOneCards[0].score)
playerTwoCards = fullDeck.splice(0,26)
// console.log(playerTwoCards)
// console.log(playerTwoCards[0].score)
// console.log(playerTwoCards.length)


/*********** 5. handle the logic for adding the cards to bottom of the stack of the winning player.  ***********/
/**************************************************/


x = 0;
    while (playerOneCards.length !== 52 || playerTwoCards.length !== 52) {    // Step 7. Once one player has all 52 cards in their stack....
        
        if (playerOneCards[x].score > playerTwoCards[x].score) {
            console.log("Player One wins")
            playerOneCards.push(playerTwoCards[x]);
            playerTwoCards.pop();

            playerOneCards.push(playerOneCards[x]);     
            playerOneCards.shift()
            x++;

                    if (playerOneCards.length === 52 ) {
                        console.log("Game over. Player One is the winner!")
                    }

        } else if (playerTwoCards[x].score > playerOneCards[x].score) {
            console.log("Player Two wins")
            playerTwoCards.push(playerOneCards[x]);
            playerOneCards.pop();
            playerTwoCards.push(playerTwoCards[x]);
            playerTwoCards.shift()
            x++;              
            
                    if (playerTwoCards.length === 52 ) {
                        console.log("Game over. Player Two is the winner!")
                    }
            
        } else if (playerOneCards[x].score == playerTwoCards[x].score) {    // Step 6. In the case of the tie, each player takes the card they played and places it 
            console.log("It's a tie")
            playerOneCards.push(playerOneCards[x])                        //  at the bottom of their stack, and then the game automatically plays the next round.
            playerOneCards.shift()
            playerTwoCards.push(playerTwoCards[x])    
            playerTwoCards.shift()
            x++;
        } 

    }

