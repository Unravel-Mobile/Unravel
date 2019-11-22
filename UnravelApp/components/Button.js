import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class ButtonRoundedExample extends Component {
    render() {
        
        return (
            <Container>
                <Header />
                <Content>
                
                    <Button rounded light>
                        <Text>Light</Text>
                    </Button>
                    
                    <Button rounded>
                        <Text>Primary</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}