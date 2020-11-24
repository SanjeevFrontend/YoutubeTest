import axios from 'axios';
const KEY = 'AIzaSyAzNdbXrvQerTHz5SUWv9dUDptQ9_sI7nQ'; // API key

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
});