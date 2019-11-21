import React, { Component } from "react";
import { Container, Header, Content, Textarea, Form } from "native-base";

export default class TextArea extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <Form>
                        <Textarea rowSpan={5} bordered placeholder="Textarea" />
                    </Form>
                </Content>
            </Container>
        );
    }
}