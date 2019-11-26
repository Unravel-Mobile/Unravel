import React from 'react';
import { Container } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the input text area
import InputForm from '../../components/InputForm';
// importing the Top navbar
import Header from '../../components/TopNav';

export default class Q5Screen extends React.Component {

  static navigationOptions = {
    header: null
  }
  state = {
    Q5:""
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q5answers: this.state.Q5 })
  }

  onChangeText = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q5: value
    });
    console.log("Q5screen");
    console.log(this.props.navigation.state.params.q3answers);
    console.log(this.props.navigation.state.params.q4answers);
  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log4' next='Log6'/>

      <QuestionHeader qIndex={5} /> 

      <InputForm
          name="Q4"
          value={this.state.Q4}
          onChangeText={this.onChangeText}
      />

      {/* Text2Speech */}

    </Container>

    );
  };
};

Q5Screen.navigationOptions = {
  title: 'Question 4',
};
