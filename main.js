import { app, BrowserWindow } from "electron";

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: "./renderer.js",
    },
  });

  mainWindow.loadFile("index.html");
});
