import React from 'react';
import { Container, Content } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the Top navbar
import Header from '../../components/TopNav';
// importing slider
import Slider from '../../components/slider';

import WordSelect01 from '../../components/WordSelect01';

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
