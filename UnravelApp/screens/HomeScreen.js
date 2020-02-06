import * as WebBrowser from 'expo-web-browser';
import React, { Component, } from 'react';
import { AsyncStorage } from 'react-native'
// import * as firebase from 'firebase';
// import { MonoText } from '../components/StyledText';
import HomePage, { Home } from '../components/HomeFolder/Home';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';
// import { DatePicker } from 'native-base';
import Utilities from '../constants/Utilities';

var firebase = Utilities.firebase;

// var firebaseConfig = {
//   apiKey: "AIzaSyCmW0cougaiZYPQ9lXvuJN6MEhxAgoFZKo",
//   authDomain: "unravel-43092.firebaseapp.com",
//   databaseURL: "https://unravel-43092.firebaseio.com",
//   projectId: "unravel-43092",
//   storageBucket: "unravel-43092.appspot.com",
//   messagingSenderId: "87922632106",
//   appId: "1:87922632106:web:5e30aa2c325380da2d77d3"
// };


// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var userId;

export default class HomeScreen extends Component {

  componentDidMount() {
    // this._retrieveData();
    this.login();
    console.log('Logged in!');
  };

  _storeData = async (_id, userId) => {
    try {
      await AsyncStorage.setItem(userId, _id);
      console.log('_store data - - > ', userId, ' : ', _id);

    } catch (error) {
      console.log(error);
    }
  };

  // _retrieveData = async () => {
  //   try {
  //     // Get userId from storage with key 'userId'
  //     const userId = await AsyncStorage.getItem('userId');
  //     // const userId is always null because no key is 'userId'
  //     console.log('homescreen _retrieve - - > ', userId);

  //     // this if never goes in because userId is always null
  //     if (userId) {
  //       // ideally login the user because user exists
  //       console.log('We have data!!');
  //     } else {
  //       // ideally create a new user becase user doesn't exist
  //       // instead, we are logging in the user that doesn't exist
  //       await this.login()
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // method to check if user exists in async storage
  // async storage schema: {key => deviceId, value => fireBaseId}
  _userExistsInDataBase = async(uid) => {
    try {
      var user = await AsyncStorage.getItem(uid);
      if (user) return true;
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  login() {
    firebase.auth().signInAnonymously().catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(error);
    });

    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        console.log('homescreen line 94 uid - > ', uid);

        this._userExistsInDataBase(uid).then((userExistsInDataBase) => {
          if(!userExistsInDataBase) {
            axios.post('https://unravel-api.herokuapp.com/signin', { userId: uid })
              .then((user) => {
                console.log('USER - > ', user.data);
                this._storeData(user.data._id, uid);
                // TODO: set the userId as a param using react-navigation
                // this.props.navigation.setParams({ userId: itemTwo });
                // console.log('userId after this props -- > ', itemTwo);
              })
          }
        })
        Utilities.setCurrentUser(firebase.auth().currentUser);
      } else {
        // User is not signed in.
        console.log("User is not signed in.");
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