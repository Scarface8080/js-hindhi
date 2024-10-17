#  Projects Related to DOM 

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code

## project 1 Color Changer

``` javascript

    console.log("hamza")
    
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');



    buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {


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


## Project 2 Solution 

``` javascript

const form = document.querySelector('form');

// this usecase will give you empty vlue
// const  height = parseInt(document.querySelector('#height').Value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    // console.log('here');
    results.innerHTML = `Please give a valid height ${height} `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    // console.log('here');
    results.innerHTML = `Please give a valid weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Sho the result
    // results.innerHTML = `<span>${bmi}  </span>`;

    let underWeight = 18.6;
    let overWeight = 24.9;

    // Check if underweight
    if (bmi < underWeight) {
      results.innerHTML = `${bmi} - Underweight`;
    } // Check if normal weight
    else if (bmi >= underWeight && bmi <= overWeight) {
      results.innerHTML = `${bmi} - Normal weight`;
    } // Check if overweight
    else if (bmi >= overWeight) {
      results.innerHTML = `${bmi} - Overweight`;
    }
  }
});



```


## project 3 solution 

```javascript

    const clock = document.getElementById('clock');

    setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
    }, 1000);




```


## project 4 solution 

``` javascript

let rndomNumber = parseInt(Math.random() * 100 + 1);

console.log(rndomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true; // alows to play game used in every game making

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    vlidateGuess(guess);
  });
}

function vlidateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater then 1');
  } else if (guess > 100) {
    alert('Please enter a  number less then 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${rndomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === rndomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < rndomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > rndomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // ending the game if the users has no more remning entries or user gused it right 
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame" > Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {

  // reseteing all the variables to play the game again 
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}



```