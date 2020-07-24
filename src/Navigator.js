import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';

const tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator tabBarOptions={{
    activeTintColor: 'red',
    inactiveTintColor: 'blue',
    labelStyle: { fontSize: 30}
  }}>
    <Tab.Screen name='Feed' component={Feed} />
    <Tab.Screen name='AddPhoto' component={Feed}/>
    <Tab.Screen name='Profile' component={Feed} />
  </Tab.Navigator>
)

const MenuRoutes = {
  Feed: {
    name: 'Feed',
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({ tintColor}) =>
        <Icon name='home' size={30} color={tintColor} />
    }
  },
  Add: {
    name: 'AddPhoto',
    screen: Feed,
    navigationOptions: {
      title: 'Add Picture',
      tabBarIcon: ({ tintColor}) =>
        <Icon name='camera' size={30} color={tintColor} />
    }
  },
  Profile: {
    name: 'Profile',
    screen: Feed,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='user' size={30} color={tintColor} />
    }
  }
};

const MenuConfig = {
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
  }
};

//const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

//export default MenuNavigator;
