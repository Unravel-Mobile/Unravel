import React from 'react';
import { Container, Content } from "native-base";
// import QuestionHeader from '../components/Questions/Question';

import ThoughtLog from '../components/ThoughtLog';

import Styles from '../components/Style/Style';



export default function ThougthScreen() {

    return (
        <Container>
            <Content padder>
                <ThoughtLog />
            </Content>
        </Container>

    );
};

ThougthScreen.navigationOptions = {
    title: 'Thought',
};