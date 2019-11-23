import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Q1Screen from '../screens/Questions/Q1Screen';
import Q2Screen from '../screens/Questions/Q2Screen';
import Q3Screen from '../screens/Questions/Q3Screen';
import LearnScreen from '../screens/LearnScreen';
import ReviewScreen from '../screens/ReviewScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// Home option in the navbar at the bottom
const HomeStack = createStackNavigator(
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
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';


// Create Log option in the navbar at the bottom
const LogStack = createStackNavigator(
  {
    Log: Q1Screen,
    Log2: Q2Screen,
    Log3: Q3Screen
  },
  config
);

LogStack.navigationOptions = {
  tabBarLabel: 'Log',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ReviewStack.path = '';

// Contains all the navigation tabs
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LogStack,
  LearnStack,
  ReviewStack
});

tabNavigator.path = '';


export default tabNavigator;
