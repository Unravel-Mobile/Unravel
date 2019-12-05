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

export default function Submit(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Separator />
            <Button
                title='Save Thought'
                color='red'

                onPress={() => axios.post('https://unravel-api.herokuapp.com/thoughts', {
                    logName : props.logName,
                    situation : props.situation,
                    prerating : props.prerating,
                    wordSelect1 : props.wordSelect1,
                    autoThought : props.autoThought,
                    changedThought : props.changedThought,
                    postRating : props.postRating,
                    wordSelect2 : props.wordSelect2,
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

