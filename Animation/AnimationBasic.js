import React, { Component } from 'react';
import { View, Text, TouchableHighlight ,NavigatorIOS, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../CommonPart//Style/Styles';
import AnimationZero  from './AnimationZero';
import AnimationModal from './AnimationModal';
import OrderDetailDispalyBar from './OrderDetailDisplayBar/OrderDetailDispalyBar'
import SVGBasic from './SVGBasic'


export default class AnimationBasic extends React.Component {
  render() {
    return (
     
      <View style={Styles.container}>
         <FlatList 
        style = {Styles.flatListStyle}
        data={[{ key: '0-基本动画' },{ key: '1-弹框处理' },{key:'2-订单展示弹框'},{key:'3-svg画基本图形'},{key:'4-回调方法获取Promise结果'}]}
        renderItem={this._renderFlatListItem}
        ItemSeparatorComponent = {() => (<View style={Styles.separator}></View>)}

      />
      </View>
    );
  }
  _renderFlatListItem = (data) => {
    let self = this;
    return (<View  style={Styles.itemViewStyle}>
      <TouchableWithoutFeedback onPress={
          () => { this.clickItem(data.index)}}
          >
        <View>
          <Text style={ [Styles.itemTestStyle,{color:'#333'},{fontFamily:'PingFangSC-Regular'},{fontSize:17} ]}>{data.item.key}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>)
  }
  clickItem(index){
    // console.log(index)
     if(index==0){
         this.testZeroMethod();
     }else if(index ==1){
        this.testOneMethod();
     }else if(index ==2){
        this.testTwoMethod();
     }else if(index ==3){
        this.testThreeMethod();
     }else if(index ==4){
        this.testFourMethod();
     }
  }
  testZeroMethod= ()=>{
    this.props.navigator.push({
        component: AnimationZero,
        title:'0-基本动画'
      });
    
  }
  testOneMethod= ()=>{
    this.props.navigator.push({
        component: AnimationModal,
        title:'1-弹框动画'
      });
  }
  testTwoMethod = (data)=>{
    this.props.navigator.push({
      component: OrderDetailDispalyBar,
      title:'2-订单明细弹框'
    });
  }
  testThreeMethod = async()=>{
    this.props.navigator.push({
      component: SVGBasic,
      title:'3-svg画基本图形'
    }); 
  }
  testFourMethod = ()=>{
    let data = {name:'Kin',age:50};
    this.testTwoMethod(data).then((result)=>{
        console.log(result); 
    }).catch((error)=>{
        console.log(error); 
    })
    
  }
}

