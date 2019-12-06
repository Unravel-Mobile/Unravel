import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Q1Screen from '../screens/Questions/Q1Screen';
import Q2Screen from '../screens/Questions/Q2Screen';
import Q3Screen from '../screens/Questions/Q3Screen';
import Q4Screen from '../screens/Questions/Q4Screen';
import Q5Screen from '../screens/Questions/Q5Screen';
import Q6Screen from '../screens/Questions/Q6Screen';
import Q7Screen from '../screens/Questions/Q7Screen';
import LearnScreen from '../screens/LearnScreen';
import ReviewScreen from '../screens/ReviewScreen';

const config =  { 
    headerMode: 'none',
    navigationOptions: {
      headershown: false,
    }
  }

// Home option in the navbar at the bottom
export const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';


// Create Log option in the navbar at the bottom
const LogStack = createStackNavigator(
  {
    Log1: Q1Screen,
    Log2: Q2Screen,
    Log3: Q3Screen,
    Log4: Q4Screen,
    Log5: Q5Screen,
    Log6: Q6Screen,
    Log7: Q7Screen
  },
  config
);

LogStack.navigationOptions = {
  tabBarLabel: 'Log',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} />
  ),
};

LogStack.path = '';



// Learn option in the navbar at the bottom
const LearnStack = createStackNavigator(
  {
    Learn: LearnScreen,
  },
  config
);

LearnStack.navigationOptions = {
  tabBarLabel: 'Learn',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
  ),
};

LearnStack.path = '';

// Review option in the navbar at the bottom
const ReviewStack = createStackNavigator(
  {
    Review: ReviewScreen,
  },
  config
);

ReviewStack.navigationOptions = {
  tabBarLabel: 'Review',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-eye' : 'md-eye'} />
  ),
};

ReviewStack.path = '';

// Contains all the navigation tabs
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LogStack,
  ReviewStack,
  LearnStack

});

tabNavigator.path = '';


export default tabNavigator;
