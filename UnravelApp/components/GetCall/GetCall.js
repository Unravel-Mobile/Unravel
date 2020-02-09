import React, { Component } from 'react';
import { Alert } from 'react-native';
import { List, ListItem, Thumbnail, Text, Button, View, } from 'native-base';
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

        // const value = await AsyncStorage.getItem(userId).then(data => { return data });
        // console.log("data? -> ", data);
        console.log('get call line 25 value- >, ', userId);

        // TODO: Pass the mongo user id into the following API call
        // extrapolate the userId from react-navigation params -> this.props.navigation.state.params
        // this.props.navigation.getParam(userId, defaultValue)  

        axios.get(`https://unravel-api.herokuapp.com/user/thoughts/${userId}`)
            .then(res => this.setState({ thoughts: res.data }))
            .catch(err => console.log('err line 23 - - >', err));
    };

    render() {
        var userThoughts =[];
        if(Array.isArray(this.state.thoughts) && this.state.thoughts.length){
            userThoughts = this.state.thoughts;
        }
        return (
            <View>
                {userThoughts.map((thought, i) => {
                    return (
                        <List key={i}>
                            <ListItem thumbnail>
                                {/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
                            </ListItem>
                            <Button style={Styles.reviewButton} transparent onPress={() => Alert.alert(`${thought.wordSelect1}`)}>
                                <Thumbnail square source={require('../../assets/images/unravel01.png')} />
                                <Text style={Styles.reviewSubHead}>{thought.title}</Text>
                            </Button>
                            <ListItem style={Styles.date}>
                                <Text>{thought.created}</Text>
                            </ListItem>
                            <ListItem><Text style={Styles.thoughtsList}>Situation:{'\n'}{thought.situation}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}>Feelings at the time:{'\n'}{thought.autoThought}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}>Rating:{'\n'}{thought.preRating}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}>Words: {'\n'}{thought.wordSelect1}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}>Feelings afterwards:{'\n'}{thought.changedThought}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}>Rating:{'\n'}{thought.postRating}</Text></ListItem>
                            <ListItem><Text style={Styles.thoughtsList}>Words: {'\n'}{thought.wordSelect2}</Text></ListItem>
                        </List>
                    );
                })
                }
            </View>
        )
    }
}
