import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';

import { AsyncStorage } from 'react-native'

// axios installed 11/24/10am  mc

const axios = require('axios');

import Constants from 'expo-constants';


export default function Submit(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title='Save Thought'
                color='#475e60'
                // backgroundColor='#DEF5F8'

                onPress={async () => {
                    const value = await AsyncStorage.getItem("userId").then(data => { return data });
                    console.log('submiont button line 30 value- >, ', value);
                    axios.post('https://unravel-api.herokuapp.com/thoughts', {
                        logName: props.logName,
                        situation: props.situation,
                        prerating: props.prerating,
                        wordSelect1: props.wordSelect1.toString(),
                        autoThought: props.autoThought,
                        changedThought: props.changedThought,
                        postRating: props.postRating,
                        wordSelect2: props.wordSelect2.toString(),
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