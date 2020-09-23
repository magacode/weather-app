import React from 'react';

import WeatherCityItem from '../weather-city-item';

const WeatherCityList = ({data}) => {
    const { daily } = data; 

    return daily.map((item) => {
        const { dt, ...weatherData } = item;
        return <WeatherCityItem weatherData={weatherData} key={dt}/>
    });
}

export default WeatherCityList;