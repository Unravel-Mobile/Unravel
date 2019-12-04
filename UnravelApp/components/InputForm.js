import React, { Component } from "react";
import { Content, Textarea, Form } from "native-base";

import Styles from '../components/Style/Style';


export default class InputForm extends Component {
    render() {
        return (
            <Content padder>
                <Form>
                    <Textarea style={Styles.textArea}
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