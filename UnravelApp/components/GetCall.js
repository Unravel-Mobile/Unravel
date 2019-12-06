import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import Styles from '../components/Style/Style';
import { AsyncStorage } from 'react-native';



class GetCall extends Component {

    state = {
        thoughts: []
    }
    componentDidMount = async () => {
        const value = await AsyncStorage.getItem("userId").then(data => { return data });
        console.log('value- >, ', value);

        // TODO: Pass the mongo user id into the following API call
        // extrapolate the userId from react-navigation params -> this.props.navigation.state.params
        // this.props.navigation.getParam(userId, defaultValue)  

        axios.get(`https://unravel-api.herokuapp.com/user/thoughts/${value}`)
            .then(res => {
                console.log("RES FROM AXIOS GET THOUGHTS:", res)
                this.setState({ thoughts: res.data.thoughts })
            })
            .catch(err => console.log('err', err));

        console.log('called thoughts : ',thoughts);
    };

    render() {
        return (
            <View>
                {/* <Text>{res.data.title}</Text> */}
                {this.state.thoughts.map(thought => {
                    // console.log('rendered thoughts : ', thoughts);
                    return (
                        // TODO: Render thought cards here
                        <Card style={Styles.reviewSubHead}>
                            <CardItem style={Styles.reviewSubHead}>
                                <Text style={Styles.reviewSubHead}>{thought.title}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text style= {Styles.thoughtsList}>{thought.situation}</Text>
                                    <Text style= {Styles.thoughtsList}>{thought.preRating}</Text>
                                    <Text style= {Styles.thoughtsList}>{thought.wordSelect1}</Text>
                                    <Text style= {Styles.thoughtsList}>{thought.autoThought}</Text>
                                    <Text style= {Styles.thoughtsList}>{thought.changedThought}</Text>
                                    <Text style= {Styles.thoughtsList}>{thought.postRating}</Text>
                                    <Text style= {Styles.thoughtsList}>{thought.wordSelect2}</Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>GeekyAnts</Text>
                            </CardItem>
                        </Card>
                    )
                })}

            </View>
        )
    }
}

export default GetCall;

{/* <Card><CardItem>
    <Text>{thought.title}</Text>
    <Text>{thought.situation}</Text>
</CardItem>
</Card> */}


// render() {
//     return (
//         <View>
//             {/* <Text>{res.data.title}</Text> */}
//             {this.state.thoughts.map(thought => {
//                 console.log(thought);
//                 <Container>
//                     <Header />
//                     <Content>
//                         <Card>
//                             <CardItem header>
//                                 <Text>NativeBase</Text>
//                             </CardItem>
//                             <CardItem>
//                                 <Body>
//                                     <Text key={i + thoughts}>
//                                     {thought.title}
//                                     </Text>
//                                 </Body>
//                             </CardItem>
//                             <CardItem footer>
//                                 <Text>GeekyAnts</Text>
//                             </CardItem>
//                         </Card>
//                     </Content>
//                 </Container>
//                 // key={i + thoughts.col1}
//                 // return (
//                 //     // TODO: Render thought cards here
//                 //     <Text>{thought.title}</Text>
//                 // )
//             })}

//         </View>
//     )
// }



// import React, { Component } from 'react';
// import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
// export default class CardHeaderFooterExample extends Component {
//     render() {
//         return (
//             <Container>
//                 <Header />
//                 <Content>
//                     <Card>
//                         <CardItem header>
//                             <Text>NativeBase</Text>
//                         </CardItem>
//                         <CardItem>
//                             <Body>
//                                 <Text>
//                                 //Your text here
//                                 </Text>
//                             </Body>
//                         </CardItem>
//                         <CardItem footer>
//                             <Text>GeekyAnts</Text>
//                         </CardItem>
//                     </Card>
//                 </Content>
//             </Container>
//         );
//     }
// }