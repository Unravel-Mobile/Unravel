import React from 'react';
import { Container } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
import QuestionHeader from '../../components/Questions/Question';
import InputForm from '../../components/InputForm/InputForm';
import Header from '../../components/TopNavFolder/TopNav';

export default class Q5Screen extends React.Component {

  static navigationOptions = {
    header: null
  }
  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: this.props.navigation.state.params.q3answers,
    wordArray1: this.props.navigation.state.params.wordArray1,
    Q4: this.props.navigation.state.params.q4answers,
    Q5: ""
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1,
      q2answers: this.state.Q2,
      q3answers: this.state.Q3,
      wordArray1: this.state.wordArray1,
      q4answers: this.state.Q4,
      q5answers: this.state.Q5
    })
  }
  
  onChangeText = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q5: value
    });

  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log4' next='Log6'/>

      <QuestionHeader qIndex={5} /> 

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

Q5Screen.navigationOptions = {
  title: 'Question 4',
};
