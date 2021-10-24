import DefaultText from 'components/atoms/Text/DefaultText/DefaultText';
import React from 'react';
import {View} from 'react-native';

interface NextLaunchScreenProps {}

const NextLaunchScreen: React.FunctionComponent<NextLaunchScreenProps> =
  props => {
    return (
      <View>
        <DefaultText>Launch Screen</DefaultText>
      </View>
    );
  };

export default NextLaunchScreen;
