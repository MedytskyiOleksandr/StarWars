import React, {ReactNode} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {backgroundImage} from '../../assets/images';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';

interface Props extends ScrollViewProps {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  header?: ReactNode;
  headerStyle?: StyleProp<ViewStyle>;
}

export function ScreenContainer({
  children,
  containerStyle,
  header,
  headerStyle,
  ...rest
}: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {header && <View style={[styles.header, headerStyle]}>{header}</View>}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scrollView, containerStyle]}
            {...rest}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
  },
  imageBackground: {flex: 1, paddingHorizontal: spacing.medium},
  scrollView: {
    flexGrow: 1,
  },
  header: {},
});
