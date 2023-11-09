const inp = document.getElementById("sb");
const bob = document.getElementById("br");
const alp = document.getElementById("ap");
const p = document.getElementById("p");

let bobclicked, alpclicked = false

function ShowPanel(){
    bob.style.display = "block";
    alp.style.display = "block";
    p.style.display = "block";
}
function HidePanel(){
  setTimeout(() => {  
    bob.style.display = "none";
    alp.style.display = "none";
    p.style.display = "none"
  }, 250)
}

sb.addEventListener('input', function () {
if (/[bob]/.test(sb.value) && /[ross]/.test(sb.value) || /[bob]/.test(sb.value) || /[ross]/.test(sb.value)) {
alp.style.display = "none";
} else {
alp.style.display = "block";
}

if (/[alpay]/.test(sb.value) && /[efe]/.test(sb.value) || /[alpay]/.test(sb.value) || /[efe]/.test(sb.value)) {
bob.style.display = "none";
} else {
bob.style.display = "block";
}

if(/[alpay]/.test(sb.value) == false && /[efe]/.test(sb.value) == false && /[bob]/.test(sb.value) == false && /[ross]/.test(sb.value) == false){
    bob.style.display = "none";
    alp.style.display = "none";
}
});

function ChangeColor() {
  var computedStyle = getComputedStyle(document.body);
  var backgroundColor = computedStyle.backgroundColor;
  var change = document.getElementById("text-content")
  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");

  if (backgroundColor === "rgb(20, 20, 20)") {
    setTimeout(() => {
      change.textContent = "dark";
      sun.style.display = "none";
      moon.style.display = "flex";
      document.body.style.color = "black";
      document.body.style.backgroundColor = "rgb(255, 255, 255)";
    }, 500);
  }

  if (backgroundColor === "rgb(255, 255, 255)") {
    setTimeout(() => {
      change.textContent = "light";
      sun.style.display = "flex";
      moon.style.display = "none";
      document.body.style.color = "white";
      document.body.style.backgroundColor = "rgb(20, 20, 20)";
    }, 500);
  }
}


////////////////// Button Actions ///////////////////////////////////

function Pizza() {
  document.getElementById("scr").src = "https://www.youtube.com/embed/lss1F_7lXkE";
}

function Coloring() {
  document.getElementById("scr").src = "https://www.youtube.com/embed/JUyU_IBvUKA";
}

function Shape() {
  document.getElementById("scr").src = "https://www.youtube.com/embed/tI6dyDafIgQ";
}

function Bob() {
  document.getElementById("scr").src = "https://www.youtube.com/embed/lLWEXRAnQd0";
}


function Alp() {
  document.getElementById("scr").src = "https://www.youtube.com/embed/hxVdo6aTssQ";
}

////////////////////////// JQUERY /////////////////////////////////////////////

$(document).ready(function() {
  $('#maining').hide();

  setTimeout(function() {
      $('#maining').fadeIn(2000);
  }, 1500);
});