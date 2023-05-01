import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../../theme/colors';

interface Props extends ActivityIndicatorProps {}

export function Loader({size, ...rest}: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.bananaYellow} size={size} {...rest} />
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
});
