const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('data',{
    sendMsg : data => ipcRenderer.invoke('message',data),
})