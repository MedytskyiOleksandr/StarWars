import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {fonts} from '../../../../../assets/fonts';
import {Like, LikeFilled} from '../../../../../assets/icons';
import {colors} from '../../../../../theme/colors';
import {spacing} from '../../../../../theme/spacing';

interface Props {
  goBack: () => void;
  title: string;
  handleLikeButtonPress: () => void;
  isLiked: boolean;
}

export function Header({goBack, title, handleLikeButtonPress, isLiked}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={handleLikeButtonPress}
        style={styles.likeButton}>
        {isLiked ? (
          <LikeFilled width={32} height={32} />
        ) : (
          <Like width={32} height={32} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  backButton: {flex: 0.2},
  backButtonText: {
    fontFamily: fonts.saira_400,
    fontSize: 16,
    color: colors.bananaYellow,
  },
  title: {
    flex: 0.6,
    textAlign: 'center',
    fontFamily: fonts.saira_600,
    fontSize: 24,
    color: colors.white,
  },
  likeButton: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
