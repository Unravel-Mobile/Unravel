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
<<<<<<< HEAD

        <Text style={Styles.headNav}>Thoughts saved</Text>
  
        <GetCall />

      </Content>
=======
            <Text style={Styles.headNav}>Thoughts saved</Text>
        <GetCall />
        </Content>
>>>>>>> 21f31429af9fb56d5fcbfca36b93d27dc3a05ca1
    </Container>

  );
};

ReviewScreen.navigationOptions = {
  title: 'Review',
};