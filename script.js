"use strict";
class Game {
    constructor() {
        this.presses = document.querySelectorAll(".press");
        this.pressGreen = document.querySelector(".press--green");
        this.pressRed = document.querySelector(".press--red");
        this.pressBlue = document.querySelector(".press--blue");
        this.pressYellow = document.querySelector(".press--yellow");
        this.btnToggle = document.querySelector(".btn-toggle");
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
        this.currentIndex = -1;
        this.currentStack = [];
        for (let i = 0; i < 4; i++) {
            this.presses[i].addEventListener("click", () => {
                if (this.isRunning) {
                    this.audioList[i].play();
                    if (this.currentStack[this.currentIndex] == i) {
                        if (this.currentStack.length == this.currentIndex + 1) {
                            setTimeout(() => {
                                this.getNew();
                            }, 500);
                        }
                    }
                    else {
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
    }
}
var game = new Game();
