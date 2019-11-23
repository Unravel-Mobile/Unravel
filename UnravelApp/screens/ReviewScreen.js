import React from 'react';
import { Container } from 'native-base';
import QuestionHeader from '../components/Questions/Question';

export default function ReviewScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
      <QuestionHeader qIndex={2} /> 

    </Container>

  );
};

ReviewScreen.navigationOptions = {
  title: 'Review',
};
