import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, } from 'react-native';
import { Container, Text, Button, View } from 'native-base';
import Styles from './Style/Style';

var { width } = Dimensions.get("window");
var imageWidth = width;

export default HomePage = (props) => {

    return (
        <Container style={Styles.mainBody}>

                {/* Opening Logo for Unravel  */}
                <View style={Styles.logo}>
                    <Image source={require('../assets/images/unravel01.png')} style={Styles.logoImg} />
                    
                    {/* Title */}
                    <Text style={Styles.headerOne}>
                        UNRAVEL
                    </Text>

                    {/* Caption for title */}
                    <Text style={Styles.headerTwo}>
                        Break down thoughts. Find clarity.
                    </Text>

                    {/* Button for creating thought log */}
                    {/* - navigates to first log page */}
                    <Button block bordered dark onPress={() => props.navigate(props.log)}>
                        <Text style={Styles.text}>Unravel a thought</Text>
                    </Button>

                    {/* Button for reviewing logs */}
                    {/* - navigates to review page */}
                    <Button block bordered dark onPress={() => props.navigate(props.review)}>
                        <Text style={Styles.text}>Review thought entries</Text>
                    </Button>
                    
                    {/* Button for learning more about thought logs */}
                    {/* - navigates to learn page */}
                    <Button block bordered dark onPress={() => props.navigate(props.learn)}>
                        <Text style={Styles.text}>Learn about Unravel</Text>
                    </Button>
                </View>

        </Container>
    );
};