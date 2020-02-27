import React, { Component } from 'react';
import { View, Text, Animated, Easing, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../CommonPart/Style/Styles';
import { connect } from 'react-redux'
import {changeInput} from './actions'

// import  store from '../store'



 class ReduxTwo extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState())
        // this.state =  store.getState()
    }
    componentDidMount(){
        // this.runAmimationThree();
    }
  
   
    render() {
     //创建store传入reducers。
     //使用Provider组件包裹 Group组件, store作为属性传入Provider
        const {inputValue} = this.props;
        return (
            <View style={[Styles.container, { marginTop: 100 ,paddingLeft:90}]}>
                		<TextInput
							underlineColorAndroid='transparent'
							style={[{  fontWeight: '500' }]}
							placeholder={ inputValue }
							autoCapitalize='characters'
							returnKeyType={'done'}
							autoFocus={true}
						
							onChangeText={(text) => {
                                this.props.dispatch(changeInput(text))

                                // this.changeTextValue(text)
							}}
							/>
                            <Text>当前值是:{inputValue}</Text>

            </View>
        );
    }
  
changeTextValue = (text) => {
    // console.log(text)
    // const  action  = {
    //     type:'changeInput',
    //     value:text
    // }
    this.props.dispatch(changeInput(text))
    console.log('fffff')
}
   
}
//将状态映射程属性
const stateToProps = (state)=> {
    return {
        inputValue:state.inputValue
    }
}
// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
// });


export default  connect (stateToProps)(ReduxTwo)