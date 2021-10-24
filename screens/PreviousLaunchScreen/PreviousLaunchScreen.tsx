import DefaultText from 'components/atoms/Text/DefaultText/DefaultText';
import {LaunchPreview} from 'components/molecules';
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
            console.log(
              '🚀 ~ file: PreviousLaunchScreen.tsx ~ line 28 ~ item',
              item,
            );
            return (
              <LaunchPreview
                missionName={item.name}
                isSuccessful={item.success}
                date={item.static_fire_date_unix}
                images={item.links?.flickr?.original ?? null}
              />
            );
          }}
        />
      </View>
    );
  };

export default PreviousLaunchScreen;
