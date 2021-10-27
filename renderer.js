// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { Console } = require('console')
const {ipcRenderer} = require('electron')
const path = require('path')
let {PythonShell} = require('python-shell')
const http = require('http')
const fs = require('fs');
const spawn = require("child_process").spawn;
const { SSL_OP_EPHEMERAL_RSA } = require('constants')
const { waitForDebugger } = require('inspector')
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');
const { create } = require('domain')

const anuj = document.getElementById("anujsaharanlisting")
const charles = document.getElementById("charleslamannalisting")
const gio = document.getElementById("giovannizinzilisting")
const jason = document.getElementById("jasonzanderlisting")
const phil = document.getElementById("philspencerlisting")
const audio = document.querySelector('.audioSection')
const button = document.getElementById("button");


document.getElementById('audioDownload').onclick = function() {
  document.getElementById('my_file').click();

  PythonShell.runString('x=1+1;y=x+3;print(y)', null, function (err, results) {
    if (err) throw err;
    console.log(results[0]);
    console.log('finished');
  });
};

document.getElementById('audioDownload2').onclick = function() {
  document.getElementById('my_file2').click();
  //After input uploaded, try to run some python commands? Maybe send request to flask server too
};

charles.addEventListener('click', (event) => {

  if(document.querySelector('.activeSpeaker')) {
    removeActiveSpeaker()
  }

    charles.innerHTML += `<span class="activeSpeaker" id="activeSpeakerCharles"></span>`

    text = document.getElementById('textInput').value
    charlesModel = ""
    createAudio(charlesModel, text)
});

jason.addEventListener('click', (event) => {

  if(document.querySelector('.activeSpeaker')) {
    removeActiveSpeaker()
  }

    jason.innerHTML += `<span class="activeSpeaker" id="activeSpeakerJason"></span>`

    text = document.getElementById('textInput').value
    jasonModel = ""
    createAudio(jasonModel, text)
});

phil.addEventListener('click', (event) => {
    if(document.querySelector('.activeSpeaker')) {
      removeActiveSpeaker()
    }
    phil.innerHTML += `<span class="activeSpeaker" id="activeSpeakerPhil"></span>`

    text = document.getElementById('textInput').value
    philModel = "1k-G8UqLyoObEoyHM2eNEXt8Z8YgDE2yz"
    createAudio(philModel, text)
});

gio.addEventListener('click', (event) => {

  if(document.querySelector('.activeSpeaker')) {
    removeActiveSpeaker()
  }

  gio.innerHTML += `<span class="activeSpeaker" id="activeSpeakerGio"></span>`

  text = document.getElementById('textInput').value
  gioModel = "1D0z716mepv9-CAxrPR0-4aO074ONMtwg"
  createAudio(gioModel, text)

});

anuj.addEventListener('click', (event) => {

  if(document.querySelector('.activeSpeaker')) {
    removeActiveSpeaker()
  }

  anuj.innerHTML += `<span class="activeSpeaker" id="activeSpeakerAnuj"></span>`

  text = document.getElementById('textInput').value
  anujModel = ""
  createAudio(anujModel, text)

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

// if(text) {
//   console.log(text)
//   var bb = new Blob([text], { type: 'text/plain' });
//   var a = document.createElement('a');
//   a.download = 'download.txt';
//   a.href = URL.createObjectURL(bb);
//   a.click();
// }

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

function removeActiveSpeaker() {
  var elements = document.querySelectorAll('.activeSpeaker')
      for(var i = 0; i < elements.length; i++){
        elements[i].remove()
      }
}

function createAudio(model, text) {
  console.log(text)

  const data = JSON.stringify({
    transcript : text,
    model : model})
  
  const options = {
    hostname: '192.168.1.23',
    port: 8080,
    path: '/talknet',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }

  const req = http.request(options, res => {
    var str = ''
    var uuid = uuidv4()
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', function (body) {
      str += body;
    })

    res.on('end', function () {
      console.log('writing')
      fs.writeFile('textForPython6.txt', str, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
      const pythonProcess = spawn('python',["convertToFile.py", uuid]);
      pythonProcess.on('exit', function() {
      
      audioID = document.getElementById('player')
      audioID.removeAttribute('src')
      audioID.pause()
      audioID.src = uuid + ".wav"
      audioID.load()
      audioID.play()
      })
    });

  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.write(data)
  req.end()
}
  
const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}