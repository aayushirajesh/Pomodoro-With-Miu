const { app, BrowserWindow, ipcMain, Menu } = require('electron/main')
const path = require('node:path');

if (require('electron-squirrel-startup')) app.quit();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    icon: __dirname + '/assets/icon.ico',
    frame: false,
    resizable: false,
    show: false,  // Wait until DOM is ready
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile('index.html');

  win.webContents.on('did-finish-load', () => {
    win.show();  // Only show after page finishes loading
  });
};


Menu.setApplicationMenu(null);

ipcMain.on('minimize', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.minimize();
});

ipcMain.on('close', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.close();
});

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})