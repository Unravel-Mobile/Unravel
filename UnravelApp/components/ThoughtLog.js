import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
// import { Container, Content, Text, Button, View } from 'native-base';
import { Card, CardItem, Header, Left, Right, Button, Icon, Text, Container, Content, View } from 'native-base';

import Styles from './Style/Style';

var { width } = Dimensions.get("window");
var imageWidth = width;

export default class ThoughtLog extends Component {
    render() {
        return (
            <Container>
                <Header style={Styles.headNav}>
                    <Left>
                        <Button transparent onPress={() => props.navigate(props.previous)}>
                            <Icon style={Styles.arrows} name='arrow-back' />
                            <Text style={Styles.arrows}>Back</Text>
                        </Button>
                    </Left>
                    <Text style={Styles.headTitle}>Thought Log</Text>

                    <Right>
                        <Button transparent onPress={() => props.navigate(props.next)}>
                            <Text style={Styles.arrows}>Done</Text>
                            {/* <Icon style={Styles.arrows} name='arrow-forward' /> */}
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={Styles.headNav}>
                        <Image source={require('../assets/images/thinker.jpeg')} style={Styles.thoughtImg} />
                    </View>
                    <Card style={Styles.backOfCard}>
                        <Text style={Styles.text}>Situation from Title</Text>
                        {/* <Text style={Styles.questionTxt}> {questions[index].q} </Text> */}
                        <CardItem>
                            <Text style={Styles.thoughtTxt}>The thought from DB will go here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </CardItem>
                    </Card>
                </Content>

            </Container>

        )
    }
};