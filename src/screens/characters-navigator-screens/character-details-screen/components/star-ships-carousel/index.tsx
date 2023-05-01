import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {StarWarsImage} from '../../../../../shared';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';

interface Props {
  starships: string[];
}

export function StarShipsCarousel({starships}: Props) {
  return (
    <View style={{marginTop: spacing.medium}}>
      <Text style={styles.title}>Starships</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.container}
        data={starships}
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <StarWarsImage
              type={'starships'}
              url={item}
              style={styles.starshipImage}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexGrow: 1, gap: spacing.medium},
  title: {
    fontFamily: fonts.saira_500,
    fontSize: 18,
    color: colors.white,
    lineHeight: 28,
  },
  imageContainer: {width: 200, height: 200},
  starshipImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});
