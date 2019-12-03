import React from 'react';
import { Container } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
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
    Q3: this.props.navigation.state.params.q3answers,
    Q4: this.props.navigation.state.params.q4answers,
    Q5: ""
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1,
      q2answers: this.state.Q2,
      q3answers: this.state.Q3,
      q4answers: this.state.Q4,
      q5answers: this.state.Q5,
    })
  }
  onChangeText = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q5: value
    });

    console.log("Q4screen");
    console.log(this.state);

  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log3' next='Log5'/>

      <QuestionHeader qIndex={4} /> 

      <InputForm
          name="Q5"
          value={this.state.Q5}
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
