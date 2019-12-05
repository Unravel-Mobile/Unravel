import React, { Component } from 'react'
import { Text, View, Body, Content, Style } from 'react-native'
import { Button } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid"
import Words01 from "./Words01"
import Words02 from "./Words02"
import Words03 from "./Words03"
import Styles from '../Style/Style';
// import { elementType } from '../../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types'


export default class WordSelect02 extends Component {
    state = {
        Words01,
        Words02,
        Words03
    };


    render() {
        return (
            <Grid style={Styles.threeCols}>
                <Col>
                    {this.props.wordsColOne.map((word, i) => (
                        <Button
                            key={i}
                            onPress={() => this.props.selectWord(word, 'Words01', 'col1')}
                            value={word.col1}
                            style={{ justifyContent: 'center', margin: '1%', backgroundColor: word.isHighlighted ? 'lightblue' : 'transparent' }}
                            >
                            <Text
                              key={i+"TEXT"}
                              style={Styles.buttonText}
                            >
                            {word.col1}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                 {this.props.wordsColTwo.map((word, i) => (
                    <Button
                        key={i}
                        onPress={() => this.props.selectWord(word, 'Words02', 'col2')}
                        value={word.col2}
                        style={{ justifyContent: 'center', margin: '1%', backgroundColor: word.isHighlighted ? 'lightblue' : 'transparent' }}
                    >
                            <Text
                                 key={i+"TEXT"}
                                 style={Styles.buttonText}
                            >
                            {word.col2}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                {this.props.wordsColThree.map((word, i) => (
                    <Button
                        key={i}
                        onPress={() => this.props.selectWord(word, 'Words03', 'col3')}
                        value={word.col3}
                        style={{ justifyContent: 'center', margin: '1%', backgroundColor: word.isHighlighted ? 'lightblue' : 'transparent' }}
                    >
                        <Text
                            key={i+"TEXT"}
                            style={Styles.buttonText}
                            >
                            {word.col3}
                        </Text>

                    </Button>
                    ))}
                </Col>
            </Grid>
        )
    };
}