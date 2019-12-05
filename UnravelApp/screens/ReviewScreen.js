import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import QuestionHeader from '../components/Questions/Question';
import SubmitButton from '../components/SubmitButton';
import ThougthLog from '../components/ThoughtLog';
import GetCall from '../components/GetCall';

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
            <Text style={Styles.reviewHead}>Thoughts saved</Text>
          </CardItem>
          {/* <CardItem style={Styles.reviewSubHead}>
            <Text style={Styles.reviewSubHead}>
              Review this situation
                </Text>
          </CardItem> */}
        </Card>

        {/* <Card>
          <CardItem style={Styles.reviewSubHead} button onPress={() => alert("Will relocate to individual Log")}>
            <Text style={Styles.reviewSubHead}>
              LIST OF THE HEADERS FROM THE DB WILL GO HERE
              Title of event
                </Text>
          </CardItem>
        </Card> */}
        <GetCall />
        {/* <ThougthLog /> */}

      </Content>
    </Container>

  );
};

ReviewScreen.navigationOptions = {
  title: 'Review',
};