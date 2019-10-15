const app = "I don't do much."
function load(){
  console.log("loaded")
  let dodger = document.getElementById('dodger');
  dodger.style.backgroundColor="#FF69B4";
  dodger.style.left = "0px";
  dodger.style.bottom = "0px";

}
document.addEventListener("DOMComtentLoaded", load());