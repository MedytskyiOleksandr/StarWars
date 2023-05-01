/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from './custom-drawer-content';
import {NavigatorScreenParams} from '@react-navigation/native';
import {
  DrawerScreensNavigator,
  DrawerScreensParamsList,
} from './drawer-screens-navigator';
import {colors} from '../../theme/colors';

export type MainNavigatorParamsList = {
  DrawerScreens: NavigatorScreenParams<DrawerScreensParamsList>;
};

const MainDrawer = createDrawerNavigator<MainNavigatorParamsList>();

export const MainNavigator = () => {
  return (
    <MainDrawer.Navigator
      initialRouteName="DrawerScreens"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        overlayColor: 'transparent',
        swipeEdgeWidth: 100,
        sceneContainerStyle: {
          backgroundColor: colors.black,
        },
        drawerStyle: {
          width: 250,
          backgroundColor: colors.black,
        },
      }}>
      <MainDrawer.Screen name="DrawerScreens">
        {props => <DrawerScreensNavigator {...props} />}
      </MainDrawer.Screen>
    </MainDrawer.Navigator>
  );
};
