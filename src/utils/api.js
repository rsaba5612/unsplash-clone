import axios from "axios";

const api=axios.create({
 baseURL:'https://api.unsplash.com/',
 headers:{
    Authorization: `Client-ID 0Coj4h6uZifFNlgILbP-Mqz0g1QJQyeAEyqM6vJcnUk`,
 },
});

export default api;