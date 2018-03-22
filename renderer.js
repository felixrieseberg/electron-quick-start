// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require('electron')

document.querySelector('#launch').onclick = () => {
  process.env.HI_FROM_ELECTRON = 'Hello!';
  remote.shell.openExternal('https://google.com');
}
