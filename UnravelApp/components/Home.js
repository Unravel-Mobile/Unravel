import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, } from 'react-native';
import { Container, Content, Text, Button, View } from 'native-base';
import Styles from './Style/Style';

var { width } = Dimensions.get("window");
var imageWidth = width;

export default HomePage = (props) => {

    return (
        <Container style={Styles.mainBody}>
            <Content>
                <View style={Styles.logo}>
                    <Image source={require('../assets/images/unravel01.png')} style={Styles.logoImg} />
                    <Text style={Styles.headerOne}>
                        UNRAVEL
                </Text>
                    <Text style={Styles.headerTwo}>
                        Break down thoughts. Find clarity.
                </Text>
                    <Button style={Styles.buttons} bordered dark onPress={() => props.navigate(props.log)}>
                        <Text style={[Styles.buttons, Styles.text]}>Unravel a thought</Text>
                    </Button>
                    <Button style={Styles.buttons} bordered dark onPress={() => props.navigate(props.review)}>
                        <Text style={[Styles.buttons, Styles.text]}>Review thought entries</Text>
                    </Button>
                    <Button style={Styles.buttons} bordered dark onPress={() => props.navigate(props.learn)}>
                        <Text style={[Styles.buttons, Styles.text]}>Learn about Unravel</Text>
                    </Button>
                </View>

            </Content>

        </Container>
    );
};