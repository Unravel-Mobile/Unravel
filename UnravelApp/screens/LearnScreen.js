import React from 'react';
import {Image} from 'react-native';
import { Container, Content, Body, Text, H1, H2 } from 'native-base';
import Styles from '../components/Style/Style';
// import {Media, Jumbotron} from 'react-bootstrap/Media'
//import QuestionHeader from '../components/Questions/Question';

export default function LearnScreen() {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
    return (
        <Container>
            <Content>
                <Image source={require('../assets/images/UnravelSun.png')} style={Styles.learnImg}/>
            <Text style={[Styles.Text]}>

                <Text h1 style={[Styles.h1]}>Unravelling Thoughts{"\n"}{"\n"}</Text>
            
                <Text h2 style={[Styles.h2]}>What is Unravel really about?{"\n"}</Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{"\n"}{"\n"}
               
                <Text h2 style={[Styles.h2]}>Stay curious. Investigate your thoughts.{"\n"}</Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{"\n"}{"\n"}
                
                <Text h2 style={[Styles.h2]}>Understanding emotions vs emotions: where we get stuck!{"\n"}</Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{"\n"}{"\n"}
                
                <Text h2 style={[Styles.h2]}>This is a tool for therapy.{"\n"}</Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{"\n"}{"\n"}
                
                <Text h2 style={[Styles.h2]}>Keep focused. Stay engaged. YOU GOT THIS!{"\n"}</Text>

                </Text>
            </Content>
        </Container>

    );
};

LearnScreen.navigationOptions = {
    title: 'Learn',
};
