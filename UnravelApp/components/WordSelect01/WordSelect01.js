import React, { Component } from 'react'
import { Text, View, Body, Content } from 'react-native'
import {Button} from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid"
import Words01 from "./Words01"
import Words02 from "./Words02"
import Words03 from "./Words03"

import Styles from '../Style/Style';


export default class WordSelect01 extends Component {
    state = {
        Words01,
        Words02,
        Words03
    };

    render() {
        return (
            <Grid style={Styles.threeCols}>
                <Col>
                    {Words01.map(words01 => (
                        <Button transparent style={Styles.wordButtons}>
                        <Text style={Styles.buttonText}>{words01.col1}</Text>
                        </Button>
                    ))}
                </Col>
                <Col>
    
                    {Words02.map(words02 => (
                        <Button transparent style={Styles.wordButtons}>
                        <Text style={Styles.buttonText}>{words02.col2}</Text>
                        </Button>
                    ))}
                </Col>
                <Col>
                
                    {Words03.map(words03 => (
                        <Button transparent style={Styles.wordButtons}>
                        <Text style={Styles.buttonText}>{words03.col3}</Text>
                        </Button>
                    ))}
                </Col>
            </Grid>
        )
    };

}
// console.log(Words01);
// Words01.map(words01 => {
//     console.log("========================================")
//     console.log("SHIT")
//     console.log(typeof words01.col1);
// })