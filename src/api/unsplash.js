import axios from 'axios';

const ACCESS_KEY = '0JaTGptBQ-d4zuj2N6-RnZpD8y0cN3YLtZhfQZkfEBM';

const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
    },
});

export const searchImages = async (query, page = 1, perPage = 12) => {
    const response = await instance.get('/search/photos', {
        params: {
            query,
            page,
            per_page: perPage,
        },
    });
    
    return response.data;
};
