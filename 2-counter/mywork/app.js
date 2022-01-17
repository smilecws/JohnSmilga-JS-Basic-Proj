// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// document.querySelector('.btn') = <button class="btn decrease">decrease</button> ;;; seaerch only one
// const btns = document.querySelectorAll('.btn');
// return NodeList(3) [button.btn.decrease, button.btn.reset, button.btn.increase]

console.log(btns);
btns.forEach(function(btn){
  // forEach() calls a function for each element in an array
  btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')){
      count--;
    }
    else if (styles.contains('increase')){
      count ++;
    }
    else if (styles.contains('reset')){
      count =0;
    }
    if (count > 0){
      value.style.color = "green";
    }
    if (count < 0){
      value.style.color = "red"
    }
    if (count == 0){
      value.style.color = "black"
    }
    value.textContent = count;
  })
});