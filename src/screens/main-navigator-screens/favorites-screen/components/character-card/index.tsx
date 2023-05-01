import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {LikeFilled} from '../../../../../assets/icons';
import {StarWarsImage} from '../../../../../shared';
import {useActions} from '../../../../../store/store';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';
import {SWPerson} from '../../../../../types/sw-person';

interface Props {
  onCardPress: (url: string) => void;
  character: SWPerson;
}

export function CharacterCard({onCardPress, character}: Props) {
  const {unlike} = useActions();

  return (
    <TouchableOpacity
      onPress={() => onCardPress(character.url)}
      style={styles.cardContainer}
      key={character.name}>
      <StarWarsImage
        url={character.url}
        type={'characters'}
        style={styles.characterImage}
      />
      <TouchableOpacity
        onPress={() => {
          unlike(character);
        }}
        style={styles.likeButton}>
        <LikeFilled width={32} height={32} />
      </TouchableOpacity>
      <Text style={styles.characterName}>{character.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
