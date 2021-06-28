import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer ZIBGZLj8YNGWF7EbLpTFQde0B_KOioNiRInfaH6aRxFyrlxt_8jFL9NXEVXnfqWiHzR7R2S7PBaoXWBj2Jq9EjXb1HBWyLTONcGEX0XcdmFqdikjQ6ADW1K6P47LYHYx'
    }
});



// we might be working with multiple APIs so we need multiple instances of axios and each of these js files in this folder
// will handle different APIs