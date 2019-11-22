import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import TextArea, { InputForm } from '../components/InputForm';
import Slider from '../components/slider';
import { Container } from 'native-base';
import Header from '../components/TopNav';


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
