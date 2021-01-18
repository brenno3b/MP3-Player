const { BrowserWindow, Menu, dialog, ipcMain } = require('electron');

let songList = [];

let createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    let menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                { 
                    label: 'Open File',
                    accelerator: 'Alt+F',
                    click() {
                        openFile(win);
                    }
                },
                { type: 'separator' },
                { 
                    label: 'Exit',
                    accelerator: 'Alt+F4',
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                { label: 'Documentation' },
                { 
                    label: 'Dev Tools',
                    accelerator: 'F12',
                    click() {
                        win.webContents.openDevTools();
                    }
                }
            ]
        }
    ]);

    Menu.setApplicationMenu(menu);

    win.loadFile(__dirname + '/public/index.html');

    ipcMain.on('playQueueSong', (event, songName) => {
        const songIndex = songList.findIndex(songInSongList => songInSongList.name === songName);
    
        win.webContents.send('playSong', songList[songIndex].filePath);
    }); 
}

function openFile(win) {
    dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
        .then(({ filePaths }) => {
            populateSongList(filePaths);

            win.webContents.send('updateSongList', songList);
        }
    );
}

function populateSongList(songPaths) {
    songPaths.forEach(songPath => {
        const songIndex = songList.findIndex(songInSongList => songInSongList.filePath === songPath);

        if (songIndex !== -1) return

        songList.push({
            name: songPath.replace(/^.*[\\\/]/, ''),
            filePath: songPath
        });
    });
}

module.exports = createWindow;