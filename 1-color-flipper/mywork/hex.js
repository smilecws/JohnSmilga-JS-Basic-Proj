const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
// # f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  let hexColor = '#';

  for(let i=0; i<6; i++){
    hexColor += hex[getRandomNumber()]
    console.log(hexColor)
}

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
  // The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
  // The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
}