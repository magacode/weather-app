import React from 'react';
import ListItem from '@material-ui/core/ListItem';

const WeatherItem = ({ weatherData, setIsOpen, setDataModal }) => {
    const { coord, name } = weatherData;
    return (
        <ListItem button onClick={() => {
            setIsOpen(true);
            setDataModal({ name, coord })
        }}>{name}</ListItem>
    )
    
}

export default WeatherItem;