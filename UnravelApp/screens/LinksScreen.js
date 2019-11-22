import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import TextArea, { InputForm } from '../components/InputForm';
import Slider from '../components/Slider';
import { Container } from 'native-base';
import Header from '../components/TopNav';
import QuestionHeader from '../components/Questions/Question';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  }


export default function LinksScreen() {
  return (
    // <Content>

      <Container>
        <QuestionHeader qIndex={1} />
        <TextArea style={styles.container} />
        <Slider />

        
      </Container>
    // </Content>


  navigate = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render() {
    return (
  
      <Container>
        <Header navigate={this.navigate} previous= 'Home' next='Settings'/>
          <TextArea style={styles.container} />
          <Slider />
        </Container>
  
  
    );
  }
  
};

LinksScreen.navigationOptions = {
  title: 'Links',
};
