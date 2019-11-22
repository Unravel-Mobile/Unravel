// 'use strict';

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';


var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});

// lowercase is the name we are exporting
export default class slider extends Component {
    state={
        value: 5.0
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={this.state.value}
                    onValueChange={(value) => this.setState({ value })}
                    minimumValue={0}
                    maximumValue={10}
                    step={0.5}
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        );
    }
};
