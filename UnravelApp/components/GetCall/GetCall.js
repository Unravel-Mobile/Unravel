import React, { Component } from 'react';
import { Alert } from 'react-native';
import { List, ListItem, Thumbnail, Text, Button, View, Header } from 'native-base';
import Styles from '../GetCall/GetCallStyle';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import Utilities from '../../constants/Utilities';

var user = null;


export default class GetCall extends Component {
    state = {
        thoughts: []
    }

    componentDidMount = async () => {
        var firebase = Utilities.firebase;
        user = Utilities.getCurrentUser();
        const userId = user.uid;
        console.log('GetCall userId value- >, ', userId);

        axios.get(`https://unravel-api.herokuapp.com/user/thoughts/${userId}`)
            .then(res => this.setState({ thoughts: res.data }))
            .catch(err => console.log('err GetCall thoughts of users -- >', err));
    };

    render() {

        var userThoughts = [];
        // filling the userThoughts with the user's thoughts if they exist
        if (Array.isArray(this.state.thoughts) && this.state.thoughts.length) {
            userThoughts = this.state.thoughts;
        }
        return (
            <View>
                {userThoughts.map((thought, i) => {
                    return (
                        <List key={i}>
                            <ListItem avatar>
                                {/* <Thumbnail square source={require('../../assets/images/unravel01.png')} /> */}
                                <Button style={Styles.reviewButton} transparent onPress={() => Alert.alert(`${'picture and thoughts on different screen coming soon'}`)}>
                                    {/* <Thumbnail square source={require('../../assets/images/unravel01.png')} /> */}
                                    <Text style={Styles.reviewSubHead}>{thought.title}</Text>
                                </Button>
                            </ListItem>

                            <ListItem style={Styles.date}>
                                <Text>{thought.created}</Text>
                            </ListItem>

                            <ListItem><Text style={Styles.thoughtsList}><Text style={Styles.description}>Situation:</Text>{'\n'}{thought.situation}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}><Text style={Styles.description}>Feelings at the time:</Text>{'\n'}{thought.autoThought}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}><Text style={Styles.description}>Rating:</Text>{'\n'}{thought.preRating}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}><Text style={Styles.description}>Words:</Text>{'\n'}{thought.wordSelect1}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}><Text style={Styles.description}>Feelings afterwards:</Text>{'\n'}{thought.changedThought}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}><Text style={Styles.description}>Rating:</Text>{'\n'}{thought.postRating}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}><Text style={Styles.description}>Words:</Text>{'\n'}{thought.wordSelect2}</Text></ListItem>

                        </List>
                    );
                })
                }
            </View>
        )
    }
}
