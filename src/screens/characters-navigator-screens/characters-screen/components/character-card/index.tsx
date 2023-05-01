import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {StarWarsImage} from '../../../../../shared';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';
import {SWPerson} from '../../../../../types/sw-person';

interface Props {
  character: SWPerson;
  onCardPress: (url: string) => void;
}

export function CharacterCard({character, onCardPress}: Props) {
  return (
    <TouchableOpacity
      onPress={() => onCardPress(character.url)}
      style={styles.cardContainer}>
      <StarWarsImage
        type={'characters'}
        url={character.url}
        style={styles.characterImage}
      />
      <Text style={styles.characterName}>{character.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: 250,
    padding: spacing.small,
  },
  characterImage: {
    width: '100%',
    height: 300,
  },
  characterName: {
    color: colors.lightGray,
    fontFamily: fonts.saira_400,
    fontSize: 16,
    padding: spacing.smaller,
  },
});
