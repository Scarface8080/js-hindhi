const form = document.querySelector('form');

// this usecase will give you empty vlue
// const  height = parseInt(document.querySelector('#height').Value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    console.log('here');
    results.innerHTML = 'Please give a valid height ';
  }
});
