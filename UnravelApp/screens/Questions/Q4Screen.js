import React from 'react';
import { Container } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the input text area
import TextArea from '../../components/InputForm';
// importing the Top navbar
import Header from '../../components/TopNav';

export default class Q4Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log3' next='Log5'/>

      <QuestionHeader qIndex={4 } /> 

      <TextArea> Explain how this made you feel </TextArea>
      {/* Text2Speech */}

    </Container>

    );
  };
};

Q4Screen.navigationOptions = {
  title: 'Question 3',
};
