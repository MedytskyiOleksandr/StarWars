import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';
import {StarShipsCarousel} from '../star-ships-carousel';

interface Props {
  birthYear: string;
  gender: string;
  height: string;
  mass: string;
  starships: string[];
}

export function CharacterDetails({
  birthYear,
  gender,
  height,
  mass,
  starships,
}: Props) {
  return (
    <View
      style={{
        paddingHorizontal: spacing.small,
      }}>
      <Text style={styles.detailsText}>Day of birth: {birthYear}</Text>
      <Text style={styles.detailsText}>Gender: {gender}</Text>
      <Text style={styles.detailsText}>Height: {height}</Text>
      <Text style={styles.detailsText}>Mass: {mass}</Text>
      {starships.length >= 1 && <StarShipsCarousel starships={starships} />}
    </View>
  );
}

const styles = StyleSheet.create({
  detailsText: {
    fontFamily: fonts.saira_500,
    fontSize: 18,
    color: colors.white,
    lineHeight: 28,
  },
});
