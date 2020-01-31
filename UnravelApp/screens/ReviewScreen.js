import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import QuestionHeader from '../components/Questions/Question';
import SubmitButton from '../components/SubmitButton';
import GetCall from '../components/GetCall';

import Styles from '../components/Style/Style';



export default function ReviewScreen() {

  return (
    <Container>
      <Content padder>
            <Text style={Styles.headNav}>Thoughts saved</Text>
        <GetCall />
        </Content>
    </Container>

  );
};

ReviewScreen.navigationOptions = {
  title: 'Review',
};