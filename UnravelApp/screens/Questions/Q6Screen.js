import React from 'react';
import { Container, Content } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';

// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the Top navbar
import Header from '../../components/TopNav';
// importing slider
import Slider from '../../components/slider';
import WordSelect02 from '../../components/WordSelect02/WordSelect02';

export default class Q6Screen extends React.Component {

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
    Q7: 5
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
  
  // slider value change fcn 
  onValueChange = val => {
    //When the slider value changes, state (q7) is updated to match
    this.setState({
      Q7: val
    });
  }

  render () {
  return (
    <Container>
      <Content>
        <Header navigate={this.navigate} previous= 'Log5' next='Log7'/>

        <QuestionHeader qIndex={2} /> 

        <Slider
          // initial value of the slider
          value = {this.state.Q7}
          // passes value on change
          onValueChange={ value => this.onValueChange(value)}
        />

        <QuestionHeader qIndex={3} /> 
        {/* Word Select Version 2 */}
        {/* Word Select Version 3 */}
        <WordSelect02 />
      </Content>
    </Container>

    );
  };
};

Q6Screen.navigationOptions = {
  title: 'Question 5',
};
