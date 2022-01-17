const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colorss = document.querySelectorAll(".color");

btn.addEventListener('click', function(){
  // get random number between 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber]
  colorss.forEach((color) => {
  color.textContent = colors[randomNumber];
  // Change content of color class
})
});

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length);
  // Math.random() = 0<x<1 random number
  // colors.lentgth = 4
  // Math.floor down

}