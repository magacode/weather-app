import axios from 'axios';

export default axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    method: 'get',
    // headers: {
    //     "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
    //     "x-rapidapi-key": "007247cf5amshdd7ab1a205152c1p1f5e22jsn9611dc5c48ff",
    // }
});