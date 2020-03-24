import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import logo from './assets/instagram.png';
import Feed from './pages/Feed';

//const RootStack = createStackNavigator({Feed});
//const Routes = createAppContainer(RootStack);

const Routes = createAppContainer(
  createStackNavigator(
    {Feed},
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: <Image source={logo} />,
      },
    },
  ),
);

export default Routes;
