import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {backgroundImage} from '../../../assets/images';
import {useCharacters} from '../../../hooks';
import {Loader, NotFound} from '../../../shared';
import {spacing} from '../../../theme/spacing';
import {CharacterCard} from './components/character-card';
import {Footer} from './components/footer';
import {Header} from './components/header';
import {StackScreenProps} from '@react-navigation/stack';
import {CharactersNavigatorParamsList} from '../../../routes/characters-navigator';
import {colors} from '../../../theme/colors';

export type ScreenProps = StackScreenProps<
  CharactersNavigatorParamsList,
  'CharactersScreen'
>;

export function CharactersScreen({navigation}: ScreenProps) {
  const [page, setPage] = useState(1);
  const {characters, loading, swResponse} = useCharacters(page);

  const fetchMore = async () =>
    swResponse?.next && setPage(prevState => prevState + 1);

  if (loading) {
    return <Loader size={'large'} />;
  }

  if (!swResponse) {
    return <NotFound text="Please try again later!" />;
  }

  const onPress = (url: string) => {
    navigation.push('CharacterDetailsScreen', {url});
  };

  const onButtonPress = () => {
    navigation.navigate('CharactersScreenWithPagination');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <FlatList
          onEndReachedThreshold={0.2}
          onEndReached={fetchMore}
          ListHeaderComponent={
            <Header onButtonPress={onButtonPress} buttonText={'Pagination'} />
          }
          ListFooterComponent={
            <Footer
              show={swResponse.next}
              charactersLength={characters.length}
            />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          keyExtractor={(item, _) => item.name}
          data={characters}
          renderItem={({item}) => (
            <CharacterCard onCardPress={onPress} character={item} />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: colors.black},
  backgroundImage: {flex: 1},
  list: {
    flexGrow: 1,
    gap: spacing.large,
  },
});
