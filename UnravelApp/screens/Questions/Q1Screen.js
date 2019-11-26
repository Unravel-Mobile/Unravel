import React from 'react';
import { Container } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the input text area
import InputForm from '../../components/InputForm';
// importing the Top navbar
import Header from '../../components/TopNav';

export default class Q1Screen extends React.Component {
  static navigationOptions = {
    header: null
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1 })
  }

  state = {
    Q1: ""
  }

  // Function that is passed to InputForm component 
  onChangeText = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q1: value
    });

  }

  render () {
    return (
      <Container>
        <Header navigate={this.navigate} previous= 'Home' next='Log2'/>

        <QuestionHeader qIndex={0} /> 

        <InputForm
          name="Q1"
          value={this.state.Q1}
          onChangeText={this.onChangeText}
        />

      </Container>

    );
  };
};

// title of the page
Q1Screen.navigationOptions = {
  title: 'Title The Log',
};