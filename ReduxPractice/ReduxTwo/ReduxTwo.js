import React, { Component } from 'react';
import { View, Text, Animated, Easing, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../CommonPart/Style/Styles';
import { connect } from 'react-redux'



 class ReduxTwo extends Component {
    constructor(props) {
        super(props);
     
    }
    componentDidMount(){
        // this.runAmimationThree();
    }
  
   
    render() {
     //创建store传入reducers。
     //使用Provider组件包裹 Group组件, store作为属性传入Provider
        return (
            <View style={[Styles.container, { marginTop: 100 ,paddingLeft:90}]}>
                		<TextInput
							underlineColorAndroid='transparent'
							style={[{  fontWeight: '500' }]}
							placeholder={ '请输入数字' }
							autoCapitalize='characters'
							returnKeyType={'done'}
							autoFocus={true}
						
							onChangeText={(text) => {
                                this.changeTextValue(text)
							}}
				
							/>
            </View>
        );
    }
  
changeTextValue = (text) => {
    console.log(text)

}
   
}
//将状态映射程属性
const stateToProps = (state)=> {
    return {
        number:state.number
    }
}


export default  connect (stateToProps,null)(ReduxTwo)