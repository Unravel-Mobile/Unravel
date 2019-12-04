import React, { Component } from 'react'
import { Text, View, Body, Content, Style } from 'react-native'
import { Button } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid"
import Words01 from "./Words01"
import Words02 from "./Words02"
import Words03 from "./Words03"
import Styles from '../Style/Style';
// import { elementType } from '../../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types'


export default class WordSelect01 extends Component {
    state = {
        Words01,
        Words02,
        Words03,
        selWordsArr: []
    };
    //selectWord is a function (made up)
    selectWord = (word, wordSet, col) => {
        const updatedArray = this.state[wordSet].map(element => {
            if (element[col] === word ) {
                if (this.state.selWordsArr.indexOf(word) === -1) {
                    // add selected word to selWordsArr if it is not already in the array
                    this.state.selWordsArr.push(word);
                } else {
                    // if it's already in the array then remove it
                    this.state.selWordsArr.splice(this.state.selWordsArr.indexOf(word), 1)
                }
                element.isHighlighted = !element.isHighlighted
                return element;
            } else {
                return element;
            }
        })
        console.log(this.state.selWordsArr)
        // update the Words objects in state to highlighted or not highlighted
        this.setState({ [wordSet]: updatedArray });
    };



    render() {
        return (
            <Grid style={Styles.threeCols}>
                <Col>
                    {Words01.map((words01, i) => (
                        <Button
                            key={i}
                            onPress={() => this.selectWord(words01.col1, 'Words01', 'col1')}
                            value={words01.col1}
                            style={{ justifyContent: 'center', margin: '1%', backgroundColor: words01.isHighlighted ? 'lightblue' : 'transparent' }}
                            >
                            <Text
                              key={i+"TEXT"}
                              style={Styles.buttonText}
                            >
                            {words01.col1}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                 {Words02.map((words02, i) => (
                    <Button
                        key={i}
                        onPress={() => this.selectWord(words02.col2, 'Words02', 'col2')}
                        value={words02.col2}
                        style={{ justifyContent: 'center', margin: '1%', backgroundColor: words02.isHighlighted ? 'lightblue' : 'transparent' }}
                    >
                            <Text
                                 key={i+"TEXT"}
                                 style={Styles.buttonText}
                            >
                            {words02.col2}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                {Words03.map((words03, i) => (
                    <Button
                        key={i}
                        onPress={() => this.selectWord(words03.col3, 'Words03', 'col3')}
                        value={words03.col3}
                        style={{ justifyContent: 'center', margin: '1%', backgroundColor: words03.isHighlighted ? 'lightblue' : 'transparent' }}
                    >
                        <Text
                            key={i+"TEXT"}
                            style={Styles.buttonText}
                            >
                            {words03.col3}
                        </Text>

                    </Button>
                    ))}
                </Col>
            </Grid>
        )
    };
}


// console.log(Words01);
// Words01.map(words01 => {
//      console.log("========================================")
//    console.log("SHIT")
//     console.log(typeof words01.col1);
//  })










// {
//     "blankfield": "" ,
//     "type": "words",
//     "isHighlighted": false   
// }