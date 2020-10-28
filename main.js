var electron=require('electron')
const ipcMain = require('electron').ipcMain
var app=electron.app//引用app

var BrowserWindow=electron.BrowserWindow//窗口引用

var mainWindow=null//声明要打开的主窗口

app.on('ready',()=>{
    mainWindow =new BrowserWindow({width:600,height:400,frame:false,resizable: false,
      // useContentSize: true,
      // transparent: false,
       webPreferences: {nodeIntegration: true}})
    mainWindow.loadFile('WEB/Usance/index.html')//加载html页面
    mainWindow.on('closed',()=>{
        mainWindow =null
    })
    mainWindow.webContents.openDevTools()
     ipcMain.on('minWindow', () => {
         mainWindow.minimize()
     })
    ipcMain.on('closeWindow', () => {
         mainWindow.close()
    })
    ipcMain.on('Max',()=>{
        mainWindow.setSize(1000, 600)
    })
    ipcMain.on('Min',()=>{
        mainWindow.setSize(600, 400)
    })
})



//cnpm install --save-dev electron-packager 
//cnpm install -g electron-packager 


// 三. 运行

// 现在只要在myApp目录下执行npm start 就可以运行了

//     npm start


// 打开命令行我们可以这样使用它：

//     electron-packager . HelloWorld --win --out ../HelloWorldApp --arch=x64 --version=0.0.1
// 大概格式是这样的：

//     electron-packager <应用目录> <应用名称> <打包平台> --out <输出目录> <架构> <应用版本>
// electron-packager . HelloWorld --win --out ../HelloWorldApp --arch=x64 --version=0.0.1 --electron-version=8.2.3


//body::-webkit-scrollbar {/*隐藏滚度轮*/
// display: none;
// }
//overflow:-Scroll;overflow-y:hidden
//这个是y轴有滚百动条，x轴没度有。如果是都要滚动条就去掉overflow-x:hidden;，如果是反问正哪个轴答要滚动条就加上overflow-x/y:scroll;整个页面滚动条就加在body里面内，div里面出现容滚动条就加在div里面。