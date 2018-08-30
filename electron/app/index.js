const {app, BrowserWindow} = require('electron');

function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1024, height: 768,
    webPreferences: {
      offscreen: true
    }
  });

  // 然后加载应用的 index.html。
  win.loadFile('index.html');
  win.webContents.on('paint', (event, dirty, image) => {
    // updateBitmap(dirty, image.getBitmap())
    console.log(dirty);
    console.log(image.getBitmap().length);
  });
  win.webContents.setFrameRate(60);


  win.on('show', () => {
    app.hide();
  });
}

// app.disableHardwareAcceleration();
app.on('ready', createWindow);