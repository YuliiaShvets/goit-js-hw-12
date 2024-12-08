export const searchImages = (name) => {

const API_KEY = '47416000-07f62798ea171a7bceefd88a8';
const BASE_URL = 'https://pixabay.com/api/';

const params = new URLSearchParams({
    key: API_KEY,
    q: name,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
})

return fetch(`${BASE_URL}?${params}`)
    .then((res) => {
       if(!res.ok) {
          throw new Error(res.statusText);
          }
     return res.json();
})
 
}

