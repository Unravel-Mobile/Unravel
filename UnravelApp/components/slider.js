// 'use strict';

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
var Slider = require('react-native-slider');


export default class slider extends Component {
    getInitialState() {
        return {
            value: 0.2
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={this.state.value}
                    onValueChange={(value) => this.setState({ value })} />
                <Text>Value: {this.state.value}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        // justifyContent: 'center',
    },
});