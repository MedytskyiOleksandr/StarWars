import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../../assets/fonts';
import {colors} from '../../theme/colors';

interface Props {
  text: string;
}

export function NotFound({text}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.saira_600,
    fontSize: 25,
    lineHeight: 28,
    color: colors.white,
    textAlign: 'center',
  },
});
