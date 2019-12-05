import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
import QuestionHeader from '../../components/Questions/Question';
import Header from '../../components/TopNav';
import Slider from '../../components/slider';
// import WordSelect01 from '../../components/WordSelect01/WordSelect01';
// Word select imports below
// import React, { Component } from 'react'
import { Text } from 'react-native'
// import { Button } from 'native-base'
import { Col, Grid } from "react-native-easy-grid"
import Words01 from "../../components/WordSelect01/Words01.json"
import Words02 from "../../components/WordSelect01/Words02.json"
import Words03 from "../../components/WordSelect01/Words03.json"
import Styles from '../../components/Style/Style';


export default class Q3Screen extends React.Component {

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: 5,
    Q4: [],
    Words01,
    Words02,
    Words03,
    wordArray:[]
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
        {/* <WordSelect01 /> */}
        {/* WORD SELECT BELOW */}
        <Grid style={Styles.threeCols}>
                <Col>
                    {Words01.map((words01, i) => (
                        <Button
                            key={i}
                            onPress={()=>this.selectWord(words01.col1)}
                            value={words01.col1}
                            transparent
                            style={Styles.wordButtons}
                        >
                            <Text
                              key={i+"TEXT"}
                              style={Styles.buttonText}
                            >
                            {words01.col1}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                 {Words02.map((words02, i) => (
                    <Button
                        key={i}
                        onPress={()=>this.selectWord(words02.col2)}
                            value={words02.col2}
                        transparent
                        style={Styles.wordButtons}
                    >
                            <Text
                                 key={i+"TEXT"}
                                 style={Styles.buttonText}
                            >
                            {words02.col2}</Text>
                        </Button>
                    ))}
                </Col>

                <Col>
                {Words03.map((words03, i) => (
                    <Button
                        key={i}
                            onPress={()=>this.selectWord(words03.col3)}
                            value={words03.col3}
                        transparent
                        style={Styles.wordButtons}
                    >
                            <Text
                                key={i+"TEXT"}
                                style={Styles.buttonText}
                                >
                                {words03.col3}</Text>

                        </Button>
                    ))}
                </Col>
            </Grid>


      </Content>
    </Container>

    );
  };
};

Q3Screen.navigationOptions = {
  title: 'Question 2',
};
