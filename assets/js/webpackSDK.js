import Data from './data.js'

class Player {
	constructor() {
		this.data = new Data();
		this.list = document.querySelector('.list');
		this.deviceId = localStorage.getItem('_spharmony_device_id');
	}
	mediaPlayer() {
		window.onSpotifyWebPlaybackSDKReady = () => {
			const player = new Spotify.Player({
				name: 'Web Playback SDK Quick Start Player',
				getOAuthToken: (cb) => {
					cb(this.data.sdkToken);
				},
				volume: 0.3,
			});

			// Error handling
			player.addListener('initialization_error', ({
				message
			}) => {
				console.error(message);
			});
			player.addListener('authentication_error', ({
				message
			}) => {
				console.error(message);
			});
			player.addListener('account_error', ({
				message
			}) => {
				console.error(message);
			});
			player.addListener('playback_error', ({
				message
			}) => {
				console.error(message);
			});

			// Ready
			player.addListener('ready', ({
				device_id
			}) => {
				console.log('Ready with Device ID', device_id);

			});

			// Not Ready
			player.addListener('not_ready', ({
				device_id
			}) => {
				console.log('Device ID has gone offline', device_id);
			});

			// Connect to the player!
			player.connect().then((success) => {
				if (success) {
					console.log(
						'The Web Playback SDK successfully connected to Spotify!',
					);
				}
			});
		};
	}

	play(playTrack) {
		fetch(`https://api.spotify.com/v1/me/player/play?device_id=${this.deviceId}`, {
			method: 'PUT',

			body: JSON.stringify({
				uris: [playTrack],
			}),

			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.data.apiToken}`,
			},
		});

	}

	pause(pauseTrack) {

		fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${this.deviceId}`, {
			method: 'PUT',

			body: JSON.stringify({
				uris: [pauseTrack],
			}),

			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.data.apiToken}`,
			},
		});

	}

}

export default Player