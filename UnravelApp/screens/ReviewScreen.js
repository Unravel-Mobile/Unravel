import React from 'react';
import { Container, Content, Text  } from "native-base";
import GetCall from '../components/GetCall/GetCall';

export default function ReviewScreen() {

  return (
    <Container>
      <Content padder>
        <Text></Text>
        <GetCall />
      </Content>
    </Container>

  );
};

ReviewScreen.navigationOptions = {
  title: 'Review',
};