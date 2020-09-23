import React from 'react';

import WeatherItem from '../weather-item';

const WeatherList = ({ list, setIsOpen, setDataModal }) => {
        return list.map((data) => {
            const { id } = data;
            return <WeatherItem weatherData={data} setIsOpen={setIsOpen} setDataModal={setDataModal} key={id} />;
        })
}

export default WeatherList;