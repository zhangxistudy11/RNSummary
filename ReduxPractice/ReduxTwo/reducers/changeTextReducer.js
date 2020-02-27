
import  {
    CHANGE_TEXT
  }from "../actions/type"
const changeText  = (state = {inputValue:'请开始输入'},action)=>{
    const {type,inputValue} = action;

    // return  state
    console.log(type)
    switch(type){
        case CHANGE_TEXT:
            return{
                ...state,inputValue:inputValue
            }
        default:
            return  state
    }
}
export default  changeText;
