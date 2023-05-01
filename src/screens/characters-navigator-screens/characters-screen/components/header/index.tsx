import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';

interface Props {
  buttonText: string;
  onButtonPress: () => void;
}

export function Header({buttonText, onButtonPress}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Star Wars Characters</Text>
      <TouchableOpacity onPress={onButtonPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    color: colors.white,
    fontFamily: fonts.saira_600,
    fontSize: 30,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.tiny,
  },
  buttonText: {
    fontFamily: fonts.saira_400,
    fontSize: 16,
    color: colors.bananaYellow,
  },
});
