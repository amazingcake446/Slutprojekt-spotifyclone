
class Data {
    constructor(){
        this.sdkToken =
        'BQDTu2zHBsEbHCe4eMmSZlPiXrDIu7jGYmuDARNmXTkArdtDPhj8rR_lIFj3munSlgxNqbfq8XTUvARYud-nbALZ7mZqxNFVoZPKT2IA1_-KRNS7_3_J1Hye-C5RNj-T8Q-AmpA-WEN-xRTeONmWVpO3Tujy4ukO--o';
        
        this.apiToken = 'BQAJlFfUaiMz_H6EudZWPA3-iOvHBJe0trzOssnglwbtEY_tcer1-24q2LosBPD8Jw_qKB1VEYK_nqyrhJvjB00p0kTS5Y8u7kxS_uUakjC8TBBzjx28daOmZXdCLxX6RqTYabNGsGQO9_4KddAOy1t62MWl3k1zz-X3eUzOJjC1Y8RWRw1ij6K3LFIVIrKl22NADtHencs08LhZg09ceJQevcEU42pMPJdU07K_MuO92emrpVwPBBFn16p3NbKk7zZah7xLpSWmgMJaCXc';

        this.baseURL = "https://api.spotify.com/v1";
    }
    fetchData(){
        let promiseResponse = fetch(
            'https://api.spotify.com/v1/playlists/3ZPTr62ICLWftugHYtTTX3?market=SE',
            {
                method: 'GET',
    
                headers: {
                    Authorization: `Bearer ${this.apiToken}`,
                },
            },
        )
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
        return promiseResponse;
    }
    setVolume(volume){
         
         let promiseResponse = fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volume}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${this.apiToken}`,
            },
        },
    )
    .then((response) => response.json())
    .then((data) => {
        return data;
    });

    return promiseResponse;
    }


    currentTrack() {
        let promiseResponse = fetch(`https://api.spotify.com/v1/me/player/currently-playing?market=SE`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.apiToken}`,
                },
            },
        )
        .then((response) => response.json())
        .then((data) => {
            return data;
        });

        return promiseResponse;
    }
    
}

const data = new Data(); 
data.currentTrack().then(response => {
    console.log(response)
})

export default Data;  