import axios from 'axios';
const KEY = 'AIzaSyBgscP3sg0voIRRdOLX6ZzNBocVHrQA9ug';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})