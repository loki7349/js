# project related to DOM

## project link
[click here](https://stackblitz.com/edit/js-ybiuyb?file=index.js)

# Solution code

## project 01
```javascript
console.log("loki")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
## Project 02

```javascript
const form=document.querySelector('form')
//this use case will give you empty
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi=(weight/ ((height*height)/10000)).toFixed(2)
        // show thw result
        results.innerHTML = `<span>${bmi}</span>`
    }
    
})
```

## Project 03

```javascript
const clock=document.getElementById('clock')




setInterval(function(){
    let date= new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## project 04
```javascript
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




```

## Project 05

```javascript
const insert=document.getElementById('insert')

window.addEventListener('keydown', (e)=> {
    insert.innerHTML= `
    <div class='color'>
    <table>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
    `
});
```

## project 06

```javascript
//generate a random color

const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
// console.log(randomColor());
let invalId
const startChangingColor= function(){
    if(!invalId){
        invalId=setInterval(changeBGColor, 1000)
    }
    function changeBGColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor= function(){ 
    clearInterval(invalId)
    invalId= null;
}


document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)


```