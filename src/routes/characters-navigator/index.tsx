import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {defaultNavigatorConfig} from '../../configs/default-navigator-config';
import {
  CharacterDetailsScreen,
  CharactersScreen,
  CharactersScreenWithPagination,
} from '../../screens/characters-navigator-screens';

export type CharactersNavigatorParamsList = {
  CharactersScreen: undefined;
  CharactersScreenWithPagination: undefined;
  CharacterDetailsScreen: {url: string};
};

const CharactersStack = createStackNavigator<CharactersNavigatorParamsList>();

export function CharactersNavigator() {
  return (
    <CharactersStack.Navigator screenOptions={defaultNavigatorConfig}>
      <CharactersStack.Screen
        name="CharactersScreen"
        component={CharactersScreen}
      />
      <CharactersStack.Screen
        name="CharacterDetailsScreen"
        component={CharacterDetailsScreen}
      />
      <CharactersStack.Screen
        name="CharactersScreenWithPagination"
        component={CharactersScreenWithPagination}
      />
    </CharactersStack.Navigator>
  );
}
