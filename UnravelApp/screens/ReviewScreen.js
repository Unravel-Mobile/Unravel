import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import QuestionHeader from '../components/Questions/Question';
import SubmitButton from '../components/SubmitButton';


export default function ReviewScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Container>
      <Content padder>
          <Card>
            <CardItem header>
              <Text>Title of the situation</Text>
            </CardItem>
            <CardItem button onPress={() => alert("Will relocate to individual Log")}>
              <Body>
                <Text>
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