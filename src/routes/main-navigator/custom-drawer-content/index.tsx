import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {spacing} from '../../../theme/spacing';
import {Home, LikeFilled} from '../../../assets/icons';
import {fonts} from '../../../assets/fonts';
import {colors} from '../../../theme/colors';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View>
        <Text style={styles.header}>Star Wars App</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.drawerItemContainer}
          onPress={() => props.navigation.navigate('Home')}>
          <Home width={32} height={32} />
          <Text style={styles.drawerItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemContainer}
          onPress={() => props.navigation.navigate('Favorites')}>
          <LikeFilled width={32} height={32} />
          <Text style={styles.drawerItemText}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: spacing.medium,
    marginTop: spacing.huge,
    gap: spacing.mediumPlus,
  },
  header: {
    fontFamily: fonts.saira_700,
    fontSize: 32,
    lineHeight: 36,
    color: colors.bananaYellow,
    marginTop: spacing.mediumPlus,
    textAlign: 'center',
  },
  drawerItemContainer: {
    flexDirection: 'row',
    gap: spacing.medium,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  drawerItemText: {
    fontFamily: fonts.saira_600,
    fontSize: 24,
    color: colors.white,
  },
});
