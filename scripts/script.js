// Sound Control

class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/bgAudio.mp3');
        this.flipSound = new Audio('assets/audio/Card-flip-sound-effect.mp3');
        this.matchSound = new Audio('assets/audio/matched.mp3');
        //this.levelUpSound = new Audio('assets/audio/level-up.mp3');
        this.victorySound = new Audio('assets/audio/victory.mp3');
        //this.gameOver = new Audio('assets/audio/xxxxxxxx.mp3');
        this.bgMusic.volume = 0.5;
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
    victory() {
        this.stopMusic();
        this.victory.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

// Starts the game only when page is fully loaded

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.flipped(card);
        });
    });
}

if (document.readyState === 'loading') { //loads js only after page is fully loaded
    document.addEventListener('DOMContentLoaded', ready())
} else {
    ready();
}

let audioController = new AudioController();