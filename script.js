"use strict";
class Game {
    constructor() {
        this.pressGreen = document.querySelector('.press--green');
        this.pressRed = document.querySelector('.press--red');
        this.pressBlue = document.querySelector('.press--blue');
        this.pressYellow = document.querySelector('.press--yellow');
        this.btnToggle = document.querySelector('.btn-toggle');
        this.greenAudio = new Audio('assets/sounds/green.mp3');
        this.redAudio = new Audio('assets/sounds/red.mp3');
        this.blueAudio = new Audio('assets/sounds/blue.mp3');
        this.yellowAudio = new Audio('assets/sounds/yellow.mp3');
        this.isRunning = false;
        this.currentIndex = 0;
        this.currentStack = [];
        this.pressGreen.addEventListener('click', (e) => {
            if (this.isRunning) {
                this.greenAudio.play();
            }
        });
        this.pressRed.addEventListener('click', (e) => {
            if (this.isRunning) {
                this.redAudio.play();
            }
        });
        this.pressBlue.addEventListener('click', (e) => {
            if (this.isRunning) {
                this.blueAudio.play();
            }
        });
        this.pressYellow.addEventListener('click', (e) => {
            if (this.isRunning) {
                this.yellowAudio.play();
            }
        });
        this.btnToggle.addEventListener('click', (e) => {
            this.isRunning = !this.isRunning;
        });
    }
    getNew() {
        var newEntry = Math.round(Math.random() * 4);
        this.currentStack.push(newEntry);
        this.currentIndex++;
        return newEntry;
    }
    getCurrent() {
        return this.currentIndex;
    }
    gameOver() {
        this.currentIndex = 0;
        this.currentStack.length = 0;
    }
}
var game = new Game();
