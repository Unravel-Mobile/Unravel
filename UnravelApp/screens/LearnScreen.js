import React from 'react';
import {Image} from 'react-native';
import { Container, Content, Body, Text, H1, H2 } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
// importing the Top navbar
import Header from '../components/TopNav';

import LearnScreenComp from '../components/LearnScreen/LearnScreen';

export default class LearnScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    navigate = (screen) => {
        this.props.navigation.navigate(screen,{})
    }

    state ={}

    render () {
        return(
            <Container>
                <Header navigate={this.navigate}
                previous= 'Home' />

                {/* Learn More component */}
                <LearnScreenComp/>

            </Container>

        );
    };
};


LearnScreen.navigationOptions = {
    title: 'Learn',
};
