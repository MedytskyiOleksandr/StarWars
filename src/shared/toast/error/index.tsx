import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/spacing';

interface ToastErrorProps {
  text: string | undefined;
}

export function ToastError({text}: ToastErrorProps) {
  return (
    <View style={styles.toastContainer}>
      <Text style={styles.toastText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: 'red',
    width: '90%',
    paddingHorizontal: spacing.mediumPlus,
    paddingVertical: spacing.smaller,
  },
  toastText: {
    color: colors.black,
    fontFamily: fonts.saira_400,
    fontSize: 14,
  },
});
