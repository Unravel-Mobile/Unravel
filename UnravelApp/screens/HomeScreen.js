import * as WebBrowser from 'expo-web-browser';
import React, { Component, } from 'react';
import { AsyncStorage } from 'react-native'
import * as firebase from 'firebase';
// import { MonoText } from '../components/StyledText';
import HomePage, { Home } from '../components/HomeFolder/Home';
import axios from 'axios';


import { StackNavigator } from 'react-navigation';
// import { DatePicker } from 'native-base';

var firebaseConfig = {
  apiKey: "AIzaSyCmW0cougaiZYPQ9lXvuJN6MEhxAgoFZKo",
  authDomain: "unravel-43092.firebaseapp.com",
  databaseURL: "https://unravel-43092.firebaseio.com",
  projectId: "unravel-43092",
  storageBucket: "unravel-43092.appspot.com",
  messagingSenderId: "87922632106",
  appId: "1:87922632106:web:5e30aa2c325380da2d77d3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var userId;

export default class HomeScreen extends Component {


  componentDidMount() {
    this._retrieveData();
    console.log('retrieving done!');
  };

  _storeData = async (userId) => {
    try {
      await AsyncStorage.setItem('userId', userId);
      console.log('_store data - - > ', userId);

    } catch (error) {
      console.log(error);
    }
  };

  _retrieveData = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      console.log('homescreen _retrieve - - > ', userId);

      if (userId) {
        console.log('We have data!!');
      } else {
        await this.login()
      }
    } catch (error) {
      console.log(error);
    }
  };

  login = async () => {
    await firebase.auth().signInAnonymously().catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(error);
    });

    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // ...
        // console.log('HomeScreen user line36 ', user)
        console.log('homescreen line 79 uid - > ', uid);


        // TODO: Make an api call and POST the user unique id
        axios.post('https://unravel-api.herokuapp.com/signin', { userId: uid })
          .then((user) => {
            console.log('USER - > ', user.data);
            this._storeData(user.data._id);
            //  TODO: set the userId as a param using react-navigation
            // this.props.navigation.setParams({ userId: itemTwo });
            // console.log('userId after this props -- > ', itemTwo);
          })
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }

  render() {
    return (
      // Links here ties with Links key in MainTabNavitor.js line 50
      <HomePage
        log='Log1'
        learn='Learn'
        review='Review'
        navigate={this.props.navigation.navigate} />
    );
  }
};