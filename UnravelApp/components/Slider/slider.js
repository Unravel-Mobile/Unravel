// 'use strict';

import React, { Component } from 'react'
import { Text, View, } from 'react-native';
import Slider from 'react-native-slider';
import Styles from '../Slider/SliderStyle';


// var styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginLeft: 10,
//         marginRight: 10,
//         alignItems: 'stretch',
//         justifyContent: 'center'
//     }
// });

// lowercase is the name we are exporting
export default class slider extends Component {


    render() {
        return (
            <View style={Styles.container}>
                <Slider
                    value= {this.props.value}
                    onValueChange={this.props.onValueChange}
                    minimumValue={0}
                    maximumValue={10}
                    step={0.5}
                    minimumTrackTintColor={'lightgray'}
                    maximumTrackTintColor={'darkgray'}
                    thumbTintColor={'#B2EBF2'}
                    
                />
                <Text>Value: {this.props.value} </Text>
            </View>
        );
    }
};
