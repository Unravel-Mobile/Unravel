import React from 'react';
import { Container } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the input text area
import TextArea from '../../components/InputForm';
// importing the Top navbar
import Header from '../../components/TopNav';

export default class Q2Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log1' next='Log3'/>

      <QuestionHeader qIndex={1} /> 

      <TextArea> Describe the situation </TextArea>

    </Container>

    );
  };
};

Q2Screen.navigationOptions = {
  title: 'Question 1',
};
