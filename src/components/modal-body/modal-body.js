import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import ErrorIndicator from '../error-indicator';
import WeatherCityList from '../weather-city-list';
import { getWeatherCityData } from '../../store/actions';

const ModalBody = (props) => {

    const { 
        getWeatherCityHandler, 
        weatherCityLoading, 
        weatherCityError, 
        weatherCityData, 
        data, 
    } = props;

    useEffect(() => { 
        getWeatherCityHandler(data);
    }, [data]);
    
    const spinner = weatherCityLoading ? <CircularProgress /> : null;
    const errorMessage = weatherCityError ? <ErrorIndicator /> : null;

    const hasData = !(weatherCityLoading || weatherCityError);
    const content = hasData ? <WeatherCityList data={weatherCityData}  /> : null;

    return (
        <>  
            { spinner }
            { errorMessage }
            { content } 
        </>
    )
}

const mapStateToProps = ({ weatherCityReducer }) => {
    return {
        weatherCityLoading: weatherCityReducer.loading,
        weatherCityError: weatherCityReducer.error,
        weatherCityData: weatherCityReducer.weatherCityData,        
    }
}

const mapDispatchToProps = (dispatch) => ({
    getWeatherCityHandler: (data) => dispatch(getWeatherCityData(data)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody)
