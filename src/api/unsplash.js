import axios from 'axios';

export default axios.create({
    //just the domain
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NXsiaAMHTHqraRAUkrYOvKbL8tDB-Kv31lLzUHJ5TXE',
    },
});
