import axios from "axios";
import GeocoderResult = google.maps.GeocoderResult;
import GeocoderStatus = google.maps.GeocoderStatus;

const form = document.querySelector('form')!;
const addressInput = document.querySelector('#address')! as HTMLInputElement;

type GoogleGeocodingResponse = {
    results: GeocoderResult[];
    status: GeocoderStatus;
}

const GOOGLE_API_KEY = 'AIzaSyCrh1j_ei2ijNZZrJj0ZxCYA4EVJlo0yuc';

function searchAddressHandler(event: Event){
    event.preventDefault();
    const enteredAddress = addressInput.value;
    console.log(enteredAddress);
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
        .then(res => {
            if(res.data.status !== 'OK') throw new Error('Could not fetch location');
            const coordinates = res.data.results[0].geometry.location;
            const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                center: coordinates,
                zoom: 17,
            });
            const marker = new google.maps.Marker({
                position: coordinates,
                map: map,
            });
            console.log(marker);
        })
        .catch(err => alert(err.message));
}

form.addEventListener('submit', searchAddressHandler);
