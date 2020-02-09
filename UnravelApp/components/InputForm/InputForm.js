import React, { Component } from "react";
import { Content, Textarea, Form } from "native-base";

import Styles from '../InputForm/InputFormStyle';


export default class InputForm extends Component {
    render() {
        return (
            <Content padder>
                <Form>
                    {/* Text area passes the text via props and has a 10 rows of space */}
                    <Textarea style={Styles.textArea}
                        name={this.props.name}
                        rowSpan={10}
                        bordered
                        placeholder="Textarea input"
                        onChangeText={this.props.onChangeText}
                    />
                </Form>
            </Content>
        );
    }
}