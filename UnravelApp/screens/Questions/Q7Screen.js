import React from 'react';
import { Container, Button } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';

// importing the input text area
import InputForm from '../../components/InputForm';

// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the Top navbar
import Header from '../../components/TopNav';
import SubmitButton from '../../components/SubmitButton';


export default class Q7Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: this.props.navigation.state.params.q3answers,
    Q4: this.props.navigation.state.params.q4answers,
    Q5: this.props.navigation.state.params.q5answers,
    Q6: this.props.navigation.state.params.q6answers,
    Q7: ""
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1,
      q2answers: this.state.Q2,
      q3answers: this.state.Q3,
      q4answers: this.state.Q4,
      q5answers: this.state.Q5,
      q6answers: this.state.Q6,
      q7answers: this.state.Q7
    })
  }
  
  onChangeText = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q7: value
    });

    console.log("Q7screen");
    console.log(this.state);
    console.log(this.props.navigation.state.params.q1answers);
    console.log(this.props.navigation.state.params.q2answers);
  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log6' next='Review'/>

      <QuestionHeader qIndex={6} /> 

      {/* Adding picture */}
      
      {/* Submit button */}
      <SubmitButton 
        title = {this.state.Q1}
        situation = {this.state.Q2}
        prerating = {this.state.Q3}
        wordSelect1 = {this.state.Q4}
        autoThought = {this.state.Q5}
        changedThought = {this.state.Q6}
        postRating = {this.state.Q7}
        wordSelect2 = {["surprise", "happy"]}
      />

        

    </Container>

    );
  };
};

// title of the page
Q7Screen.navigationOptions = {
  title: 'Associate with a picture',
};
