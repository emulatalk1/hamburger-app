import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hamburgerhieu.firebaseio.com/'
});

export default instance;
