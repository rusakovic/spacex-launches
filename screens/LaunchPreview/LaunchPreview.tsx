import DefaultText from 'components/atoms/Text/DefaultText/DefaultText';
import React from 'react';
import {View} from 'react-native';

interface LaunchPreviewProps {}

const LaunchPreview: React.FunctionComponent<LaunchPreviewProps> = props => {
  return (
    <View>
      <DefaultText>Hello</DefaultText>
    </View>
  );
};

export default LaunchPreview;
