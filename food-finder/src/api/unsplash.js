import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        app_id: '5ad1d201',
        app_key: '7dbad84dead476c3ad3f4cbcced9e19c'
    }
});