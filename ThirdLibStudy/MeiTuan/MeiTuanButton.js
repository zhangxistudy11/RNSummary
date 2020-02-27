import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import CommonStyles from '../../CommonPart/Style/Styles';
import { Button, Actionsheet,SlideModal, SlideModalProps, BottomModal, Icon } from 'beeshell';
import styles from "./MeiTuanStyle"

const componentStyles = StyleSheet.create({
  spacingH: {
    marginRight: 10,
  },

  spacingV: {
    marginBottom: 12
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
})

export default class MeiTuanButton extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <View style={[CommonStyles.container, { marginTop: 100 }]}>
        {/* {this._renderButtonView()} */}
        {this._renderActionsheetView()}
        {this._renderModal()}
      </View>
    );
  }
  _renderModal = () => {
    return (
      <ScrollView
        style={styles.body}>

        <Button
          style={{ marginTop: 12 }}
          size='sm'
          onPress={() => {
            this.bottomModal1.open()
          }}
        >
          BottomModal 基础
        </Button>

        <BottomModal
          ref={(c) => { this.bottomModal1 = c }}
          title='选择品类'
          cancelable={true}
          leftCallback={() => {
            console.log('cancel')
          }}
          rightCallback={() => {
            console.log('confirm')
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              height: 300,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text>自定义内容</Text>
          </View>
        </BottomModal>

        <Button
          style={{ marginTop: 12 }}
          size='sm'
          onPress={() => {
            this.bottomModal2.open()
          }}
        >
          BottomModal 自定义标题与按钮样式
        </Button>

        <BottomModal
          ref={(c) => { this.bottomModal2 = c }}
          cancelable={true}
          title='请选择'
          titleStyle={{ color: '#eeeeee' }}
          leftLabelText='失败'
          leftLabelTextStyle={{ color:'#eeeeee' }}
          rightLabelText='成功'
          rightLabelTextStyle={{ color: '#eeeeee'}}
          rightCallback={() => {
            console.log('confirm')
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              height: 300,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text>自定义内容</Text>
          </View>
        </BottomModal>

        <Button
          style={{ marginTop: 12 }}
          size='sm'
          onPress={() => {
            this.bottomModalX.open()
          }}
        >
          BottomModal 自定义渲染区域
        </Button>

        <BottomModal
          ref={(c) => { this.bottomModalX = c }}
          cancelable={true}
          titleContainer={
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 12 }}>
              <Text style={{ fontSize: 16, marginRight: 5 }}>标题带图标</Text>
              <Icon type='question-circle' size={16}></Icon>
            </View>
          }
          rightLabel={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View>
                <Text style={{ color:'#eeeeee'}}>我可以</Text>
                <Text style={{ color: '#eeeeee', fontSize: 12 }}>没问题</Text>
              </View>
              <Text style={{ flex: 1, textAlign: 'right', marginRight: 15, marginTop: 0, fontSize: 25, color: '#eeeeee' }}>&times;</Text>
            </View>
          }
          rightCallback={() => {
            console.log('confirm')
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              height: 300,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text>自定义内容</Text>
          </View>
        </BottomModal>

        <Button
          style={{ marginTop: 12 }}
          size='sm'
          onPress={() => {
            this.slideModal.open()
          }}
        >
          SlideModal 任意自定义
        </Button>

        <SlideModal
          styles={{
            root: { bottom: 0, height: null }
          }}
          ref={(c) => { this.slideModal = c }}
          cancelable={true}>
          <View
            style={{
              width: window.width,
              backgroundColor: '#fff',
              paddingHorizontal: 15
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10
              }}
            >
              <Text style={{ fontSize: 18 }}>我是标题</Text>
              <TouchableOpacity
                onPress={() => {
                  this.slideModal.close()
                }}>
                <Text style={{ textAlign: 'right', marginTop: -2, fontSize: 30, color: '#aaa' }}>
                  &times;
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                alignItems: 'center',
                justifyContent: 'center',
                height: 300
              }}>
              <Text>自定义内容</Text>
            </View>
            <Button style={{ marginVertical: 10 }} type='primary'>我是按钮</Button>

            <View
              style={{ maxHeight: 30 }}>
              <View style={{ flex: 1 }}>
                <View style={{ height: 60 }}></View>
              </View>
            </View>
          </View>
        </SlideModal>

      </ScrollView>
    )
  }
  _renderActionsheetView = () => {

    return (
      <ScrollView
        style={styles.body}>
        <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='success' size='sm' onPress={() => {
          this._actionsheet.open()
        }} >弹起按钮</Button>
        <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='info' size='sm' onPress={() => {
          this._actionsheet.close()
        }} >隐藏按钮</Button>
        <View >

          <Actionsheet
            ref={(c) => { this._actionsheet = c; }}
            header='选择品类'
            data={[
              {
                label: '选项1',
                value: '1'
              },
              {
                label: '选项2',
                value: '2',
              },
              {
                label: '选项3',
                value: '3'
              },
            ]}
            cancelable={false}
            onPressConfirm={(item) => {
              console.log('confirm');
            }}
            onPressCancel={() => {
              console.log('cancel')
            }}>
          </Actionsheet>
        </View>

      </ScrollView>
    )
  }

  _renderButtonView = () => {

    return (
      <ScrollView
        style={styles.body}>

        <View >
          <View >
            <Button
              testID='btn1'
              style={[componentStyles.spacingH, componentStyles.spacingV]}
              type='default'
              size='sm'
              onPress={() => {
                this.setState({
                  count: this.state.count + 1
                })
              }}>
              默认 default
            </Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='sm' textColorInverse>首选项 primary</Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='success' size='sm'>成功 success</Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='info' size='sm'>一般信息 info</Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='warning' size='sm'>警告 warning</Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='danger' size='sm'>危险 danger</Button>
            <Button type='text' size='sm'>纯文本7777 text</Button>
          </View>
          {this.state.count ? <Text testID='text'>点击了按钮 {this.state.count}</Text> : null}

          <Text style={styles.header}>尺寸</Text>
          <View style={styles.panel}>
            <View style={componentStyles.row}>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='lg' textColorInverse>大按钮</Button>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='default' size='lg'>大按钮</Button>
            </View>
            <View style={componentStyles.row}>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='md' textColorInverse>默认尺寸</Button>
              <Button style={[componentStyles.spacingV]} type='default' size='md'>默认尺寸</Button>
            </View>

            <View style={componentStyles.row}>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='sm' textColorInverse>小按钮</Button>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='default' size='sm'>小按钮</Button>
            </View>

            <Button type='primary' size='md' textColorInverse>默认尺寸拉伸</Button>
          </View>
          <Text style={styles.header}>禁用/激活状态44444</Text>

          <View style={styles.panel}>
            <View style={componentStyles.row}>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='default' size='sm' disabled>默认 default</Button>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='sm' textColorInverse disabled>首选项 primary</Button>
              <Button style={[componentStyles.spacingH]} type='success' size='sm' disabled>成功 success</Button>
              <Button style={[componentStyles.spacingH]} type='text' size='sm' disabled>纯文本 text</Button>
            </View>
          </View>
          <Text style={styles.header}>自定义3333样式与内容</Text>

          <View style={styles.panel}>
            <View style={[componentStyles.row, { alignItems: 'center' }]}>
              <Button
                style={[componentStyles.spacingH, { borderRadius: 50 }]}
                type='primary'
                size='md'
                textColorInverse>
                圆角
            </Button>

              <Button
                style={[componentStyles.spacingH]}
                type='info'
                size='sm'>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', marginLeft: 5 }}>搜索111</Text>
                </View>
              </Button>

              <Button
                style={[{ borderColor: 'blue' }]}
                type='default'
                size='sm'>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: 'blue', marginLeft: 5 }}>新增</Text>
                </View>
              </Button>

            </View>
          </View>

        </View>
      </ScrollView>
    )
  }


}