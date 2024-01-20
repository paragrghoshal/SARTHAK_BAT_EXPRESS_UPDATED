const inp = document.getElementById("sb");
const bob = document.getElementById("br");
const alp = document.getElementById("ap");
const p = document.getElementById("p");
const b1 = document.getElementById("bat1");
const b2 = document.getElementById("bat2");
const socket = io();
const scrElement = document.getElementById("scr");

let bobclicked, alpclicked = false

function ShowPanel(){
    bob.style.display = "block";
    alp.style.display = "block";
    p.style.display = "block";
    b1.style.display = "block";
    b2.style.display = "block";
}
function HidePanel(){
  setTimeout(() => {  
    bob.style.display = "none";
    alp.style.display = "none";
    p.style.display = "none";
    b1.style.display = "none"
    b2.style.display = "none"
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

/////////////////// DATABASE FUNCS ////////////////////////////////////////////

function Bob() {
  try {
    socket.emit("give_bob", {});
  } catch (error) {
    console.error("Error emitting give_bob event:", error);
  }

  socket.on("send_bob", (data) => {
    try {
      //console.log("Received send_bob event with data:", data);
      if (scrElement) {
        scrElement.src = `${data}`;
      } else {
        console.error("Element with id 'scr' not found.");
      }
    } catch (error) {
      console.error("Error handling send_bob event:", error);
    }
  });
}
 


function Alp() {
  try {
    socket.emit("give_alp", {});
  } catch (error) {
    console.error("Error emitting give_bob event:", error);
  }

  socket.on("send_alp", (data) => {
    try {
      //console.log("Received send_bob event with data:", data);
      if (scrElement) {
        scrElement.src = `${data}`;
      } else {
        console.error("Element with id 'scr' not found.");
      }
    } catch (error) {
      console.error("Error handling send_bob event:", error);
    }
  });

  //document.getElementById("scr").src = "https://www.youtube.com/embed/hxVdo6aTssQ";
}

function Bat(x){
  try{
      socket.emit("give_bat", x);
  }catch(err)
  { console.error(err); }

  socket.on("send_bat", (data) => {
    try {
      //console.log("Received send_bat event with data:", data);
  
      if (data) {
        
        const firstObject = data[0];
        
        const url = firstObject.url;
  
        if (scrElement) {
          scrElement.src = url;
        } else {
          console.error("Element with id 'scr' not found.");
        }
      } else {
        console.error("Received data is empty or undefined.");
      }
    } catch (error) {
      console.error("Error handling send_bat event:", error);
    }
  });  
}

////////////////////////// JQUERY /////////////////////////////////////////////

$(document).ready(function() {
  $('#maining').hide();

  setTimeout(function() {
      $('#maining').fadeIn(2000);
  }, 1500);
});