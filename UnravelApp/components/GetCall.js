import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ThoughtList extends Component {
    componentDidMount = () => {
        axios.get('https://unravel-api.herokuapp.com/thoughts')
            .then(res => console.log('RES.DATA - -> ', (res.data)))
            .catch(err => console.log('err', err));
    }

    render() {
        return (
            <View>
                <Text>ThoughtList</Text>
            </View>
        )
    }
}

export default ThoughtList;

console.log('GetCall');