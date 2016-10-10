import { combineReducers } from 'redux';
import WeatherDataReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherDataReducer
});

export default rootReducer;
