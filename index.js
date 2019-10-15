const app = "I don't do much."
function load(){
  console.log("loaded")
  let dodger = document.getElementById('dodger');
  dodger.style.backgroundColor="#FF69B4";
  dodger.style.left = "0px";
  dodger.style.bottom = "0px";
    document.addEventListener("keydown", function(e) {
      switch (e.key) {
        case "ArrowUp":
          dodger.style.bottom += 10;
          console.log("up pressed and style.bottom = "+ dodger.style.bottom)
          break;
        case "ArrowDown":
          dodger.style.bottom -= 10;
          break;
        case "ArrowLeft":
          dodger.style.left += 10;
          break;
        case "ArrowRight":
          dodger.style.bottom -= 10;
          break;
      }
    })
}
document.addEventListener("DOMComtentLoaded", load());