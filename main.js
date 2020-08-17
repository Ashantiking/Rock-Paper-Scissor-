const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener("click", () => (
            introScreen.classList.add("fadeOut"); match.classList.add("fadeIn");
        ));
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelectorAll('.player-hand');
        const computerHand = document.querySelectorAll('.computer-hand');
        const hand = document.querySelectorAll('.hand img');

        hand.forEach(hand => {
            hand.addEventListener('animationend'function() {
                this.style.animation = '';
            });
        });

        //Computer options
        const computerOptions = ['rock', 'paper', 'scissor'];


        options.forEach(option => {
            option.addEventListener("click", function() {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {

                        // Here is where call compare Hands
                        compareHands(this.textContent, computerChoice);
                        //Update Images
                        computerHand.src = './asset/${this.textContent}.png';
                        playerHand.src = './asset/${this.textContent}.png';

                    }, 2000)
                    //Animation
                playerHand.style.animation = shakePlayer 2 s ease;
                computerHand.style.animation = shakecomputer 2 s ease;
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pSscore;
        playerScore.textContent = cSscore;
        return;

    }

    const compareHands = (playerChoice, computerChoice) => {
        //Update test
        const winner = document.querySelector('winner')
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie'
            return;

        }
        // Choice for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissor') {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            }
        }

        // Choice for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissor') {
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            }
        }

        // Choice for Scissor
        if (playerChoice === 'scissor') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // this call all th inner function
    startGame();
    playMatch();
};



//start the game function
game();