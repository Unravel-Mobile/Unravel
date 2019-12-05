import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { AsyncStorage } from 'react-native'



class ThoughtList extends Component {

    componentDidMount = async () => {
        const value = await AsyncStorage.getItem("_store userId").then(data => { return data });
        console.log('value- >, ', value);

            // TODO: Pass the mongo user id into the following API call
    // extrapolate the userId from react-navigation params -> this.props.navigation.state.params
    // this.props.navigation.getParam(userId, defaultValue)  
        
        axios.get(`https://unravel-api.herokuapp.com/thoughts/${value}`)
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