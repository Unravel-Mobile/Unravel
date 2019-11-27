import React from 'react';
import { Header, Left, Right, Button, Icon, Text } from 'native-base';


export default TopNavBar = (props) =>  {
    return (
      <Header>
          <Left>
            <Button transparent onPress={() => props.navigate(props.previous)}>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>

          <Right>
          <Button transparent onPress={() => props.navigate(props.next)}>
              <Text>Next</Text>
              <Icon name='arrow-forward' />
            </Button>
          </Right>
        </Header>
    );
}