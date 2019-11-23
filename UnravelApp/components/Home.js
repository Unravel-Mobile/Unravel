import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

// const styles = StyleSheet.create({
//     buttons: {
//         width: 500,
//         // height: 50,
//         marginBottom: 25,
//     },
//     text: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         // marginBottom: 50,
//         // padding: 5,
//         // alignItems: "center"
//     },
// });


export default HomePage = (props) => {

    navigate = (screen) => {
        this.props.navigation.navigate(screen)
    }

    return (
        <Container style={{ backgroundColor: '#B2EBF2', }}>
            <Body >
                <Image source={require('../assets/images/unravel01.png')} />
                <Text style={{ fontFamily: 'Helvetica Neue', fontSize: 100, marginBottom: 10, }}>
                    UNRAVEL
                </Text>
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 15, }}>
                    Break down thoughts. Find clarity.
                </Text>
                <Button style={{ marginBottom: 20, height: 50,}} bordered dark onPress={() => props.navigate(props.Links)}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', alignItems:'center', }}>Unravel a thought</Text>
                </Button>
                <Button style={{ marginBottom: 20, height: 50,}} bordered dark onPress={() => props.navigate(props.ReviewScreen)}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', alignItems:'center', }}>Review thought entries</Text>
                </Button>
                <Button style={{ marginBottom: 20, height: 50,}} bordered dark onPress={() => props.navigate(props.LearnScreen)}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', alignItems:'center', }}>Learn about ravel</Text>
                </Button>
            </Body>
        </Container>
    );
};