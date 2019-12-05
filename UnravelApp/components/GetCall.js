import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { AsyncStorage } from 'react-native'



class ThoughtList extends Component {

    state = {
        thoughts: []
    }
    componentDidMount = async () => {
        const value = await AsyncStorage.getItem("userId").then(data => { return data });
        console.log('value- >, ', value);

            // TODO: Pass the mongo user id into the following API call
    // extrapolate the userId from react-navigation params -> this.props.navigation.state.params
    // this.props.navigation.getParam(userId, defaultValue)  
        
        axios.get(`https://unravel-api.herokuapp.com/user/thoughts/${value}`)
            .then(res => this.setState({ thoughts: res.data.thoughts }))
            .catch(err => console.log('err', err));
    };


    render() {
        return (
            <View>
                {/* <Text>{res.data.title}</Text> */}
                {this.state.thoughts.map(thought => {
                    console.log(thought)
                    return (
                        // TODO: Render thought cards here
                        <Text>{thought.title}</Text>
                    )
                })}
                
            </View>
        )
    }
}

export default ThoughtList;