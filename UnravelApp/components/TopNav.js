import React from 'react';
import { View } from 'react-native';
import { Header, Left, Right, Button, Icon, Text, Container } from 'native-base';
import Styles from '../components/Style/Style';



export default TopNavBar = (props) =>  {
    return (
        <Header style={Styles.headNav}>
          <Left>
            <Button transparent onPress={() => props.navigate(props.previous)}>
              <Icon style={Styles.arrows} name='arrow-back' />
              <Text style={Styles.arrows}>Back</Text>
            </Button>
        </Left>
        <Text style={Styles.headTitle}>Adding an Entry</Text>

          <Right>
          <Button transparent onPress={() => props.navigate(props.next)}>
              <Text style={Styles.arrows}>Next</Text>
              <Icon style={Styles.arrows} name='arrow-forward' />
            </Button>
          </Right>
        </Header>
      // </View>
    );
}