import React, { Component } from 'react';
import { Text } from 'native-base';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import Utilities from '../../constants/Utilities';

var user = null;

export default class CallToDb extends Component {
    state = {
        thoughts: []
    }

    componentDidMount = async () => {
        var firebase = Utilities.firebase;
        user = Utilities.getCurrentUser();
        const userId = user.uid;
        console.log('GetCall userId value- >, ', userId);
        // TODO: Have a refeshing function so the user can see the logs w.o having to reopen the app
        axios.get(`https://unravel-api.herokuapp.com/user/thoughts/${userId}`)
            .then(res => this.setState({ thoughts: res.data }))
            .catch(err => console.log('err GetCall thoughts of users -- >', err));
    };

    render() {
        return (
            <Text></Text>
        )
    }
}