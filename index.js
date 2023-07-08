// Your code here


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  var dodger = document.getElementById('dodger');
  var currentPosition = parseInt(dodger.style.left) || 0; 
  var newPosition = currentPosition + 10; 
  
  dodger.style.left = newPosition + 'px'; 
}
  
