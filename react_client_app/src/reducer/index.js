import simulation from './simulation_reducer.js';
import booking from './booking_reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  simulation,
  booking
});

export default rootReducer;