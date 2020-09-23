import API from '../utils/axios-settings';

class WeatherApi {

    getWeatherData = async () => { 
        const addr = `/group?id=524901,703448,2643743&appid=e23bbc433667f72f6849a5ec44196865`;
        return await API.get(addr);
    };

}

// api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&appid={e23bbc433667f72f6849a5ec44196865}

export default new WeatherApi();