// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { BrowserWindow } = require('@electron/remote')
const path = require('path')

const charles = document.getElementById('charleslamannalisting')
charles.addEventListener('click', (event) => {
    document.getElementById('sync-reply').innerHTML = message
})