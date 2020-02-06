// npm install moment --save  1/24/20
// axios installed 11/24/10am  mc

import React from 'react';
import { AsyncStorage, StyleSheet, Button, SafeAreaView, Alert} from 'react-native';
import moment from 'moment';
import Constants from 'expo-constants';
import Utilities from '../../constants/Utilities';

var user = null;
var now = moment().format();
var savedDate = moment().format("MMMM Do YYYY, h:mm a");

console.log('date - - > ', savedDate);
const axios = require('axios');

function postLog (props, value) {
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
        Alert.alert('Thought Saved!')
    }).catch(function (error) {
        console.log('error - - > ', error);
    });
}

export default function Submit(props) {
    var firebase = Utilities.firebase;
    user = Utilities.getCurrentUser();
    return (
        <SafeAreaView style={styles.container}>
            
            <Button
                title='Save Thought'
                color='#475e60'

                onPress={async () => {
                    const userId = user.uid;
                    var value = await AsyncStorage.getItem(userId);     console.log("HAHA2", value);
                    if(value) {
                        console.log('submit button line 30 value- >, ', value);
                        postLog(props, value);
                    }
                    //const value = await AsyncStorage.getItem("userId").then(data => { return data });
                    // const value = AsyncStorage.getItem(userId);
                    // var test = null;
                    // var allKeys = await AsyncStorage.getAllKeys();
                    // allKeys.forEach(async function(key){
                    //     await AsyncStorage.getItem(key).then(function(value) { 
                    //         if (userId === value) {
                    //             console.log("HAHAHAHA", key, ":", value);
                    //     //             // console.log('submit button line 30 value- >, ', value);
                    //     //             postLog(props, value);
                    //         }
                    //     });
                    // });
                }}
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