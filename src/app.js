const { app } = require('electron');

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('ready', () => {
    console.log('App is running...');
});

module.exports = app;