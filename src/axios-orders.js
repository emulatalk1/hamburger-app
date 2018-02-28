import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://console.firebase.google.com/u/0/project/hamburgerhieu/database/hamburgerhieu/data'
});

export default instance;
