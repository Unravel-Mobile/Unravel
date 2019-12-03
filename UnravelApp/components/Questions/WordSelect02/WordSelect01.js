import React, { Component } from 'react'
import { Text, View, Body, Content } from 'react-native'
import { Button } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid"
import Words01 from "./Words01"
import Words02 from "./Words02"
import Words03 from "./Words03"

import Styles from '../../Style/Style';

// THIS FILE IS INSIDE WordSelect02 FOLDER
// I TRIED TO ADD STYLE TO THIS FILE (LINE 34) BUT IT LOOKS LIKE IS NOT BEING USED  11/27/19  mc
// LETS KEEP AN EYE ON THIS ONE


export default class WordSelect01 extends Component {
    state = {
        Words01,
        Words02,
        Words03
    };

    selectWord = (event) => {
        event.preventDefault();
        console.log('event - -> ' + event);
        var selected = [];
        selected.push(event.target.value);
        console.log(selected);
    };


    render() {
        return (
            <Grid style={Styles.threeCols}>
                <Col>
                    {Words01.map((words01, i) => (
                        <Button
                            key={i + words01.col1}
                            onPress={this.selectWord}
                            value={words01.col1}
                            transparent
                        >
                            <Text>{words01.col1}</Text>
                        </Button>
                    ))}
                </Col>
                <Col>
                {Words02.map((words02, i) => (
                    <Button
                        key={i + words02.col2}
                        onPress={this.selectWord}
                            value={words02.col2}
                        transparent
                    >
                            <Text>{words02.col2}</Text>
                        </Button>
                    ))}
                </Col>
                <Col>
                {Words03.map((words03, i) => (
                    <Button
                        key={i + words03.col3}
                            onPress={this.selectWord}
                            value={words03.col3}
                        transparent
                    >
                            <Text>{words03.col3}</Text>
                        </Button>
                    ))}
                </Col>
            </Grid>
        )
    };

}
console.log(Words01);
Words01.map(words01 => {
    console.log("========================================")
    console.log("SHIT")
    console.log(typeof words01.col1);
})