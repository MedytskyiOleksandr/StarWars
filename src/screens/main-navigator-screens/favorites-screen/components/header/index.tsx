import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {useActions, useTypedSelector} from '../../../../../store/store';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';
import {HeaderItem} from '../header-item';

export function Header() {
  const {genderCount} = useTypedSelector(state => state.favoriteCharacters);
  const {resetAll} = useActions();

  const data = [
    {gender: 'male', count: genderCount.male},
    {gender: 'female', count: genderCount.female},
    {gender: 'other', count: genderCount.other},
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}>
        {data.map(item => (
          <HeaderItem key={item.gender} item={item} />
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => resetAll()} style={styles.button}>
        <Text style={styles.buttonText}>Reset All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {gap: spacing.smaller, paddingVertical: spacing.smaller},
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.bananaYellow,
    marginHorizontal: spacing.mediumPlus,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.black,
    fontFamily: fonts.saira_400,
    fontSize: 18,
    paddingVertical: spacing.tiny,
    textAlign: 'center',
  },
});
