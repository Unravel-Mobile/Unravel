import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCmW0cougaiZYPQ9lXvuJN6MEhxAgoFZKo",
    authDomain: "unravel-43092.firebaseapp.com",
    databaseURL: "https://unravel-43092.firebaseio.com",
    projectId: "unravel-43092",
    storageBucket: "unravel-43092.appspot.com",
    messagingSenderId: "87922632106",
    appId: "1:87922632106:web:5e30aa2c325380da2d77d3"
};
firebase.initializeApp(firebaseConfig);

var user = firebase.auth().currentUser;

export default {
    firebase: firebase,
    setCurrentUser : function(user){
        this.user = user;
    },
    getCurrentUser : function(){
        return this.user;
    },
};