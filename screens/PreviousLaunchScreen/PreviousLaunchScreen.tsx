import DefaultText from 'components/atoms/Text/DefaultText/DefaultText';
import React from 'react';
import {View} from 'react-native';

interface PreviousLaunchScreenProps {}

const PreviousLaunchScreen: React.FunctionComponent<PreviousLaunchScreenProps> =
  props => {
    return (
      <View>
        <DefaultText>Launch Screen</DefaultText>
      </View>
    );
  };

export default PreviousLaunchScreen;
