import React from 'react';
import {StyleProp} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import {getIdFromUrl} from '../../helpers';

interface Props {
  url: string;
  type: 'characters' | 'starships' | 'planets';
  style: StyleProp<ImageStyle>;
}

export function StarWarsImage({url, type, style}: Props) {
  return (
    <FastImage
      style={style}
      source={{
        uri: `https://starwars-visualguide.com/assets/img/${type}/${getIdFromUrl(
          url,
        )}.jpg`,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}
