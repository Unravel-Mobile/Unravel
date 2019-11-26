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

  static navigationOptions = {
    header: null
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render () {
  return (
    <Container>
        <Header navigate={this.navigate} previous= 'Log2' next='Review'/>

        <QuestionHeader qIndex={2} /> 

        <Slider/>
          <WordSelect01 />

    </Container>

    );
  };
};

Q3Screen.navigationOptions = {
  title: 'Question 2',
};