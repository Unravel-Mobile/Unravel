import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import QuestionHeader from '../components/Questions/Question';
import SubmitButton from '../components/SubmitButton';

import Styles from '../components/Style/Style';



export default function ReviewScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
      <Content padder>
        <Card>
            <CardItem style={Styles.headNav}>
              <Text style={Styles.questionNo}>Title of the situation</Text>
            </CardItem>
            <CardItem style={Styles.reviewSubHead} button onPress={() => alert("Will relocate to individual Log")}>
              <Body>
                <Text style={Styles.questionTxt}>
                  Review this situation
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
    </Container>

  );
};

ReviewScreen.navigationOptions = {
  title: 'Review',
};