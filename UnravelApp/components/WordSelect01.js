import React, { Component } from 'react'
import { Text, View, Body, Content } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"

export default class WordSelect01 extends Component {
    render() {
        return (
        
                <Grid>
                    <Col><Text>Happy</Text></Col>
                    <Col><Text>Sad</Text></Col>
                    <Col><Text>Pissed</Text></Col>
                </Grid>
        
        )
    }
}