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
    } catch (error) {
      console.log(error);
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
        console.log('homescreen uid - > ', uid);

        // checks if the user is in firebase using the uid, then checks if that user is in the mongodb.
        // if not, creates a new user, signs them in and associates it with the uid.
        this._userExistsInDataBase(uid).then((userExistsInDataBase) => {
          if(!userExistsInDataBase) {
            axios.post('https://unravel-api.herokuapp.com/signin', { userId: uid })
              .then((user) => {
                console.log('USER - > ', user.data);
                this._storeData(user.data._id, uid);
              })
          }
        })
        // sets the current user with firebase in order to retrieve current user later
        Utilities.setCurrentUser(firebase.auth().currentUser);
      } else {
        // User is not signed in.
        console.log("User is not signed in.");
      }
    });
  }

  render() {
    return (
      // Links here ties with Links key in MainTabNavitor.js
      <HomePage
        log='Log1'
        learn='Learn'
        review='Review'
        navigate={this.props.navigation.navigate} />
    );
  }
};