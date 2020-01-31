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
                previous= 'Home'/>

                {/* Learn More component */}
                <LearnScreenComp/>

            </Container>

        );
    };
};


// export default function LearnScreen() {
//     /**
//      * Go ahead and delete ExpoConfigView and replace it with your content;
//      * we just wanted to give you a quick view of your config.
//      */
//     return (
//         <Container>
//             <Content >
//                 <Image source={require('../assets/images/UnravelSun.png')} style={Styles.learnImg}/>
//             {/* <Text style={Styles.Text}> */}

//                 <Text style={Styles.h1}>Unravelling Thoughts{"\n"}{"\n"}</Text>
            
//                 <Text style={Styles.h2}>What is Unravel really about?{"\n"}</Text>

//                 <Text>We all have Thinking (cognitive) and Feeling (emotional) reactions to the things that happen in our world. Often, the path towards developing an emotional response happens so quickly, we don’t have a chance to sort through the cognitive channels that got us there. When that happens, we can find ourselves going from the experience, directly to an interpretation of the events; and it’s often one that feels right because it can have a lot of intensity. However, slowing down the process and looking at *how* we are arriving at our interpretation of an event, can lead to more balance. That is the purpose behind Unravel. {"\n"}{"\n"}
//                 </Text>

//                 <Text style={Styles.h2}>Stay curious. Investigate your thoughts.{"\n"}</Text>

//                 <Text> Unravel is intended to help you metabolize an event or situation that may have been unpleasant and stayed "stuck" in your mind. Think about a stressful situation where you had an immediate reaction. Here’s an example: you and an acquaintance are sitting and chatting, and you get up to leave at the same time as they do; you end up tripping and falling over your acquaintance’s foot. (something happens) This is the factual component of exactly what happened.{"\n"}{"\n"}

//                 Often, we experience emotions so quickly, we don’t realize how fast we made a decision about what just happened. But we can also observe that the kinds of reactions we have are based in our Thinking (interpretations) of that event. {"\n"}{"\n"}
//                 </Text>

//                 <Text style={Styles.h2}>Knowing our SUD's{"\n"}</Text>

//                 <Text>If we made the interpretation that the acquaintance had tripped us on purpose, we might feel irritation, anger, fear, etc., and our SUD (Subjective Unit of Distress, or how bad that feels from a scale of 0-10) might be fairly high.  Our SUD’s are always a good indicator that we have a Feeling state that is dominant in how we are reacting. Unravel has SUD's you can use to track your emotions. {"\n"}{"\n"}
//                 </Text>

//                 <Text style={Styles.h2}>This is a tool for therapy.{"\n"}</Text>
                
//                 <Text>As you capture your thought logs over time, you start to recognize changes in your Thinking and Feeling patterns. As you progress on your journey, Unravel can help you recall events where you overcame a situation and/or things that still troubled you. With your thoughts logs in your backpocket you can bring it to your therapy sessions to discuss and work through situations in more detail.{"\n"}{"\n"}
//                 </Text>
                
//                 <Text style={Styles.h1}>Unravel. Explore. Grow. {"\n"}{"\n"}</Text>
                
//             {/* </Text> */}

//             </Content>
//         </Container>

//     );
// };

LearnScreen.navigationOptions = {
    title: 'Learn',
};
