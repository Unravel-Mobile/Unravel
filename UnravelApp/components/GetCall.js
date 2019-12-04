import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ThoughtList extends Component {

    state = {
        results: ''
    };

    componentDidMount = () => {
        // TODO: Pass the mongo user id into the following API call
        // extrapolate the userId from react-navigation params -> this.props.navigation.state.params
        // this.props.navigation.getParam(userId, defaultValue)  

        const id = 'replace with id'
        axios.get(`https://unravel-api.herokuapp.com/thoughts/${id}`)
        .then(res => console.log('RES.DATA - -> ', (res.data)))
                    .catch(err => console.log('err', err));
    };

    render() {
        return (
            <View>
                {/* <Text>{res.data.title}</Text> */}
            </View>
        )
    }
}

export default ThoughtList;