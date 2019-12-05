import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, View } from 'native-base';
import questions from "./questions.json";

import Styles from '../Style/Style';


export default class QuestionHeader extends Component {
  render() {
      const index = this.props.qIndex;
    return (

<View style={Styles.questionTextWrap}>
        <Card style={Styles.questionTextWrap}>
            {/* <Text style={Styles.questionNo}>Question:</Text> */}
            <Text style={Styles.questionTxt}> {questions[index].q} </Text>
      </Card>
      </View>

    );
  }
}