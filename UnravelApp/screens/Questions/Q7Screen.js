import React from 'react';
import { Container } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
import QuestionHeader from '../../components/Questions/Question';
import Header from '../../components/TopNavFolder/TopNav';
import SubmitButton from '../../components/Submit/SubmitButton';


export default class Q7Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: this.props.navigation.state.params.q3answers,
    wordArray1: this.props.navigation.state.params.wordArray1,
    Q4: this.props.navigation.state.params.q4answers,
    Q5: this.props.navigation.state.params.q5answers,
    Q6: this.props.navigation.state.params.q6answers,
    wordArray2: this.props.navigation.state.params.wordArray2,
    newThought: true,
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      // boolean switch
      isNewThought: this.state.newThought,
    })
  }


  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log6' next='Review'/>

      <QuestionHeader qIndex={8} /> 

      <SubmitButton 
        logName = {this.state.Q1}
        situation = {this.state.Q2}
        prerating = {this.state.Q3}
        wordSelect1 = {this.state.wordArray1}
        autoThought = {this.state.Q4}
        changedThought = {this.state.Q5}
        postRating = {this.state.Q6}
        wordSelect2 = {this.state.wordArray2}
        thought = {this.state.newThought}
      />

    </Container>

    );
  };
};

// title of the page
Q7Screen.navigationOptions = {
  title: 'Associate with a picture',
};
