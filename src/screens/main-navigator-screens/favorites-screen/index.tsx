import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {CharactersNavigatorParamsList} from '../../../routes/characters-navigator';
import {ScreenContainer} from '../../../shared';
import {useTypedSelector} from '../../../store/store';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/spacing';
import {DrawerScreensParamsList} from '../../../routes/main-navigator/drawer-screens-navigator';
import {fonts} from '../../../assets/fonts';
import {Header} from './components/header';
import {CharacterCard} from './components/character-card';

type ScreenProps = CompositeScreenProps<
  StackScreenProps<DrawerScreensParamsList, 'Favorites'>,
  StackScreenProps<CharactersNavigatorParamsList>
>;

export function FavoritesScreen({navigation}: ScreenProps) {
  const {favoriteCharacters} = useTypedSelector(
    state => state.favoriteCharacters,
  );

  const onCardPress = (url: string) => {
    navigation.push('Home', {screen: 'CharacterDetailsScreen', params: {url}});
  };

  return (
    <ScreenContainer containerStyle={styles.container} header={<Header />}>
      {favoriteCharacters.map(character => (
        <CharacterCard
          key={character.name}
          character={character}
          onCardPress={onCardPress}
        />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.medium,
  },
  cardContainer: {
    width: '46%',
    position: 'relative',
  },
  characterImage: {width: '100%', height: 250},
  likeButton: {
    position: 'absolute',
    top: spacing.mediumPlus,
    right: spacing.medium,
  },
  characterName: {
    fontFamily: fonts.saira_400,
    color: colors.lightGray,
    fontSize: 16,
    padding: spacing.small,
    backgroundColor: colors.white,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
