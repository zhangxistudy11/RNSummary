import React, { Component } from 'react';
import { View, Text, Animated, Easing, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../CommonPart/Style/Styles';
import TopView from './Component/TopView';
import BottomView from './Component/BottomView';
import { connect } from 'react-redux'



class ReduxOne extends Component {
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
            <View style={[Styles.container, { marginTop: 100 }]}>
                <TopView></TopView>
                <BottomView></BottomView>
            </View>
        );
    }
  
   
}

export default connect()(ReduxOne)

