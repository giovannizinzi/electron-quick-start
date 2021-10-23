// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { Console } = require('console')
const {ipcRenderer} = require('electron')
const path = require('path')

const anuj = document.getElementById("anujsaharanlisting")
const charles = document.getElementById("charleslamannalisting")
const gio = document.getElementById("giovannizinzilisting")
const jason = document.getElementById("jasonzanderlisting")
const phil = document.getElementById("philspencerlisting")


const button = document.getElementById("button");

charles.addEventListener('click', (event) => {
    if(document.getElementById("activeSpeakerJason")) {
      document.getElementById("activeSpeakerJason").remove();
      console.log("jason is removed");
    }
    if(document.getElementById("activeSpeakerPhil")) {
      document.getElementById("activeSpeakerPhil").remove();
    }
    if(document.getElementById("activeSpeakerGio")) {
      document.getElementById("activeSpeakerGio").remove();
    }
    if(document.getElementById("activeSpeakerAnuj")) {
      document.getElementById("activeSpeakerAnuj").remove();
    }

    charles.innerHTML += `<span class="activeSpeaker" id="activeSpeakerCharles"></span>`

});

jason.addEventListener('click', (event) => {
    if(document.getElementById("activeSpeakerCharles")) {
      document.getElementById("activeSpeakerCharles").remove();
      console.log("jason is removed");
    }
    if(document.getElementById("activeSpeakerPhil")) {
      document.getElementById("activeSpeakerPhil").remove();
    }
    if(document.getElementById("activeSpeakerGio")) {
      document.getElementById("activeSpeakerGio").remove();
    }
    if(document.getElementById("activeSpeakerAnuj")) {
      document.getElementById("activeSpeakerAnuj").remove();
    }

    jason.innerHTML += `<span class="activeSpeaker" id="activeSpeakerJason"></span>`
});

phil.addEventListener('click', (event) => {
    if(document.getElementById("activeSpeakerJason")) {
      document.getElementById("activeSpeakerJason").remove();
      console.log("jason is removed");
    }
    if(document.getElementById("activeSpeakerCharles")) {
      document.getElementById("activeSpeakerCharles").remove();
    }
    if(document.getElementById("activeSpeakerGio")) {
      document.getElementById("activeSpeakerGio").remove();
    }
    if(document.getElementById("activeSpeakerAnuj")) {
      document.getElementById("activeSpeakerAnuj").remove();
    }

    phil.innerHTML += `<span class="activeSpeaker" id="activeSpeakerPhil"></span>`

});

gio.addEventListener('click', (event) => {
  if(document.getElementById("activeSpeakerJason")) {
    document.getElementById("activeSpeakerJason").remove();
    console.log("jason is removed");
  }
  if(document.getElementById("activeSpeakerPhil")) {
    document.getElementById("activeSpeakerPhil").remove();
  }
  if(document.getElementById("activeSpeakerCharles")) {
    document.getElementById("activeSpeakerCharles").remove();
  }
  if(document.getElementById("activeSpeakerAnuj")) {
    document.getElementById("activeSpeakerAnuj").remove();
  }

  gio.innerHTML += `<span class="activeSpeaker" id="activeSpeakerGio"></span>`

});

anuj.addEventListener('click', (event) => {
  if(document.getElementById("activeSpeakerJason")) {
    document.getElementById("activeSpeakerJason").remove();
    console.log("jason is removed");
  }
  if(document.getElementById("activeSpeakerPhil")) {
    document.getElementById("activeSpeakerPhil").remove();
  }
  if(document.getElementById("activeSpeakerCharles")) {
    document.getElementById("activeSpeakerCharles").remove();
  }
  if(document.getElementById("activeSpeakerGio")) {
    document.getElementById("activeSpeakerGio").remove();
  }

  anuj.innerHTML += `<span class="activeSpeaker" id="activeSpeakerAnuj"></span>`

});

button.addEventListener('click' ,(event) => {
  document.querySelector('.bg-modal').style.display = "flex";
  document.querySelector('#container').style.display = "none";
  document.querySelector("wrapper").style["z-index"] = "-1";
});

document.querySelector('.close').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
  document.querySelector('#container').style.display = "grid";
});

function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }