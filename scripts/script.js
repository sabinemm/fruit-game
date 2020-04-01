// **** Sound Control *****

class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/bgAudio.mp3');
        this.flipSound = new Audio('assets/audio/Card-flip-sound-effect.mp3');
        this.matchSound = new Audio('assets/audio/matched.mp3');
        this.levelUpSound = new Audio('assets/audio/level-up.mp3');
        this.victorySound = new Audio('assets/audio/victory.mp3');
        this.gameOverSound = new Audio('assets/audio/game-over.mp3');
        this.gameOverSound.volume = 0.5;
        this.levelUpSound.volume = 0.5;
        this.flipSound.volume = 0.4;
        this.bgMusic.volume = 0.2;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play()
    }
    stopMusic() {
        this.bgMusic.pause(); //restarts music to beginning after pausing
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }

    levelUp() {
        this.levelUpSound.play()
    }

    victory() {
        this.stopMusic();
        this.victorySound.play();
    }

    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

// **** ADDING CARDS TO DECK ****

const fruits = [`https://res.cloudinary.com/www-madine-se/image/upload/v1585045889/fruit_game/cards/grapefruit_wdcx0h.jpg`,
    `https://res.cloudinary.com/www-madine-se/image/upload/v1585045888/fruit_game/cards/mango_vtic6q.jpg`,
    //   `https://res.cloudinary.com/www-madine-se/image/upload/v1585045887/fruit_game/cards/lychee_tfkj5m.jpg`,
    //  `https://res.cloudinary.com/www-madine-se/image/upload/v1585045889/fruit_game/cards/pomegranate_zdesmg.jpg`
];

duplicate = [...fruits, ...fruits]

let insertCard = document.getElementById('containerId');

duplicate.forEach(
    (href) => insertCard.insertAdjacentHTML('beforeend', `<div class="card zoom">
  <div class="card-back card-face">
      <img src="https://res.cloudinary.com/www-madine-se/image/upload/v1585045890/fruit_game/cards/card-back_hfitoc.jpg"
          class="card-img">
  </div> <div class="card-front card-face">
    <img class="card-value card-img"
        src="${href}">
</div>`)
);

/* start game with level one
level one is = card base with pineapple x2
                card base with mangosteen x2
                card base with rambutan x2
                time = 30 sec
                
                if all cards are matched 
                next level
                else = game over
                next level = + 2 values in array + 20 sec

                final level 
                if win - victory
*/

// ******CARDS*******

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
    startGame() {
        this.cardToCheck = null; //gets called multiple times e.g. when restarting the game
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = []; //empty array
        this.busy = true; //will put false once game is started

        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500); //wait 500ms before whatever is in this function
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks; //reseting inner timer and inner texts
    }

    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining; //updates time in HTML
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000); //interval is 1sec
    }

    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }

    levelUp() {
        clearInterval(this.countDown);
        this.audioController.levelUp();
        document.getElementById('level-up-text').classList.add('visible');
    }

    victory() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }

    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++; //iterates clicks
            this.ticker.innerText = this.totalClicks; //counts them on the page
            card.classList.add('visible'); //ads visible class to the clicked card

            if (this.cardToCheck)
                this.checkForCardMatch(card);// check for match
            else
                this.cardToCheck = card;
        }
    }

    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        //match
        else
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        //card1.classList.add('matched');
        //card2.classList.add('matched');
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }

    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }

    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }

    shuffleCards() { //fisher and yates algorithm
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randomIndex].style.order = i; //shuffles css grid oder of cards
            this.cardsArray[1].style.order = randomIndex;
        }
    }

    canFlipCard(card) {
        return true;
        //check if user is allowed to flip the card
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck //does not allow to flip cards that are already flipped, animating or matched
        // creates a boolean = if thisnotbusy is false and does not include and card does not equal card to check will evaluate to true, because the statement is true
        //so if it returns TRUE the player can flip a card
    }
}

// *****Starts the game only when page is fully loaded******

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(60, cards);  //game time

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible'); //starts game whenever clicked on overlay
            game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card); //whenever clicked on a card
        });
    });
}

if (document.readyState === 'loading') { //loads js only after page is fully loaded
    document.addEventListener('DOMContentLoaded', ready())
} else {
    ready();
}



