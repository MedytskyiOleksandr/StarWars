import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {useCharacterDetails} from '../../../hooks';
import {CharactersNavigatorParamsList} from '../../../routes/characters-navigator';
import {
  ScreenContainer,
  Loader,
  StarWarsImage,
  NotFound,
} from '../../../shared';
import {useActions, useTypedSelector} from '../../../store/store';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/spacing';
import {CharacterDetails} from './components/character-details';
import {Header} from './components/header';

type ScreenProps = StackScreenProps<
  CharactersNavigatorParamsList,
  'CharacterDetailsScreen'
>;

export function CharacterDetailsScreen({navigation, route}: ScreenProps) {
  const {url} = route.params;
  const {character, loading} = useCharacterDetails(url);
  const {favoriteCharacters} = useTypedSelector(
    state => state.favoriteCharacters,
  );
  const {like, unlike} = useActions();
  const isLiked = favoriteCharacters.some(
    favoriteCharacter => favoriteCharacter.name === character?.name,
  );

  const handleLikeButtonPress = () => {
    isLiked ? unlike(character!) : like(character!);
  };

  if (loading) {
    return <Loader size={'large'} />;
  }

  if (!character) {
    return <NotFound text={'Not found! Please try again!'} />;
  }

  return (
    <ScreenContainer>
      <Header
        title={character.name}
        goBack={() => navigation.goBack()}
        handleLikeButtonPress={handleLikeButtonPress}
        isLiked={isLiked}
      />
      <StarWarsImage
        type={'characters'}
        url={character.url}
        style={styles.characterImage}
      />
      <CharacterDetails
        birthYear={character.birth_year}
        gender={character.gender}
        height={character.height}
        mass={character.mass}
        starships={character.starships}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  characterImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    backgroundColor: colors.white,
    marginBottom: spacing.large,
  },
});
