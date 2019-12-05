import * as WebBrowser from 'expo-web-browser';
import React, { Component, Container, Body, Content } from 'react';
import { AsyncStorage } from 'react-native'
import * as firebase from 'firebase';
import { MonoText } from '../components/StyledText';
import HomePage, { Home } from '../components/Home';
import axios from 'axios';


import { StackNavigator } from 'react-navigation';

var firebaseConfig = {
  apiKey: "AIzaSyCmW0cougaiZYPQ9lXvuJN6MEhxAgoFZKo",
  authDomain: "unravel-43092.firebaseapp.com",
  databaseURL: "https://unravel-43092.firebaseio.com",
  projectId: "unravel-43092",
  storageBucket: "unravel-43092.appspot.com",
  messagingSenderId: "87922632106",
  appId: "1:87922632106:web:5e30aa2c325380da2d77d3"
};



// take a look at  https://dev.to/amanhimself/what-is-asyncstorage-in-react-native-4af4

const STORAGE_KEY = '@save_name';





// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var userId;

export default class HomeScreen extends Component {

  state = {
    text: '',
    name:''
  }


  componentDidMount() {
    this._retrieveData();
    console.log('retrieving done!');
  }

  save = async (name) => {
    console.log('_store data - - > ', name);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
      console.log('_store data - - > ', name);

    } catch (error) {
      console.log('error - - > ',error);
    }
    finally{console.log('_store data - - > ', userId)}
  };

  _retrieveData = async () => {
    try {
      const idFroFb = await AsyncStorage.getItem(STORAGE_KEY);
      console.log('_retrieve - - > ', STORAGE_KEY);
      this.save(STORAGE_KEY);

      if (idFroFb !== null) {
        this.setState({ STORAGE_KEY })
        console.log('name - - > ', STORAGE_KEY);
        //  TODO: set the idFroFb as a param using react-navigation
        // this.props.navigation.setParams('idFroFb', { uid });
        // this.save(itemTwo);

      } else {
        await this.login()
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  login = async () => {
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
        console.log('uid - > ', uid);


        // TODO: Make an api call and POST the user unique id
        axios.post('https://unravel-api.herokuapp.com/signin', { userId: uid })
          .then(user => {

            var itemWithId = JSON.parse(user.config.data);
            console.log('inside axios call - - > ', itemWithId.userId);
            var itemTwo = itemWithId.userId;
            console.log('itemTwo - - > ', itemTwo);

            this.save(itemTwo);

            //  TODO: set the userId as a param using react-navigation
            // this.props.navigation.setParams({ userId: itemTwo });

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

// ipad user  LBHdf9aMZKYh4JnyTlQruygu93M2

// iphone user  KqoOHsn0anZTS0qchetnLHSnFsh1