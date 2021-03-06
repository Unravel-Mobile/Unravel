import React from 'react';
import { Container, Icon } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
import QuestionHeader from '../../components/Questions/Question';
import InputForm from '../../components/InputForm/InputForm';
import Header from '../../components/TopNavFolder/TopNav';

export default class Q2Screen extends React.Component {

  static navigationOptions = {
    header: null
  }

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: ""
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1,
      q2answers: this.state.Q2
    })
  }
  onChangeText = event => {
    // Caputuring the input text
    let value = event;

    // Using State to store current textarea
    this.setState({
      Q2: value
    });
    
    // this.props.navigation.setParams({q2answers: this.state.Q2});

  }


  render() {
    return (
      <Container>
        <Header navigate={this.navigate} previous='Log1' next='Log3' />

        <QuestionHeader qIndex={1} />

          <InputForm
            name="Q2"
            value={this.state.Q2}
            onChangeText={this.onChangeText}
          />

        {/* <Icon style={Styles.microphone} name='mic-off' /> */}
      </Container>

    );
  };
};

Q2Screen.navigationOptions = {
  title: 'Question 1',
};