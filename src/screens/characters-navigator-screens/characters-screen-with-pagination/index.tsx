import React, {useRef, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {backgroundImage} from '../../../assets/images';
import {useCharactersPagination} from '../../../hooks';
import {Loader, NotFound} from '../../../shared';
import {spacing} from '../../../theme/spacing';
import {CharacterCard} from './components/character-card';
import {Footer} from './components/footer';
import {Header} from './components/header';
import {StackScreenProps} from '@react-navigation/stack';
import {CharactersNavigatorParamsList} from '../../../routes/characters-navigator';
import {colors} from '../../../theme/colors';

export type PaginationScreenProps = StackScreenProps<
  CharactersNavigatorParamsList,
  'CharactersScreenWithPagination'
>;

export function CharactersScreenWithPagination({
  navigation,
}: PaginationScreenProps) {
  const [page, setPage] = useState(1);
  const {characters, loading, swResponse} = useCharactersPagination(page);
  const ref = useRef<FlatList>(null);

  const fetchMore = async (pageNumber: number) => {
    setPage(pageNumber);
    ref.current?.scrollToOffset({animated: false, offset: 0});
  };

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
    navigation.navigate('CharactersScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
        <FlatList
          ref={ref}
          ListHeaderComponent={
            <Header
              onButtonPress={onButtonPress}
              buttonText={'Scroll Loading '}
            />
          }
          ListFooterComponent={
            <Footer
              activePage={page}
              count={swResponse.count}
              itemsPerPage={10}
              onPress={fetchMore}
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
