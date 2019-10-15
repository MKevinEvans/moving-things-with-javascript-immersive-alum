const app = "I don't do much."
function load(){
  console.log("loaded")
  let dodger = document.getElementById('dodger');
  dodger.style.backgroundColor="#FF69B4"
}
document.addEventListener("DOMComtentLoaded", load());