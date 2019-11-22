import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default HeaderIconTextButtonExample = (props) =>  {
    return (
        <Header>
          <Left>
            <Button transparent onPress={() => props.navigate(props.previous)}>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => props.navigate(props.next)}>
              <Text>Next</Text>
              <Icon name='arrow-forward' />
            </Button>
          </Right>
        </Header>
    );
}