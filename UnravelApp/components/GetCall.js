import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, View, Icon } from 'native-base';
import Styles from '../components/Style/Style';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export default class GetCall extends Component {
    state = {
        thoughts: []
    }
    componentDidMount = async () => {
        const value = await AsyncStorage.getItem("userId").then(data => { return data });
        console.log('get call line 17 value- >, ', value);

        // TODO: Pass the mongo user id into the following API call
        // extrapolate the userId from react-navigation params -> this.props.navigation.state.params
        // this.props.navigation.getParam(userId, defaultValue)  

        axios.get(`https://unravel-api.herokuapp.com/user/thoughts/${value}`)
            .then(res => this.setState({ thoughts: res.data.thoughts }))
            .catch(err => console.log('err', err));

    };
    render() {
        return (
            <View>
                {this.state.thoughts.map((thought, i) => {
                    return (
                        // <Text key={i}>{thought.title}</Text>
                        <List key={i}>
                            <ListItem thumbnail>
                                {/* <Left> */}
                                    {/* <Thumbnail square source={{ uri: 'Image URL' }} /> */}
                                    {/* <Thumbnail square source={require('../assets/images/robot-dev.png')} />
                                </Left> */}
                                </ListItem>
                                <Button style={Styles.reviewButton} transparent onPress={() => Alert.alert(`${thought.wordSelect1}`)}>
                                <Thumbnail square source={require('../assets/images/robot-dev.png')} />
                                <Text style={Styles.reviewSubHead}>{thought.title}</Text>
                                </Button>
                                <ListItem style={Styles.date}>
                                <Text>{thought.created}</Text>
                                </ListItem>
                        </List>
                            );
                        })
                        }
            </View>
                    )
                }
}






// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';
// import { Container, Header, Content, Card, CardItem, Body, Button } from 'native-base';
// import Styles from '../components/Style/Style';
// import { AsyncStorage } from 'react-native';



// class GetCall extends Component {

// state = {
//     thoughts: []
// }
// componentDidMount = async () => {
//     const value = await AsyncStorage.getItem("userId").then(data => { return data });
//     console.log('get call line 17 value- >, ', value);

//     // TODO: Pass the mongo user id into the following API call
//     // extrapolate the userId from react-navigation params -> this.props.navigation.state.params
//     // this.props.navigation.getParam(userId, defaultValue)  

//     axios.get(`https://unravel-api.herokuapp.com/user/thoughts/${value}`)
//         .then(res => this.setState({ thoughts: res.data.thoughts }))
//         .catch(err => console.log('err', err));

//     // console.log('called thoughts : ', res);
// };

//     render() {
//         return (
//             <View>
//                 {/* <Text>{res.data.title}</Text> */}
// {this.state.thoughts.map(thought => {
//                     return (
//                         // TODO: Render thought cards here
//                         <Card style={Styles.reviewSubHead}>
//                             <CardItem style={Styles.reviewSubHead}>
//                                     <Text style={Styles.reviewSubHead}>{thought.title}</Text>

//                             </CardItem>
//                             <CardItem>
//                                 <Body>
//                                     <Text style={Styles.thoughtsList}>{thought.situation}</Text>
//                                     <Text style={Styles.thoughtsList}>{thought.preRating}</Text>
//                                     <Text style={Styles.thoughtsList}>{thought.wordSelect1}</Text>
//                                     <Text style={Styles.thoughtsList}>{thought.autoThought}</Text>
//                                     <Text style={Styles.thoughtsList}>{thought.changedThought}</Text>
//                                     <Text style={Styles.thoughtsList}>{thought.postRating}</Text>
//                                     <Text style={Styles.thoughtsList}>{thought.wordSelect2}</Text>

//                                 </Body>
//                             </CardItem>
                            // <CardItem footer>
                            //     <Text>{thought.created}</Text>
                            // </CardItem>
//                         </Card>
//     )
// })}

//             </View>
//         )
//     }
// }

// export default GetCall;


// import React, { Component } from 'react';
// import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
// export default class ListItemSelectedExample extends Component {
//     render() {
//         return (
//             <Container>
//                 <Header />
//                 <Content>
//                     <List>
//                         <ListItem selected>
//                             <Left>
//                                 <Text>Simon Mignolet</Text>
//                             </Left>
//                             <Right>
//                                 <Icon name="arrow-forward" />
//                             </Right>
//                         </ListItem>
//                         <ListItem>
//                             <Left>
//                                 <Text>Nathaniel Clyne</Text>
//                             </Left>
//                             <Right>
//                                 <Icon name="arrow-forward" />
//                             </Right>
//                         </ListItem>
//                         <ListItem>
//                             <Left>
//                                 <Text>Dejan Lovren</Text>
//                             </Left>
//                             <Right>
//                                 <Icon name="arrow-forward" />
//                             </Right>
//                         </ListItem>
//                     </List>
//                 </Content>
//             </Container>
//         );
//     }
// }