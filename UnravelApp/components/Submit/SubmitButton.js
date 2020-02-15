// npm install moment --save  1/24/20
// axios installed 11/24/10am  mc

import React from 'react';
import { AsyncStorage, StyleSheet, Button, SafeAreaView, Alert} from 'react-native';
import moment from 'moment';
import Utilities from '../../constants/Utilities';
import Styles from '../Submit/SubmitStyle';

var user = null;
var now = moment().format();
var savedDate = moment().format("MMMM Do YYYY, h:mm a");

console.log('date - - > ', savedDate);
const axios = require('axios');

// function that posts the thought to the mongo database by passing in the inputs via props
function saveThought (props, value) {
    axios.post('https://unravel-api.herokuapp.com/thoughts', {
        title: props.logName,
        situation: props.situation,
        preRating: props.prerating,
        wordSelect1: props.wordSelect1,
        autoThought: props.autoThought,
        changedThought: props.changedThought,
        postRating: props.postRating,
        wordSelect2: props.wordSelect2,
        created: savedDate,
        userId: value,
    }).then(function (response) {
        console.log('***************THOUGHT**************');
        console.log(response.config.data);
        console.log('***************THOUGHT**************');
        Alert.alert('Thought Saved!');
    }).catch(function (error) {
        console.log('error - - > ', error);
        Alert.alert('Something went wrong...', error);
    });
}

export default function Submit(props) {

    // gets the current user to associate the thought with
    var firebase = Utilities.firebase;
    user = Utilities.getCurrentUser();
    return (
        <SafeAreaView style={Styles.container}>
            
            <Button
                title='Save Thought'
                color='#475e60'

                onPress={async () => {
                    const userId = user.uid;
                    console.log('submit button userId associated with - >, ', userId);
                    saveThought(props, userId);
                }}
            />
        </SafeAreaView>
    );
}

