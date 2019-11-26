import React from 'react';
import { Container } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the Top navbar
import Header from '../../components/TopNav';
// importing slider
import Slider from '../../components/slider';

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
        <Header navigate={this.navigate} previous= 'Log2' next='Log3'/>

        <QuestionHeader qIndex={2} /> 

        <Slider/>

        <QuestionHeader qIndex={3} />
        {/* Word Select Version 1 */}

    </Container>

    );
  };
};

Q3Screen.navigationOptions = {
  title: 'Question 2',
};
