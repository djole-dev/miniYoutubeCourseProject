import axios from 'axios';

const KEY='AIzaSyBz7crzU1TuHr9M1xl-0fACtYciyax0H_Y';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
       part: 'snippet',
       maxResult: 5,
       key: KEY,
    },
});