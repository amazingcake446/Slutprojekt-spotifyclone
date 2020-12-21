
class Data {
    constructor(){
        this.sdkToken =
	    'BQDACMb65ZFhVQ0k-l6Tu6KRROx1IemW7HB_HT-NTQTXUcWtP5gUmIdGArtra-Pr5q-8_V6Uf4Ap6qFyJy-7_9ky85zEjddJGGgYDgQFVbexCLxuU1FZg1c0LWmyq04XZBgPcgSW-CI03X_Ie32AO4pX6tOs9MB_d2U';

        this.apiToken =             'BQCADa4yxwtrLgruwaVqSUl9OQoFm2lRPvrchJ-FZNAoZ2J6XchmXeVBMYEAGsGXxqJLvtnJYWmObFoyugqJd2ixRJcsAXWOYJNUngNIYiFkT2gE9Bn1wugV7tGji34XVOyV6tvjaqq-4E-EU6p05HXXRkUvmn04T4HcduTWFshewWPKe7PcuYA2r4zJSwfVnP2DvXBNVpsQWSaHKUSxXY4SFqQ46Xr1tHWijAHUWbQoZBZ1a2Qzrhk4wGCUw2AfHYRioRf-zW5_d62A5Xw';
    }
    fetchData(){
        let promiseResponse = fetch(
            'https://api.spotify.com/v1/playlists/1l7M7Nn1vkDTX50SxlR6P4?market=SE',
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
 
}

export default Data;  