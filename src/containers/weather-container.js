import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import ErrorIndicator from '../components/error-indicator';
import { getWeatherData } from '../store/actions';
import WeatherList from '../components/weather-list';
import Modal from '../components/modal';
import ModalBody from '../components/modal-body';

const WeatherContainer = (props) => {
    
    const { 
        getWeatherHandler, 
        weatherLoading, 
        weatherError, 
        weatherData,  
    } = props;

    const [ isOpen, setIsOpen ] = useState(false);
    const [ dataModal, setDataModal ] = useState({ name: '', coord: '' });

    useEffect(() => { 
        getWeatherHandler()
    }, [])

    const spinner = weatherLoading ? <CircularProgress /> : null;
    const errorMessage = weatherError ? <ErrorIndicator /> : null;

    const hasData = !(weatherLoading || weatherError);
    const content = hasData ? <WeatherList list={weatherData.list} setIsOpen={setIsOpen} setDataModal={setDataModal} /> : null;

    return (
        <div className="">
            <div className="">
                { spinner }
                { errorMessage }
                { content }  
                
                <Modal title={dataModal.name} isOpen={isOpen} onCancel={setIsOpen}>
                    <ModalBody dataModal={dataModal} />        
                </Modal>
            </div>
        </div>
    )
    
};

const mapStateToProps = ({ weatherReducer }) => {
    return {
        weatherLoading: weatherReducer.loading,
        weatherError: weatherReducer.error,
        weatherData: weatherReducer.weatherData,        
    }
}

const mapDispatchToProps = (dispatch) => ({
    getWeatherHandler: () => dispatch(getWeatherData()), 
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)
