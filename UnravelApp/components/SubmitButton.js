import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';

// axios installed 11/24/10am  mc

const axios = require('axios');

import Constants from 'expo-constants';

function Separator() {
    return <View style={styles.separator} />;
}

export default function Submit() {
    return (
        <SafeAreaView style={styles.container}>
            <Separator />
            <Button
                title='Save Thought'
                color='red'

                onPress={() => axios.post('https://unravel-api.herokuapp.com/thoughts', {
                    title: 'MONDAY TEST 6:49pm',
                    situation: 'test 2 after db changes',
                    prerating: 4,
                    wordSelect1: 'posting from ipad again',
                    autoThought: 'still a little scary',
                    changedThought: 'check heroku logs for a new log',
                    postRating: 8,
                    wordSelect2: 'did it show up?',
                })
                    .then(function (response) {
                        console.log(response.config.data);
                        Alert.alert('Thought Saved!')
                    })
                    .catch(function (error) {
                        console.log('error - - > ', error);
                    })
                }

            />

            <Separator />
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
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

// console.log('BUTTON PRESENT');

