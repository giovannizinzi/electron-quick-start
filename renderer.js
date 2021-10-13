// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { Console } = require('console')
const {ipcRenderer} = require('electron')
const path = require('path')

const charles = document.getElementById("charleslamannalisting")
const jason = document.getElementById("jasonzanderlisting")
const phil = document.getElementById("philspencerlisting")

charles.addEventListener('click', (event) => {
    console.log(event.target)
    charles.innerHTML += `<span class="activeSpeaker" id="activeSpeakerCharles"></span>`

    if(document.getElementById("activeSpeakerJason")) {
      document.getElementById("activeSpeakerJason").remove();
      console.log("jason is removed");
    }
    if(document.getElementById("activeSpeakerPhil")) {
      document.getElementById("activeSpeakerPhil").remove();
    }
});

jason.addEventListener('click', (event) => {
    jason.innerHTML += `<span class="activeSpeaker" id="activeSpeakerJason"></span>`

    if(document.getElementById("activeSpeakerCharles")) {
      document.getElementById("activeSpeakerCharles").remove();
      console.log("jason is removed");
    }
    if(document.getElementById("activeSpeakerPhil")) {
      document.getElementById("activeSpeakerPhil").remove();
    }
});

phil.addEventListener('click', (event) => {
    phil.innerHTML += `<span class="activeSpeaker" id="activeSpeakerPhil"></span>`

    if(document.getElementById("activeSpeakerJason")) {
      document.getElementById("activeSpeakerJason").remove();
      console.log("jason is removed");
    }
    if(document.getElementById("activeSpeakerCharles")) {
      document.getElementById("activeSpeakerCharles").remove();
    }
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