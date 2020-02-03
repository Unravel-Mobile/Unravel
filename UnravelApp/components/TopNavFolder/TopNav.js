import React from 'react';
import { View } from 'react-native';
import { Header, Left, Right, Button, Icon, Text, Title, } from 'native-base';
import Styles from '../TopNavFolder/TopNavStyle';

export default TopNavBar = (props) => {
  return (
    <Header style={Styles.headNav}>
      <Left>
        <Button transparent onPress={() => props.navigate(props.previous)}>
          <Icon style={Styles.arrows} name='arrow-back' />
          <Text style={Styles.arrows}>Back</Text>
        </Button>
      </Left>

      <View style={Styles.headNav}>

        <Title style={Styles.headTitle}>Add an Entry</Title>

      </View>

      <Right>
        <Button transparent onPress={() => props.navigate(props.next)}>
          <Text style={Styles.arrows}>Next</Text>
          <Icon style={Styles.arrows} name='arrow-forward' />
        </Button>
      </Right>
    </Header>
  );
}