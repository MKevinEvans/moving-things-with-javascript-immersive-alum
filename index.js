const app = "I don't do much."
function load(){
  console.log("loaded")
  let dodger = document.getElementById('dodger');
  dodger.style.backgroundColor="#FF69B4";
  let distBottom = 0;
  let distLeft = 0;
  
function moveDodger(){
  dodger.style.bottom = `${distBottom}px`;
  dodger.style.left = `${distLeft}px`;
}
    document.addEventListener("keydown", function(e) {
      switch (e.key) {
        case "ArrowUp":
          distBottom += 10;
          moveDodger();
          break;
        case "ArrowDown":
          distBottom-= 10;
          moveDodger();
          break;
        case "ArrowLeft":
          distLeft += 10;
          moveDodger();
          break;
        case "ArrowRight":
          distLeft -= 10;
          moveDodger();
          break;
      }
    })
}
document.addEventListener("DOMComtentLoaded", load());