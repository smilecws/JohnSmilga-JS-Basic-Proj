// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// document.querySelector('.btn') = <button class="btn decrease">decrease</button> ;;; seaerch only one
// const btns = document.querySelectorAll('.btn');
// return NodeList(3) [button.btn.decrease, button.btn.reset, button.btn.increase]
btns.forEach(function(btn){
  // forEach() calls a function for each element in an array
  btn.addEventListener('click', function(e){
    // document.addEventListener(event, function, useCapture)
    const styles = e.currentTarget.classList;
    // The currentTarget event property returns the element whose event listeners triggered the event.
    // The classList property returns the class name(s) of an element, as a DOMTokenList object.
    console.log(styles);
    
    if (styles.contains('decrease')){
      count--;
      // The contains() method of the Node interface returns a boolean value indicating whether a node is a descendant of a given node, 
      // hat is the node itself, one of its direct children (childNodes), one of the children's direct children, and so on.
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
    console.log(count)
  })
});