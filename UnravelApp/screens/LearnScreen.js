import React from 'react';
import { Container, Content } from 'native-base';
import { NavigationInjectedProps, withNavigation} from 'react-navigation';
import Header from '../components/TopNavFolder/TopNav';
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
                previous= 'Home' next= 'Log1' />

                {/* Learn More component : Static information  */}
                <LearnScreenComp/>

            </Container>

        );
    };
};

LearnScreen.navigationOptions = {
    title: 'Learn',
};
