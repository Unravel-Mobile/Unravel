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


//import WordSelect01 from '../../components/WordSelect01';

export default class Q3Screen extends React.Component {

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: ""
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1,
      q2answers: this.state.Q2,
      q3answers: this.state.Q3 
    })
  }
  sliderValue = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q3: {value}
    });
    console.log("Q3screen");
    console.log(this.state);
    console.log(this.props.navigation.state.params.q1answers);
    console.log(this.props.navigation.state.params.q2answers);

  }


  render () {
  return (
    <Container>
      <Content>
        <Header navigate={this.navigate} previous= 'Log2' next='Log4'/>

        <QuestionHeader qIndex={2} /> 

        <Slider
          onValueChange={this.sliderValue}
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
