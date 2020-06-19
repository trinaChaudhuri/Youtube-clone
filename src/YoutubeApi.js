import axios from 'axios';
const API_KEY = "AIzaSyCBMq0gUROHeOE1WZcNduEiSmAdd4sTGMk";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key:API_KEY
    }
})