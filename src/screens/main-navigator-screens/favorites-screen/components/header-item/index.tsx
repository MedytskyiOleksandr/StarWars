import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';

interface Props {
  item: {
    gender: string;
    count: number;
  };
}

export function HeaderItem({item}: Props) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemGender}>
        {item.gender}: <Text style={styles.itemCount}>{item.count}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.tiny,
    paddingHorizontal: spacing.small,
    flex: 1,
    width: '100%',
  },
  itemGender: {
    fontFamily: fonts.saira_600,
    fontSize: 18,
    color: colors.black,
    textTransform: 'capitalize',
  },
  itemCount: {
    fontFamily: fonts.saira_400,
    fontSize: 16,
    color: colors.lightGray,
  },
});
