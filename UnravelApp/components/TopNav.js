import React from 'react';
import { View, HeaderBackButton } from 'react-native';
import { Body, Container, Header, Left, Right, Button, Icon, Text, Title, Content } from 'native-base';
import Styles from '../components/Style/Style';



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

        <Title style={Styles.headTitle}>Add Entry</Title>

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