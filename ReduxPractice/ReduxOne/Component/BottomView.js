import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Styles from '../../../CommonPart/Style/Styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class BottomView extends Component {
    constructor(props) {
        super(props);

    }
   
    componentDidMount() {
        // this.runAmimationThree();
    }
 

    render() {
        //tip:4 和之前一样，根据store中的变化修改对应值
        const {backColor}= this.props;
        return (
            <View style={[Styles.container, { marginTop: 40 }]}>
                <View style={{ marginLeft:100,width: 200, height: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'white' }}>
                    <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor:backColor }}></View>
                    <Text>接受的颜色值:{backColor}</Text>
                </View>
            </View>

        );
    }
 
}
const mapStateToProps = (state) => {
    const {changeColorReducer:{backColor}} = state;
    return {
      backColor: backColor
    }
 }

//  const mapStateToProps = (state) => ({
//     backColor: state.backColor,
// });

 export default connect(mapStateToProps,null)(BottomView);