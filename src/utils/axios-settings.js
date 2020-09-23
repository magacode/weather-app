import axios from 'axios';

// export default axios.create({
//     baseURL: "https://api.openweathermap.org/data/2.5",
//     method: 'get',
// });

const axiosSettings = (data) => {
    let url = data === 'city' ? "https://api.openweathermap.org/data/2.5" : "https://api.openweathermap.org/data/2.5";

    return  axios.create({
                baseURL: url,
                method: 'get',
            })
}

export default axiosSettings;