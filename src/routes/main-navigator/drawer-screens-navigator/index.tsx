/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CharactersNavigator,
  CharactersNavigatorParamsList,
} from '../../characters-navigator';
import {defaultNavigatorConfig} from '../../../configs/default-navigator-config';
import {FavoritesScreen} from '../../../screens/main-navigator-screens';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {MainNavigatorParamsList} from '..';

interface Props {
  route: RouteProp<MainNavigatorParamsList, 'DrawerScreens'>;
  navigation: any;
}

export type DrawerScreensParamsList = {
  Home: NavigatorScreenParams<CharactersNavigatorParamsList>;
  Favorites: undefined;
};

const DrawerScreenStack = createStackNavigator<DrawerScreensParamsList>();

export function DrawerScreensNavigator({route, navigation}: Props) {
  const drawerProgress = useDrawerProgress();

  const mainContainerAnimation = useAnimatedStyle(() => {
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 40]);
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.9]);

    return {
      borderRadius,
      transform: [{scale}],
    };
  });

  const innerContainerAnimation = useAnimatedStyle(() => {
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 40]);

    return {
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.outerContainer, mainContainerAnimation]}>
      <Animated.View style={[styles.innerContainer, innerContainerAnimation]}>
        <DrawerScreenStack.Navigator screenOptions={defaultNavigatorConfig}>
          <DrawerScreenStack.Screen
            name="Home"
            component={CharactersNavigator}
          />
          <DrawerScreenStack.Screen
            name="Favorites"
            component={FavoritesScreen}
          />
        </DrawerScreenStack.Navigator>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.black,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 10,
  },
  innerContainer: {
    flex: 1,
    overflow: 'hidden',
  },
});
