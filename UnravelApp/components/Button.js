import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class ButtonRoundedExample extends Component {
    render() {
        
        return (
            <Container>
                <Header />
                <Content>
                
                    <Button rounded light>
                        <Text>Submit</Text>
                    </Button>
                    

                </Content>
            </Container>
        );
    }
}