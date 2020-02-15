import * as WebBrowser from 'expo-web-browser';
import React, { Component, } from 'react';
import { AsyncStorage } from 'react-native'
import HomePage, { Home } from '../components/HomeFolder/Home';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

// firebase information imported from constants folder
import Utilities from '../constants/Utilities';

var firebase = Utilities.firebase;

export default class HomeScreen extends Component {

  componentDidMount() {
    // this._retrieveData();
    this.login();
    console.log('Logged in!');
  };

  // method to set new user and save to async storage
  // async storage schema: {key => deviceId, value => dbId}
  _storeData = async (_id, userId) => {
    try {
      await AsyncStorage.setItem(userId, _id);
      console.log('_store data - - > ', userId, ' : ', _id);
    } catch (error) {
      console.log(error);
    }
  };

  // method to check if user exists in async storage
  // async storage schema: {key => deviceId, value => dbId}
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
        var uid = user.uid; // device id
        console.log('homescreen line 95 uid - > ', uid);

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
      }
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