import { combineReducers } from 'redux'
import ReducerOne from '../ReduxOne/reducers/changeColorReducer';
import ReducerTwo from '../ReduxTwo/reducers/changeTextReducer';

export default combineReducers({
    ReducerOne,
    ReducerTwo
})