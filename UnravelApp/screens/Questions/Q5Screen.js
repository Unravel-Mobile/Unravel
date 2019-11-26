import React from 'react';
import { Container } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the input text area
import TextArea from '../../components/InputForm';
// importing the Top navbar
import Header from '../../components/TopNav';

export default class Q5Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log4' next='Log6'/>

      <QuestionHeader qIndex={5} /> 

      <TextArea> How would you approach this differently </TextArea>

      {/* Text2Speech */}

    </Container>

    );
  };
};

Q5Screen.navigationOptions = {
  title: 'Question 4',
};
