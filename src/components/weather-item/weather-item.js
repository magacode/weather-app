import React from 'react';

const WeatherItem = ({ weatherData, setIsOpen, setDataModal }) => {
    const { coord, weather, main, wind, name } = weatherData;
    return <p onClick={() => {
        setIsOpen(true);
        setDataModal({ coord, name })
    }}>{weatherData.name}</p>
}

export default WeatherItem;