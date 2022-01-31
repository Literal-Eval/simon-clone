class Game {
    constructor() {
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

    pressGreen: HTMLElement = document.querySelector('.press--green')!;
    pressRed: HTMLElement = document.querySelector('.press--red')!;
    pressBlue: HTMLElement = document.querySelector('.press--blue')!;
    pressYellow: HTMLElement = document.querySelector('.press--yellow')!;

    btnToggle: HTMLElement = document.querySelector('.btn-toggle')!;

    greenAudio: HTMLAudioElement = new Audio('assets/sounds/green.mp3');
    redAudio: HTMLAudioElement = new Audio('assets/sounds/red.mp3');
    blueAudio: HTMLAudioElement = new Audio('assets/sounds/blue.mp3');
    yellowAudio: HTMLAudioElement = new Audio('assets/sounds/yellow.mp3');

    isRunning: boolean = false;
    currentIndex: number = 0;
    currentStack: number[] = [];

    getNew(): number {
        var newEntry: number = Math.round(Math.random() * 4);
        this.currentStack.push(newEntry);
        this.currentIndex++;

        return newEntry;
    }

    getCurrent(): number {
        return this.currentIndex;
    }

    gameOver(): void {
        this.currentIndex = 0;
        this.currentStack.length = 0;
    }
}

var game = new Game();