import React from 'react';
import { Container } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the input text area
import InputForm from '../../components/InputForm';
// importing the Top navbar
import Header from '../../components/TopNav';

export default class Q4Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: "",
    Q4: ""
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q3answers: this.state.Q3,
      q4answers: this.state.Q4
    })
  }
  onChangeText = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q4: value
    });

    // this.props.navigation.state.setParam('Q2 answer', {
    //   Q2Answer: this.state.Q2
    // })
    console.log("Q4screen");
    console.log(this.state)
    console.log(this.props.navigation.state.params.q2answers);
    // console.log(this.props.navigation.state.params.q2answers);
  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log3' next='Log5'/>

      <QuestionHeader qIndex={4} /> 

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

Q4Screen.navigationOptions = {
  title: 'Question 3',
};
