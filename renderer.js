// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const {ipcRenderer} = require('electron')
const path = require('path')

const charles = document.getElementById("charleslamannalisting")

charles.addEventListener('click', (event) => {
    charles.innerHTML += `<span class="activeSpeaker" id=""></span>`
});

const jason = document.getElementById("jasonzanderlisting")

jason.addEventListener('click', (event) => {
    jason.innerHTML += `<span class="activeSpeaker" id=""></span>`
});

const phil = document.getElementById("philspencerlisting")

phil.addEventListener('click', (event) => {
    phil.innerHTML += `<span class="activeSpeaker" id=""></span>`
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