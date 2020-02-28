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
        const {inputValue,changeTextValue} = this.props;
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
                                // this.props.dispatch(changeInput(text))
                                changeTextValue(text)
                                // this.changeTextValue(text)
							}}
							/>
                            <Text>当前值是:{inputValue}</Text>

            </View>
        );
    }
  /*
changeTextValue = (text) => {
    // console.log(text)
    // const  action  = {
    //     type:'changeInput',
    //     value:text
    // }
    this.props.dispatch(changeInput(text))
    console.log('fffff')
}
   */
}
//将状态映射成属性
const stateToProps = (state)=> {
    const {changeTextReducer:{inputValue}} = state;

    return {
        inputValue:inputValue
    }
}
/*
mapDispatchToProps() 方法接收 dispatch() 方法，
并返回期望注入到展示组件的 props 中的回调方法
*/
const mapDispatchToProps = ( dispatch,ownProps ) => {
    return {
        changeTextValue: (text) => {
        dispatch(changeInput(text));
      }
    };
  }
// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
// });


export default  connect (stateToProps,mapDispatchToProps)(ReduxTwo)