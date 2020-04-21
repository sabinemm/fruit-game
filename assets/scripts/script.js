/* Sound Control */

class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/background-audio.mp3');
        this.flipSound = new Audio('assets/audio/card-flip.mp3');
        this.matchSound = new Audio('assets/audio/matched.mp3');
        this.levelUpSound = new Audio('assets/audio/level-up.mp3');
        this.victorySound = new Audio('assets/audio/victory.mp3');
        this.gameOverSound = new Audio('assets/audio/game-over.mp3');
        this.gameOverSound.volume = 0.5; // Reduced volumes to not be annoying if user is listening to something else in background
        this.levelUpSound.volume = 0.5;
        this.victorySound.volume = 0.5;
        this.matchSound.volume = 0.5;
        this.flipSound.volume = 0.3;
        this.bgMusic.volume = 0.8;
        this.bgMusic.loop = true; // so that if player is between levels the audio does not stop
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
    }

    flip() {
        this.flipSound.play();
    }

    match() {
        this.matchSound.play();
    }

    levelUpPing() {
        this.levelUpSound.play();
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

function muteIcon() {
    if (document.getElementById("muteId").classList.contains('fa-volume-mute')) {
        document.getElementById("muteId").classList.toggle('fa-volume-up');
    }
}

/* CARD FRONT IMAGES  */

const level1 = [`https://res.cloudinary.com/www-madine-se/image/upload/v1585045889/fruit_game/cards/grapefruit_wdcx0h.jpg`,
    `https://res.cloudinary.com/www-madine-se/image/upload/v1585045888/fruit_game/cards/dragonfruit_jy5sxt.jpg`,
    `https://res.cloudinary.com/www-madine-se/image/upload/v1585045889/fruit_game/cards/pomegranate_zdesmg.jpg`,
    `https://res.cloudinary.com/www-madine-se/image/upload/v1585045888/fruit_game/cards/Lemon_ei9acy.jpg`];

const level2 = [`https://res.cloudinary.com/www-madine-se/image/upload/v1585045888/fruit_game/cards/papaya_s1gxcm.jpg`,
    `https://res.cloudinary.com/www-madine-se/image/upload/v1585045888/fruit_game/cards/kiwi_ocu5gh.jpg`];

const level3 = [`https://res.cloudinary.com/www-madine-se/image/upload/v1585045890/fruit_game/cards/mangosteen_zbitfe.jpg`,
    `https://res.cloudinary.com/www-madine-se/image/upload/v1585045889/fruit_game/cards/pinapple_g27ljn.jpg`];

const level4 = [`https://res.cloudinary.com/www-madine-se/image/upload/v1585045890/fruit_game/cards/passionfruit_c9oa7w.jpg`,
    `https://res.cloudinary.com/www-madine-se/image/upload/v1585045888/fruit_game/cards/mango_vtic6q.jpg`];

//Rūtas code snippet to solve adding cards on next level
const levels = {
    1: level1,
    2: level2,
    3: level3,
    4: level4,
};

/*  CARDS */

class MixOrMatch {
    constructor(totalTime) {
        this.cardsArray = [];
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
        this.currentLevel = 1;
    }

    createCards() {
        const level = this.currentLevel;

        let duplicate = [...levels[level], ...levels[level]]; //Rūtas help //duplicates the cards because it needs two cards for there to be a match

        let insertCard = document.getElementById('containerId');

        //creates cards in html and let duplicate creates doubles. contains card back image and classes for styling
        duplicate.forEach(
            (href) => insertCard.insertAdjacentHTML('beforeend', `<div class="card zoom">
        <div class="card-back card-face">
            <img src="https://res.cloudinary.com/www-madine-se/image/upload/v1587330036/fruit_game/cards/card-back3_vy5epc.jpg"
                class="card-img">
        </div> <div class="card-front card-face">
            <img class="card-value card-img"
                src="${href}">
        </div>`)
        );

        let cards = Array.from(document.getElementsByClassName('card'));

        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.flipCard(card);
            });
        });

        this.cardsArray = cards;
    }

    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true; //will be false once game is started

        setTimeout(() => {
            this.audioController.startMusic();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500); //wait 500ms before whatever is in this function
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks; //reseting inner timer and inner texts
        this.createCards();
        this.shuffleCards();
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

    victorious() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }

    levelUp() {
        clearInterval(this.countDown);
        this.currentLevel = this.currentLevel + 1
        if (this.currentLevel > 4) {
            this.victorious();
            this.currentLevel = 1;
        } else {
            this.audioController.levelUpPing();
            document.getElementById('level-up-text').classList.add('visible');
        }
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

            if (this.cardToCheck) {
                this.checkForCardMatch(card);// check for match
            } else {
                this.cardToCheck = card;
            }
        }
    }

    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
            this.cardMatch(card, this.cardToCheck);
        } else
            this.cardMisMatch(card, this.cardToCheck);
        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.levelUp();
    }

    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 800);
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
        //check if user is allowed to flip the card
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck; //does not allow to flip cards that are already flipped, animating or matched
        // creates a boolean = if thisnotbusy is false and does not include and card does not equal card to check will evaluate to true, because the statement is true
        //so if it returns TRUE the player can flip a card
    }

    mute() {
        this.audioController.stopMusic();
    }

    unmute() {
        this.audioController.startMusic();
    }
}

/*  Starts the game  */

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let game = new MixOrMatch(60);  //game time
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible'); //starts game whenever clicked on overlay
            game.startGame();
        });
    });

    let muteButton = document.getElementById('muteButton').addEventListener("click", () => {
        if (document.getElementById("muteId").classList.contains('fa-volume-up')) {
            game.mute();
        } else {
            game.unmute();
        }
    });
}

/* Starts the game only when page is fully loaded */

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

/* Reloads the page when clicked on Game Over and Victory overlay */

function refreshPage() {
    window.location.reload();
}
