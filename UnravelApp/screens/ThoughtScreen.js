import React from 'react';
import { Container, Content } from "native-base";
// import QuestionHeader from '../components/Questions/Question';

import GetCall from '../components/GetCall';

import Styles from '../components/Style/Style';



export default function ThougthScreen() {

    return (
        <Container>
            <Content padder>
                <GetCall />
            </Content>
        </Container>

    );
};

ThougthScreen.navigationOptions = {
    title: 'Thought',
};