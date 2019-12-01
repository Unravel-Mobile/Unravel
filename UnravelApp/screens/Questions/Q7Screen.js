import React from 'react';
import { Container, Button } from 'native-base';
// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the Top navbar
import Header from '../../components/TopNav';
import SubmitButton from '../../components/SubmitButton';


export default class Q7Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render () {
  return (
    <Container>
      <Header navigate={this.navigate} previous= 'Log6' next='Review'/>

      <QuestionHeader qIndex={6} /> 

      {/* Adding picture */}
      
      {/* Submit button */}
      <SubmitButton />
        

    </Container>

    );
  };
};

// title of the page
Q7Screen.navigationOptions = {
  title: 'Associate with a picture',
};
