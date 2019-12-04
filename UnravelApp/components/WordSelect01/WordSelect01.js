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
        wordArray:[]
    };
    
    //selectWord is a function (made up)
    selectWord = (word, wordSet, col) => {
        // this.state.wordArray.push(word);
        // return 
             
            //press changes color, not pressed is default
            //
        
        const updatedArray = this.state[wordSet].map(element => {
            if (element[col] === word ) {
                element.isHighlighted = !element.isHighlighted
                return element
            } else {
                return element
            }
        })
        //ternary operator (true/false)
        //press is true or false
        //if true, change color
        //if false, keep transparent
        console.log(updatedArray)

        
        this.setState({ [wordSet]: updatedArray })
        // console.log(this.state.wordArray);
    };

    // change color of button when user presses the button
    // changeButtonColor = (word) => {
    //     this.state.selectWord.changeColor(onclick);
    //     onclick = { false: transparent }
        
    // };
    // //when user clicks on button, the highlighted color stays; when user clicks button again, it un-highlights
    // onHoldButton = (wordArray) => this.selectWord;
    //     this.state.selectWord.


    render() {
        return (
            <Grid style={Styles.threeCols}>
                <Col>
                    {Words01.map((words01, i) => (
                        <Button
                            key={i}
                            onPress={() => this.selectWord(words01.col1, 'Words01', 'col1')}
                            value={words01.col1}
                            //pressed={ false }
                            //info={ pressed ? transparent : blue }
                            // transparent
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
//     console.log("========================================")
//     console.log("SHIT")
//     console.log(typeof words01.col1);
// })


//  buttonStaysHighlighted = onpress(selectWord);
//  deselectButton = onpress(word);








// {
//     "blankfield": "" ,
//     "type": "words",
//     "isHighlighted": false   
// }