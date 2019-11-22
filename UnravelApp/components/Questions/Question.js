import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import questions from "./questions.json";

export default class QuestionHeader extends Component {
  render() {
    return (

        <Card>
            <Text>Question:</Text>
            <Text> {questions[1].q} </Text>
        </Card>

    );
  }
}