
// get elements
var numberSpan = document.getElementById('number'),
  increaseButton = document.getElementById('increase'),
  decreaseButton = document.getElementById('decrease');


// get initial value
var itemNumber = parseInt(numberSpan.innerHTML);


// add button
increaseButton.addEventListener('click', function(){
  itemNumber++;
  numberSpan.innerHTML = itemNumber;
});


// subtract button
decreaseButton.addEventListener('click', function(){
  if (itemNumber > 0) {
    itemNumber--;
    numberSpan.innerHTML = itemNumber;
  }
});