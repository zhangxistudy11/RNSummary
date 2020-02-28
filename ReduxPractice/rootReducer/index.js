import { combineReducers } from 'redux'
import changeColorReducer from '../ReduxOne/reducers/changeColorReducer';
import changeTextReducer from '../ReduxTwo/reducers/changeTextReducer';

export default combineReducers({
    changeColorReducer,
    changeTextReducer
})