import API from '../utils/axios-settings';

class WeatherApi {

    getWeatherData = async () => { 
        const addr = `/group?id=524901,703448,2643743&appid=e23bbc433667f72f6849a5ec44196865`;
        return await API().get(addr);
    };

    getWeatherCityData = async ({ lat, lon }) => { 
        const addr = `/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&lang=ru&units=metric&appid=e23bbc433667f72f6849a5ec44196865`;
        return await API('city').get(addr);
    };

}

export default new WeatherApi();