import axios from 'axios';

const API_KEY = '47416000-07f62798ea171a7bceefd88a8';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export async function searchImages(query, page) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE,
    };

    try {
        const response = await axios(BASE_URL, { params });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching images');
    }
}


