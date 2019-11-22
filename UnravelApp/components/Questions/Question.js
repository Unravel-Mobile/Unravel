import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import questions from "./questions.json";

export default class QuestionHeader extends Component {
  render() {
      const index = this.props.qIndex;
    return (

        <Card>
            <Text>Question:</Text>
            <Text> {questions[index].q} </Text>
        </Card>

    );
  }
}