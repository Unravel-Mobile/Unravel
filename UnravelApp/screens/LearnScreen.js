import React from 'react';
import { Container } from 'native-base';
import QuestionHeader from '../components/Questions/Question';

export default function LearnScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
      <QuestionHeader qIndex={0} /> 

    </Container>

  );
};

LearnScreen.navigationOptions = {
  title: 'Learn',
};
