import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';

interface Props {
  show?: string;
  charactersLength: number;
}

export function Footer({show, charactersLength}: Props) {
  return (
    <View>
      {show && <ActivityIndicator color={colors.bananaYellow} />}
      {!show && charactersLength > 1 && (
        <Text style={styles.text}>No more characters at that moment</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: fonts.saira_400,
    fontSize: 16,
    padding: spacing.tiny,
    textAlign: 'center',
  },
});
