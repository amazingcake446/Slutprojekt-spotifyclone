import Data from './data.js'
import Player from './webpackSDK.js'

class Ui {
	constructor() {
        this.data = new Data();
        this.sdkPlayer = new Player(); 

        this.list = document.querySelector('.list'); 
        this.albumImage = document.querySelector('.clip-animation');
        this.trackAmount = document.querySelector('.track-amount');
        this.progressBar = document.querySelector('.progress'); 
        this.volumeBox = document.querySelector('.volumeBox'); 
        this.volumeslider = document.querySelector('volumeslider');
        this.btnBox = document.querySelector('.btn-box');
    }
    
	loadApp() {
        this.PrintToDom();
        this.wind(); 
    }
	PrintToDom() { 
        var self = this;

		this.data.fetchData().then((response) => {
			let song = response.tracks.items;
			
			console.log(response);


			const trackList = [];

			for (let i = 0; i < song.length; i++) {
				let trackName = song[i].track.name
				const eachTrack = trackName.split(' ').join('-').toLowerCase();
				trackList.push(eachTrack)

				const code = `
                <li class="li-box">
                <div class="li-left">
                
                <i class="fas fa-play btn ${eachTrack} playicon list-item"></i></button>
                </div>
                <div class="li-center">
                    <p class="song test1">${response.tracks.items[i].track.name}</p>
                    <p class="artist test2">${response.tracks.items[i].track.artists[0].name}</p> 
                </div>
                <div class="li-right">
                    <p class="song-times"></p>
                </div>
                <p class="song-bar"></p>
            </li>`;

				this.list.innerHTML += code;
            }        

                        // Volume Controll //
            this.volumeBox.addEventListener('click', function (x) {           
                if (x.target.classList.contains('fa-volume-up')){
                    let volUp = x.target;
                    volUp.classList.remove('fa-volume-up');
                    volUp.classList.add('fa-volume-mute')
                    volumeslider.value = 0;
                    self.data.setVolume(0); 

                } else if (x.target.classList.contains('fa-volume-mute')){
                    let volUp = x.target;
                    volUp.classList.remove('fa-volume-mute');
                    volUp.classList.add('fa-volume-up')
                    volumeslider.value = 100;
                    self.data.setVolume(70); 
                }
                else if(x.target.classList.contains('volumeSlider')){
                    volumeslider.value = self.data.setVolume(volumeslider.value)
                }
            })

            


            this.list.addEventListener('click', function (e) {
                if (e.target.classList.contains('btn')) {
                    for (let i = 0; i < trackList.length; i++) {
                        
                        if (e.target.classList.contains(trackList[i])) {
                            
                            if(e.target.classList.contains('fa-pause')){
                                
                                self.sdkPlayer.pause(song[i].track.uri)
                                
                                
                            }
                            else if(e.target.classList.contains('fa-play')){
                                
                                self.sdkPlayer.play(song[i].track.uri)
                            } 
                            
                        }
                    }
                }

                if(e.target.classList.contains('fa-play')){
                    const icon = e.target;
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause')

                } else if(e.target.classList.contains('fa-pause')) {
                    const icon = e.target; 
                    icon.classList.remove('fa-pause'); 
                    icon.classList.add('fa-play')  			
                }
            });
        })

        this.data.fetchData().then(response => {
            this.albumImage.src = response.images[0].url; 
            this.trackAmount.textContent = response.tracks.items.length-1
            
        })

    }
    wind(){
      let self = this; 

      let myTimer = setInterval(function(){ 
            self.data.currentTrack().then(response => {
                if(response.is_playing == true){
                    document.querySelector('.currentTrack').textContent = response.item.name
                    document.querySelector('.progress').max = response.item.duration_ms; 
                    document.querySelector('.progress').value = response.progress_ms; 
                }               
            })

        }, 1000);
    }
            
        
        
    

    
    
}

const ui = new Ui;

export default Ui;