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