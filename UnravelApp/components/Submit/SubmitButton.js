// npm install moment --save  1/24/20
// axios installed 11/24/10am  mc

import React from 'react';
import {
    StyleSheet,
    Button,
    SafeAreaView,
    Alert,
} from 'react-native';

import moment from 'moment';

var now = moment().format();

var savedDate = moment().format("MMMM Do YYYY, h:mm a");

console.log('date - - > ', savedDate);

import { AsyncStorage } from 'react-native';

const axios = require('axios');

import Constants from 'expo-constants';

export default function Submit(props) {
    
    return (
        <SafeAreaView style={styles.container}>
            
            <Button
                title='Save Thought'
                color='#475e60'

                onPress={async () => {
                    const value = await AsyncStorage.getItem("userId").then(data => { return data });
                    console.log('submit button line 37 value- >, ', value);
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
                    })
                        .then(function (response) {
                            console.log('***************THOUGHT**************');
                            console.log(response.config.data);
                            console.log('***************THOUGHT**************');
                            Alert.alert('Thought Saved!')
                        })
                        .catch(function (error) {
                            console.log('error - - > ', error);
                        });
                }
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    }
});