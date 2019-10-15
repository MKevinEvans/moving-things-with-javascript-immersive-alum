const app = "I don't do much."
function load(){
  console.log("loaded")
  let dodger = document.getElementById('dodger');
  dodger.style.backgroundcolor="#000000"
}
document.addEventListener("DOMComtentLoaded", load);