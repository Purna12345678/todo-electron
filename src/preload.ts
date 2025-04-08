import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  // You can expose APIs here if needed
  // Example:
  // doThing: () => ipcRenderer.send('do-a-thing')
});
