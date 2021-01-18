const app = require('./app.js');
const createWindow = require('./window.js');

app.whenReady().then(createWindow);