import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import TextArea, { InputForm } from '../components/InputForm';
import Slider from '../components/slider';
import { Container } from 'native-base';


export default function LinksScreen() {
  return (
    // <Content>

      <Container>
        <TextArea style={styles.container}>
        </TextArea>
        <Slider />
      </Container>
    // </Content>


  );
};

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
