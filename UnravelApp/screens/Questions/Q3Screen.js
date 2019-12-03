import React from 'react';
import { Container, Content } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';

// importing the question header
import QuestionHeader from '../../components/Questions/Question';
// importing the Top navbar
import Header from '../../components/TopNav';
// importing slider
import Slider from '../../components/slider';
import WordSelect01 from '../../components/WordSelect01/WordSelect01';


export default class Q3Screen extends React.Component {

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: 5,
    Q4: []
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1,
      q2answers: this.state.Q2,
      q3answers: this.state.Q3,
      q4answers: this.state.Q4
    })
  }
  
  // slider value change fcn 
  onValueChange = val => {
    //When the slider value changes, state (q3) is updated to match
    this.setState({
      Q3: val
    });
  }


  render () {
  return (
    <Container>
      <Content>
        <Header navigate={this.navigate} previous= 'Log2' next='Log4'/>

        <QuestionHeader qIndex={2} /> 

        <Slider
          // initial value of the slider
          value = {this.state.Q3}
          // passes value on change
          onValueChange={ value => this.onValueChange(value)}
        />
        
        <QuestionHeader qIndex={3} />
        <WordSelect01 />

      </Content>
    </Container>

    );
  };
};

Q3Screen.navigationOptions = {
  title: 'Question 2',
};
