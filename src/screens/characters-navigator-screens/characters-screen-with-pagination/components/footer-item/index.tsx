import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {colors} from '../../../../../theme/colors';

interface Props {
  onPress: (page: number) => void;
  item: number;
  isActive: boolean;
}

export function FooterItem({onPress, item, isActive}: Props) {
  const styles = styling(isActive);

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={styles.container}
      key={item}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );
}

const styling = (isActive: boolean) => {
  return StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isActive ? colors.bananaYellow : colors.white,
      borderWidth: 1,
      borderColor: colors.lightGray,
      borderRadius: 8,
    },
    text: {
      fontFamily: fonts.saira_600,
      fontSize: 18,
      color: colors.black,
    },
  });
};
