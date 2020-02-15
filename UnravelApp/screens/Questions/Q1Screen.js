import React from 'react';
import { Container } from 'native-base';
// navigation needs to be called even if not directly called
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
import QuestionHeader from '../../components/Questions/Question';
import InputForm from '../../components/InputForm/InputForm';
import Header from '../../components/TopNavFolder/TopNav';

export default class Q1Screen extends React.Component {
  static navigationOptions = {
    header: null
  }

  // passing input values between screens using state
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