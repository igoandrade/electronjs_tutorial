// 1. Import electron objects
import { app, BrowserWindow } from 'electron';


// 2. Reserve a reference to window object
let window;

// 3. Wait till application started
app.on('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // 5. Load window content
    window.loadFile('index.html');
});