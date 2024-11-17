const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html');
}

app.whenReady().then(() => {

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });

    ipcMain.handle('message', handleMsg);
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

function handleMsg(event, data) {
    const formattedMsg = data.toLowerCase();
    if (formattedMsg === 'hello') {
        return 'Hi';
    } else if (formattedMsg === 'bye') {
        return 'Goodbye';
    } else {
        return 'I don\'t understand';
    }
}
