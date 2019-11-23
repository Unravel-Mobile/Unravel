import React from 'react';
import { Container } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the input text area
import TextArea from '../../components/InputForm';
// importing the Top navbar
import Header from '../../components/TopNav';

export default class Q1Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Home' next='Log2'/>

      <QuestionHeader qIndex={0} /> 

      <TextArea> Title Input </TextArea>

    </Container>

    );
  };
};

// title of the page
Q1Screen.navigationOptions = {
  title: 'Title The Log',
};
