import DefaultText from 'components/atoms/Text/DefaultText/DefaultText';
import React from 'react';
import {FlatList, View} from 'react-native';
import {usePreviousLaunches} from 'utils/fetchLaunches';

interface PreviousLaunchScreenProps {}

const PreviousLaunchScreen: React.FunctionComponent<PreviousLaunchScreenProps> =
  props => {
    const {isFetching, data, error, isError} = usePreviousLaunches();
    console.log('🚀 ~ file: PreviousLaunchScreen.tsx ~ line 11 ~ data', data);

    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <DefaultText>{item.id}</DefaultText>;
          }}
        />
      </View>
    );
  };

export default PreviousLaunchScreen;
