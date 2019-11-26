import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Text, Button, View } from 'native-base';

var { width } = Dimensions.get("window");
var imageWidth = width;

const styles = StyleSheet.create({
    buttons: {
        width: '100%',
        marginBottom: 20,
        alignItems: "center"

    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
    }
});

export default HomePage = (props) => {

    return (
        <Container style={{ backgroundColor: '#B2EBF2', }}>
            <Content>
                <View style={{ flex: 1, width: '85%', alignSelf: 'center',}}>
                    <Image resizeMode='contain' source={require('../assets/images/unravel01.png')} style={{ width: '100%', height: '40%',}} />
                    <Text style={{ fontFamily: 'Helvetica Neue', fontSize: "50%", textAlign: 'center', marginBottom: 10, }}>
                        UNRAVEL
                </Text>
                    <Text style={{ fontSize: "20em", fontWeight: 'bold', textAlign:'center', marginBottom: 10, }}>
                        Break down thoughts. Find clarity.
                </Text>
                    <Button style={styles.buttons} bordered dark onPress={() => props.navigate(props.log)}>
                        <Text style={[styles.buttons, styles.text]}>Unravel a thought</Text>
                    </Button>
                    <Button style={{ marginBottom: 20, height: 50, }} bordered dark onPress={() => props.navigate(props.review)}>
                        <Text style={[styles.buttons, styles.text]}>Review thought entries</Text>
                    </Button>
                    <Button style={{ marginBottom: 20, height: 50, }} bordered dark onPress={() => props.navigate(props.learn)}>
                        <Text style={[styles.buttons, styles.text]}>Learn about Unravel</Text>
                    </Button>
                </View>

            </Content>

        </Container>
    );
};