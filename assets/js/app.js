import Ui from './ui.js'
import Player from './webpackSDK.js'

class App{
    constructor(){
        this.ui = new Ui(); 
        this.player = new Player(); 
    }
    run(){
        this.player.mediaPlayer(); 
        this.ui.loadApp(); 
    }
}

const app = new App(); 
app.run(); 