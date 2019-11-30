import * as WebBrowser from 'expo-web-browser';
import React, { Component, Container, Body, Content } from 'react';
import * as firebase from 'firebase';
import { MonoText } from '../components/StyledText';
import HomePage, { Home } from '../components/Home';


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

export default class HomeScreen extends Component {

  async componentDidMount() {
    await firebase.auth().signInAnonymously().catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(error);
    });

    await firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        // ...
        // console.log('HomeScreen user line36 ', user)
        console.log('userId - > ', userId);


        // TODO: Make an api call and POST the user unique id
        axios.post('https://unravel-api.herokuapp.com/signin', { userId: uid })
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
    console.log('HomeScreen userId -- > ', userId)
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