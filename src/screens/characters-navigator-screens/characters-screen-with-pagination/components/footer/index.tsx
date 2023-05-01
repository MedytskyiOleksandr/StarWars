import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {spacing} from '../../../../../theme/spacing';
import {FooterItem} from '../footer-item';

interface Props {
  count: number;
  itemsPerPage: number;
  activePage: number;
  onPress: (page: number) => void;
}

export function Footer({count, itemsPerPage, activePage, onPress}: Props) {
  const numOfPages = Math.ceil(count / itemsPerPage);

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {Array.from({length: numOfPages}, (_, i) => i + 1).map(item => {
        const isActive = activePage === item;

        return (
          <FooterItem
            key={item}
            isActive={isActive}
            item={item}
            onPress={onPress}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: spacing.medium,
    paddingHorizontal: spacing.mediumPlus,
    paddingVertical: spacing.tiny,
  },
});
