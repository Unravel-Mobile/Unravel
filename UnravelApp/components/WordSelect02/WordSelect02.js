import React, { Component } from 'react'
import { Text, View, Body, Content, Style } from 'react-native'
import { Button } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid"
import Words04 from "./Words04"
import Words05 from "./Words05"
import Words06 from "./Words06"
import Styles from '../Style/Style';
// import { elementType } from '../../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types'


export default class WordSelect01 extends Component {
    state = {
        Words04,
        Words05,
        Words06,
        wordArray:[]
    };
    
    //selectWord is a function (made up)
    selectWord = (word, wordSet, col) => {
  
        
        const updatedArray = this.state[wordSet].map(element => {
            if (element[col] === word ) {
                element.isHighlighted = !element.isHighlighted
                return element
            } else {
                return element
            }
        })

        console.log(updatedArray)

        
        this.setState({ [wordSet]: updatedArray })
        // console.log(this.state.wordArray);
    };




    render() {
        return (
            <Grid style={Styles.threeCols}>
                <Col>
                    {Words04.map((words04, i) => (
                        <Button
                            key={i}
                            onPress={() => this.selectWord(words04.col4, 'Words04', 'col4')}
                            value={words04.col4}
                            style={{ justifyContent: 'center', margin: '1%', backgroundColor: words01.isHighlighted ? 'lightblue' : 'transparent' }}
                            >
                            <Text
                              key={i+"TEXT"}
                              style={Styles.buttonText}
                            >
                            {words04.col4}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                 {Words05.map((words05, i) => (
                    <Button
                        key={i}
                        onPress={() => this.selectWord(words05.col5, 'Words05', 'col5')}
                        value={words05.col5}
                        style={{ justifyContent: 'center', margin: '1%', backgroundColor: words02.isHighlighted ? 'lightblue' : 'transparent' }}
                    >
                            <Text
                                 key={i+"TEXT"}
                                 style={Styles.buttonText}
                            >
                            {words05.col5}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                {Words06.map((words06, i) => (
                    <Button
                        key={i}
                        onPress={() => this.selectWord(words06.col6, 'Words06', 'col6')}
                        value={words06.col6}
                        style={{ justifyContent: 'center', margin: '1%', backgroundColor: words03.isHighlighted ? 'lightblue' : 'transparent' }}
                    >
                        <Text
                            key={i+"TEXT"}
                            style={Styles.buttonText}
                            >
                            {words06.col6}
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
//     console.log("========================================")
//     console.log("SHIT")
//     console.log(typeof words01.col1);
// })










// {
//     "blankfield": "" ,
//     "type": "words",
//     "isHighlighted": false   
// }