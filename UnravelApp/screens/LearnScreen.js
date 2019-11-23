import React, { Component } from "react";
import { Container, Header, H1, Content, Text, Accordion } from "native-base";
const dataArray = [
    { 
        title: "What is Unravel really about?", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { 
        title: "Your thoughts are fascinating!", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { 
        title: "Emotions vs thoughts: where we get stuck!", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { 
        title: "Creating space: finding your balance.", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
        

];

export default function LearnScreen() {

    return (
        <Container>
            {/* <Header /> */}
            <Content padder>
                <Text>
                    <H1>Let's Unravel!</H1>
                </Text>
                <Accordion
                    dataArray={dataArray}
                    headerStyle={{ backgroundColor: "#b2ebf2" }}
                    contentStyle={{ backgroundColor: "#f4f4f4" }}
                />
            </Content>
        </Container>
    );
};











// import React from 'react';
// import { Container, Content, Text, H1, H2 } from 'native-base';
// //import QuestionHeader from '../components/Questions/Question';


// export default function LearnScreen() {
//     /**
//      * Go ahead and delete ExpoConfigView and replace it with your content;
//      * we just wanted to give you a quick view of your config.
//      */
//     return (
//         <Container>
//             <Content>
//                 <Text>
//                     <H1>Unravelling Thoughts</H1>
//                     <H2>Journey to the Curiosity of Self</H2> 
//                     <H2>What is Unravel really about?</H2>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

//                     <H2>Investigate your thoughts. They are fascinating!</H2>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

//                     <H2>Understanding emotions versus thoughts--where we get stuck!</H2>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

//                     <H2>This is about finding your balance and creating a space of calm.</H2>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

//                 <H2>Keep focused. Stay engaged. YOU GOT THIS!</H2>

//                 </Text>
//             </Content>
//         </Container>

//     );
// };

LearnScreen.navigationOptions = {
    title: 'Learn',
};


// export default function LearnScreen() {

//     class AccordionHeaderContentStyleExample extends Component {
//         render() {
//             return (
//                 <Container>
//                     <Header />
//                     <Content padder>
//                         <Accordion
//                             dataArray={dataArray}
//                             headerStyle={{ backgroundColor: "#b7daf8" }}
//                             contentStyle={{ backgroundColor: "#ddecf8" }}
//                         />
//                     </Content>
//                 </Container>
//             );
//         }
//     }
// };