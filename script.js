"use strict";
class Game {
    constructor() {
        this.presses = document.querySelectorAll(".press");
        this.pressGreen = document.querySelector(".press--green");
        this.pressRed = document.querySelector(".press--red");
        this.pressBlue = document.querySelector(".press--blue");
        this.pressYellow = document.querySelector(".press--yellow");
        this.btnToggle = document.querySelector(".btn-toggle");
        this.currentScoreCard = document.querySelector('.current-score-card');
        this.maxScoreCard = document.querySelector('.max-score-card');
        this.back = document.querySelector('.back');
        this.greenAudio = new Audio("assets/sounds/green.mp3");
        this.redAudio = new Audio("assets/sounds/red.mp3");
        this.blueAudio = new Audio("assets/sounds/blue.mp3");
        this.yellowAudio = new Audio("assets/sounds/yellow.mp3");
        this.gameOverAudio = new Audio("assets/sounds/wrong.mp3");
        this.audioList = [
            this.greenAudio,
            this.redAudio,
            this.blueAudio,
            this.yellowAudio,
        ];
        this.isRunning = false;
        this.currentScore = 0;
        this.maxScore = 0;
        this.currentIndex = -1;
        this.currentStack = [];
        for (let i = 0; i < 4; i++) {
            this.presses[i].addEventListener("click", () => {
                if (this.isRunning) {
                    if (this.currentStack[this.currentIndex] == i) {
                        this.audioList[i].play();
                        if (this.currentStack.length == this.currentIndex + 1) {
                            this.currentScore++;
                            this.currentScoreCard.textContent = `${this.currentScore}`;
                            setTimeout(() => {
                                this.getNew();
                            }, 500);
                        }
                    }
                    else {
                        if (this.currentScore > this.maxScore) {
                            this.maxScore = this.currentScore;
                            this.maxScoreCard.textContent = `${this.maxScore}`;
                        }
                        this.gameOver();
                    }
                    this.currentIndex++;
                }
            });
        }
        this.btnToggle.addEventListener("click", (e) => {
            this.isRunning = !this.isRunning;
            if (this.isRunning) {
                this.getNew();
                this.btnToggle.classList.add('on');
            }
            else {
                this.btnToggle.classList.remove('on');
            }
        });
    }
    getNew() {
        var newEntry = Math.round(Math.random() * 4);
        newEntry = newEntry == 4 ? 3 : newEntry;
        this.currentStack.push(newEntry);
        this.audioList[newEntry].play();
        this.presses[newEntry].classList.add("on");
        setTimeout((index) => {
            this.presses[index].classList.remove("on");
        }, 500, newEntry);
        this.currentIndex = 0;
        return newEntry;
    }
    getCurrent() {
        return this.currentIndex;
    }
    gameOver() {
        this.gameOverAudio.play();
        this.currentIndex = -1;
        this.currentStack.length = 0;
        this.isRunning = false;
        this.currentScore = 0;
        this.currentScoreCard.textContent = '0';
        this.btnToggle.classList.remove('on');
        this.back.style.setProperty('--bubble-color', 'red');
        setTimeout(() => {
            this.back.style.setProperty('--bubble-color', 'rgba(255, 255, 255, 0.07)');
        }, 2000);
    }
}
var game = new Game();
