import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import TextArea, { InputForm } from '../components/InputForm';
import Slider from '../components/Slider';
import { Container } from 'native-base';
import HeaderIconTextButtonExample, {TopNav} from '../components/TopNav';
import QuestionHeader from '../components/Questions/Question';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default function LinksScreen() {
  return (
    // <Content>

      <Container>
        <QuestionHeader qIndex={1} />
        <TextArea style={styles.container} />
        <Slider />

        
      </Container>
    // </Content>


  );
};

LinksScreen.navigationOptions = {
  title: 'Links',
};
