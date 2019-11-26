import React, { Component } from "react";
import { Content, Textarea, Form } from "native-base";

export default class InputForm extends Component {
    render() {
        return (
            <Content padder>
                <Form>
                    <Textarea
                        name={this.props.name}
                        rowSpan={5}
                        bordered
                        placeholder="Textarea input"
                        onChangeText={this.props.onChangeText}
                    />
                </Form>
            </Content>
        );
    }
}