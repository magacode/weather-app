import { combineReducers } from 'redux';

import weatherReducer from './weather';
import weatherCityReducer from './weather-city';

export default combineReducers({
  weatherReducer,
  weatherCityReducer,
});