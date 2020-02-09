import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button } from 'native-base'
import { Col, Grid } from "react-native-easy-grid"
import Words04 from "./Words04"
import Words05 from "./Words05"
import Words06 from "./Words06"
import Styles from '../WordSelect02/WordSelect02Style';

export default class WordSelect02 extends Component {
    state = {
        Words04,
        Words05,
        Words06
    };


    render() {
        return (
            <Grid>
                <Col>
                    {this.props.wordsColFour.map((word, i) => (
                        <Button
                            key={i}
                            onPress={() => this.props.selectWord(word, 'Words04', 'col4')}
                            value={word.col4}
                            style={{
                                justifyContent: 'center',
                                margin: '1%', backgroundColor: word.isHighlighted ? 'lightblue' : 'transparent'
                            }}
                        >
                            <Text
                                key={i + "TEXT"}
                                style={Styles.buttonText}
                            >
                                {word.col4}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                    {this.props.wordsColFive.map((word, i) => (
                        <Button
                            key={i}
                            onPress={() => this.props.selectWord(word, 'Words05', 'col5')}
                            value={word.col5}
                            style={{
                                justifyContent: 'center',
                                margin: '1%', backgroundColor: word.isHighlighted ? 'lightblue' : 'transparent'
                            }}
                        >
                            <Text
                                key={i + "TEXT"}
                                style={Styles.buttonText}
                            >
                                {word.col5}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                    {this.props.wordsColSix.map((word, i) => (
                        <Button
                            key={i}
                            onPress={() => this.props.selectWord(word, 'Words06', 'col6')}
                            value={word.col6}
                            style={{
                                justifyContent: 'center',
                                margin: '1%', backgroundColor: word.isHighlighted ? 'lightblue' : 'transparent'
                            }}
                        >
                            <Text
                                key={i + "TEXT"}
                                style={Styles.buttonText}
                            >
                                {word.col6}
                            </Text>

                        </Button>
                    ))}
                </Col>
            </Grid>
        )
    };
}

