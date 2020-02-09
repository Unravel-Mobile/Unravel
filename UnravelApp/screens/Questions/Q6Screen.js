import React from 'react';
import { Container, Content } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
import QuestionHeader from '../../components/Questions/Question';
import Header from '../../components/TopNavFolder/TopNav';
import Slider from '../../components/Slider/slider';
import WordSelect02 from '../../components/WordSelect02/WordSelect02';
import Words04 from '../../components/WordSelect02/Words04';
import Words05 from '../../components/WordSelect02/Words05';
import Words06 from '../../components/WordSelect02/Words06';

export default class Q6Screen extends React.Component {

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
    Q6: 5,
    selWordsArr: [],
    Words04,
    Words05,
    Words06
  }

  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      q1answers: this.state.Q1,
      q2answers: this.state.Q2,
      q3answers: this.state.Q3,
      wordArray1: this.state.wordArray1,
      q4answers: this.state.Q4,
      q5answers: this.state.Q5,
      q6answers: this.state.Q6,
      wordArray2: this.state.selWordsArr
    })
  }
  
  // slider value change fcn 
  onValueChange = val => {
    //When the slider value changes, state (q7) is updated to match
    this.setState({
      Q6: val
    });
  }

  // selecting word fcn for the word select2
  selectWord = (word, wordSet, col) => {
    const updatedArray = this.state[wordSet].map(element => {
    const currentWord = word[col]
     
        if (element[col] === currentWord ) {
            if (this.state.selWordsArr.indexOf(currentWord) === -1) {
                // add selected word to selWordsArr if it is not already in the array
                // this.state.selWordsArr.push(word);
                this.setState({
                  selWordsArr: [...this.state.selWordsArr, currentWord]
                })
                // console.log('CURRENTLY ADDING: ', currentWord)
            } else {
                // if it's already in the array then remove it
                // console.log('UPDATED ARRAY AFTER REMOVE: ', this.state.selWordsArr.splice(this.state.selWordsArr.indexOf(currentWord), 1))

                this.setState({
                  selWordsArr: this.state.selWordsArr.splice(this.state.selWordsArr.indexOf(currentWord), 1)
                })
            }
            element.isHighlighted = !element.isHighlighted
            return element;
        } else {
            return element;
        }
    })
    // console.log(this.state.selWordsArr)
    // update the Words objects in state to highlighted or not highlighted
    this.setState({ [wordSet]: updatedArray });
  };

  render () {
    // console.log('UPDATED ARRAY: ', this.state.selWordsArr)
  return (
    <Container>
      <Content>
        <Header navigate={this.navigate} previous= 'Log5' next='Log7'/>

        <QuestionHeader qIndex={6} /> 

        <Slider
          // initial value of the slider
          value = {this.state.Q6}
          // passes value on change
          onValueChange={ value => this.onValueChange(value)}
        />

        <QuestionHeader qIndex={7} /> 

        <WordSelect02 
          wordsColFour={this.state.Words04} 
          wordsColFive={this.state.Words05} 
          wordsColSix={this.state.Words06} 
          selectWord = {this.selectWord}  
        />

      </Content>
    </Container>

    );
  };
};

Q6Screen.navigationOptions = {
  title: 'Question 5',
};
