const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
// Get the element with the specified ID:
// <button class="btn btn-hero" id="btn">Click Me</button>
const color = document.querySelector(".color");
// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

btn.addEventListener('click', function(){
  // get random number between 0-3
  // The addEventListener() method attaches an event handler to the document.
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber];
  // Change content of "color" class not chaning the color
});

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length);
  // Math.random() = 0<x<1 random number
  // colors.lentgth = 4
  // Math.floor down

}