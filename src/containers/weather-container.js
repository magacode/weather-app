import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import ErrorIndicator from '../components/error-indicator';
import { getWeatherData } from '../store/actions';
import WeatherList from '../components/weather-list';
// import Modal from '../components/modal';
import Modal from '@material-ui/core/Modal';
import ModalBody from '../components/modal-body';

const WeatherContainer = (props) => {
    
    const { 
        getWeatherHandler, 
        weatherLoading, 
        weatherError, 
        weatherData,  
    } = props;

    const [ isOpen, setIsOpen ] = useState(false);
    const [ cityWeatherData, setCityWeatherData ] = useState({ name: '', coord: { lat: '', lon: '' } });

    const { list } = weatherData;

    useEffect(() => { 
        getWeatherHandler()
    }, [])

    const spinner = weatherLoading ? <CircularProgress /> : null;
    const errorMessage = weatherError ? <ErrorIndicator /> : null;

    const hasData = !(weatherLoading || weatherError);
    const content = hasData ? <WeatherList list={list} setIsOpen={setIsOpen} setDataModal={setCityWeatherData} /> : null;

    return (
        <div className="">
            <div className="">
                { spinner }
                { errorMessage }
                { content }  

                <Modal
                    open={setIsOpen}
                    onClose={setIsOpen}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <ModalBody data={cityWeatherData.coord} />
                </Modal>
                
                {/* <Modal title={cityWeatherData.name} isOpen={isOpen} onCancel={setIsOpen}>
                    <ModalBody data={cityWeatherData.coord} />        
                </Modal> */}
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
