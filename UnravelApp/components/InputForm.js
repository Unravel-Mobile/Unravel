import React, { Component } from "react";
import { Content, Textarea, Form } from "native-base";

export default class TextArea extends Component {
    render() {
        return (
            <Content padder>
                <Form>
                    <Textarea rowSpan={5} bordered placeholder="Textarea" />
                </Form>
            </Content>
        );
    }
}