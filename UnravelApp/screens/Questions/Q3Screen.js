import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import QuestionHeader from '../../components/Questions/Question';
import Header from '../../components/TopNavFolder/TopNav';
import Slider from '../../components/Slider/slider';
import WordSelect01 from '../../components/WordSelect01/WordSelect01';
import Words01 from "../../components/WordSelect01/Words01.json";
import Words02 from "../../components/WordSelect01/Words02.json";
import Words03 from "../../components/WordSelect01/Words03.json";

export default class Q3Screen extends React.Component {

  state = {
    Q1: this.props.navigation.state.params.q1answers,
    Q2: this.props.navigation.state.params.q2answers,
    Q3: 5,
    Words01,
    Words02,
    Words03,
    wordArray: []
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1,
      q2answers: this.state.Q2,
      q3answers: this.state.Q3,
      wordArray1: this.state.wordArray
    })
  }

  // slider value change fcn 
  onValueChange = val => {
    //When the slider value changes, state (q3) is updated to match
    this.setState({
      Q3: val
    });
  }

  // selecting word fcn for the word select2
  selectWord = (word, wordSet, col) => {
    const updatedArray = this.state[wordSet].map(element => {
      const currentWord = word[col]

      if (element[col] === currentWord) {
        if (this.state.wordArray.indexOf(currentWord) === -1) {
          // add selected word to wordArray if it is not already in the array
          // this.state.wordArray.push(word);
          this.setState({
            wordArray: [...this.state.wordArray, currentWord]
          })
          // console.log('CURRENTLY ADDING: ', currentWord)
        } else {
          // if it's already in the array then remove it
          // console.log('UPDATED ARRAY AFTER REMOVE: ', this.state.wordArray.splice(this.state.wordArray.indexOf(currentWord), 1))

          this.setState({
            wordArray: this.state.wordArray.splice(this.state.wordArray.indexOf(currentWord), 1)
          })
        }
        element.isHighlighted = !element.isHighlighted
        return element;
      } else {
        return element;
      }
    })
    // console.log(this.state.wordArray)
    // update the Words objects in state to highlighted or not highlighted
    this.setState({ [wordSet]: updatedArray });
  };

  render() {
    return (
      <Container>
        <Content>
          <Header navigate={this.navigate} previous='Log2' next='Log4' />

          <QuestionHeader qIndex={2} />

          <Slider
            // initial value of the slider
            value={this.state.Q3}
            // passes value on change
            onValueChange={value => this.onValueChange(value)}
          />

          <QuestionHeader qIndex={3} />

          <WordSelect01
            wordsColOne={this.state.Words01}
            wordsColTwo={this.state.Words02}
            wordsColThree={this.state.Words03}
            selectWord={this.selectWord}
          />


        </Content>
      </Container>

    );
  };
};

Q3Screen.navigationOptions = {
  title: 'Question 2',
};
