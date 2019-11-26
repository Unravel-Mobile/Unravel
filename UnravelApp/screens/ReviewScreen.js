import React from 'react';
import { Container } from 'native-base';
import QuestionHeader from '../components/Questions/Question';
import SubmitButton from '../components/SubmitButton';


export default function ReviewScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
      <QuestionHeader qIndex={2} /> 
      <SubmitButton />

    </Container>

  );
};

ReviewScreen.navigationOptions = {
  title: 'Review',
};
