import React from 'react';
import { Container } from 'native-base';
import { Text, View, Body, Content } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid"

// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the Top navbar
import Header from '../../components/TopNav';
// importing slider
import Slider from '../../components/slider';
import WordSelect01 from '../../components/WordSelect01/WordSelect01'
import Words01 from "../../components/WordSelect01/Words01"
import Words02 from "../../components/WordSelect01/Words02"
import Words03 from "../../components/WordSelect01/Words03"

export default class Q3Screen extends React.Component {

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: ""
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q3answers: this.state.Q3 })
  }
  onChangeText = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q3: value
    });
    console.log("Q3screen");

    console.log(this.props.navigation.state.params.q1answers);
    console.log(this.props.navigation.state.params.q2answers);

  }


  render () {
  return (
    <Container>
        <Header navigate={this.navigate} previous= 'Log2' next='Log4'/>

        <QuestionHeader qIndex={2} /> 

        <Slider/>
          <WordSelect01 />

        <QuestionHeader qIndex={3} />
        {/* Word Select Version 1 */}

    </Container>

    );
  };
};

Q3Screen.navigationOptions = {
  title: 'Question 2',
};
