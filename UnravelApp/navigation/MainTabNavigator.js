import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
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


// Links option in the navbar at the bottom
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

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
  LinksStack,
  LearnStack,
  ReviewStack
});

tabNavigator.path = '';


export default tabNavigator;
