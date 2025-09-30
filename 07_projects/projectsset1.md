# Projects related to DOM

## project link
[Click here]()

# Solution Code 
## Project 1
```javascript
console.log("Aishi")
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
     console.log(e);
     console.log(e.target);
     if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
     }
     if(e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id;
     }
    });
});
```

## Project 2

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
        }
    else{
       const bmi =  ((weight/((height*height)/10000)).toFixed(2));
       results.innerHTML = `<span>${bmi}</span>`;
    }
   
});

```
## project 3

```javascript

const clock = document.getElementById('clock');


setInterval(function(){
    let date = new Date();
    //console.log(date.toLoaclTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## project 4

```javascript
   let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    });
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a positive number');
  }
  else if(guess > 100){
    alert('please enter a number less than 100');
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame()
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
   
  }
}

function checkGuess(guess){
   if(guess === randomNumber){
    displayMessage(`You guessed it right.`);
    endGame()
   }
   else if(guess < randomNumber){
    displayMessage(`Number is TOOO low.`)
   }
   else if(guess > randomNumber){
    displayMessage(`Number is TOOO high.`)
   }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1); 
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChildChild(p);

        playGame = true;
    })
}
```

## project 5
```javascript  
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class="color">
  <table>
 <tr>
   <th>key</th>
   <th>keyCode</th>
   <th>Code</th>
 </tr>
 <tr>
   <td>${e.key === '' ? 'Space': e.key}</td>
   <td>${e.keyCode}</td>
   <td>${e.code}</td>
 </tr>

</table>
</div>`;
});
```