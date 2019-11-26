import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Text, Button, Body, View } from 'native-base';

var { width } = Dimensions.get("window");
var imageWidth = width;

const styles = StyleSheet.create({
    buttons: {
        width: 500,
        // height: 50,
        // marginBottom: 25,
        alignItems: "center"

    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
        // marginBottom: 50,
        // padding: 5,
    }
});

export default HomePage = (props) => {

    return (
        <Container style={{ backgroundColor: '#B2EBF2', }}>
            <View style={{ flex:1, width: 75, alignSelf: 'center',}}>
                <Image resizeMode='contain' source={require('../assets/images/unravel01.png')} style={{ width: '100%' }} />
            </View>
            <Body >
                <Text style={{ fontFamily: 'Helvetica Neue', fontSize: 50, marginBottom: 10, }}>
                    UNRAVEL
                </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, }}>
                    Break down thoughts. Find clarity.
                </Text>
                <Button style={{ marginBottom: 20, height: 50 }} bordered dark onPress={() => props.navigate(props.log)}>
                    <Text style={[styles.buttons, styles.text]}>Unravel a thought</Text>
                </Button>
                <Button style={{ marginBottom: 20, height: 50, }} bordered dark onPress={() => props.navigate(props.review)}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', alignItems: 'center' }}>Review thought entries</Text>
                </Button>
                <Button style={{ marginBottom: 20, height: 50, }} bordered dark onPress={() => props.navigate(props.learn)}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', alignItems: 'center' }}>Learn about ravel</Text>
                </Button>
            </Body>
        </Container>
    );
};