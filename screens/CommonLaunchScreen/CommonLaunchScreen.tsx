import ContainerCenter from 'components/atoms/Containers/ContainerCenter';
import DefaultText from 'components/atoms/Text/DefaultText/DefaultText';
import {LaunchPreview} from 'components/molecules';
import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {UseQueryResult} from 'react-query/types/react/types';
import {LaunchType} from 'types/launch';

interface CommonLaunchScreenProps {
  isFetching: UseQueryResult['isFetching'];
  error: UseQueryResult['error'];
  isError: UseQueryResult['isError'];
  data: LaunchType[] | undefined;
}

const CommonLaunchScreen: React.FunctionComponent<CommonLaunchScreenProps> = ({
  error,
  isError,
  isFetching,
  data,
}) => {
  if (isFetching) {
    return (
      <ContainerCenter isVerticalCenter>
        <ActivityIndicator size="large" />
      </ContainerCenter>
    );
  }

  if (isError && error instanceof Error) {
    return (
      <ContainerCenter isVerticalCenter>
        <DefaultText s isTextAlignCenter>
          {error.message}
        </DefaultText>
      </ContainerCenter>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          // If images or rockets not exist - use patches
          const imageArray = item.links.flickr.original.length
            ? item.links.flickr.original
            : Object.values(item.links.patch);
          return (
            <LaunchPreview
              missionName={item.name}
              isSuccessful={item.success}
              date={item.static_fire_date_unix}
              images={imageArray}
            />
          );
        }}
      />
    </View>
  );
};

export default CommonLaunchScreen;
