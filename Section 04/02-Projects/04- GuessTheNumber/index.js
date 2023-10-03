let randomNumber=parseInt(Math.random()*100 +1)


const submit=document.querySelector('#subt')
const userInput= document.querySelector('#guessField')
const guesSlot= document.querySelector('.Guesses')
const remaining= document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let Numguess= 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateguess(guess)
    });
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number')
    }else if(guess < 1){
        alert('Please enter valid number')
    }else if(guess > 100){
        alert('Please enter valid number')
    }else{
        prevGuess.push(guess);
        if(Numguess === 11){
            displayGuess(guess)
            displayMsg(`Game Over, Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            chackGuess(guess)
        }
    }
}

function chackGuess(guess){
    if(guess === randomNumber){
        displayMsg(`you guessed right`)
        endGame();
    }else if(guess < randomNumber){
        displayMsg(`number is too low`)
    }else if(guess > randomNumber){
        displayMsg(`number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guesSlot.innerHTML += `${guess}, `
    Numguess++;
    remaining.innerHTML = `${11 - Numguess} ` 
}

function displayMsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value= '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame= false;
    newGame()
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber =parseInt(Math.random()*100 +1)
        prevGuess = []
        Numguess =1
        guesSlot.innerHTML= ''
        remaining.innerHTML = `${11-Numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame= true
    })
}




