import React from 'react';

const WeatherCityItem = ({ weatherData }) => {  
    const { temp, wind_speed, pressure, humidity} = weatherData;
    
    return (
        <>
            <p>Температура{temp.day}</p>
            <p>Скорость ветра{wind_speed}</p>
            <p>Давление{pressure}</p>
            <p>Влажность {humidity}</p>
        </>
    )
}

export default WeatherCityItem;