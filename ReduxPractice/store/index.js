import { createStore } from 'redux';
// import ReducerOne from '../ReduxOne/reducers/changeColorReducer';
// import ReducerTwo from '../ReduxTwo/reducers/changeTextReducer';
import rootReducer from '../rootReducer'

const store = createStore(
    rootReducer
    //添加中间件
)
 
  export default store