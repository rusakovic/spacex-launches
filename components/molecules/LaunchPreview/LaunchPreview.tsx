import ContainerCenter from 'components/atoms/Containers/ContainerCenter';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import React from 'react';
import {Image, Pressable, View} from 'react-native';
import styled from '@constants/styled';
import {PostPreviewStyles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/core';
import {Routes} from 'routes/routes';

interface LaunchPreviewProps {
  missionName: string;
  date: number;
  isSuccessful: boolean;
  images: string[] | null;
}

const LaunchPreview: React.FunctionComponent<LaunchPreviewProps> = ({
  images,
  isSuccessful,
  date,
  missionName,
}) => {
  const areImages = images?.[0] ?? false;

  const {navigate} = useNavigation();

  const onNavigationHandler = () => {
    navigate(Routes.LaunchPreview, {
      images,
      isSuccessful,
      date,
      missionName,
    });
  };
  return (
    <Pressable
      onPress={onNavigationHandler}
      style={PostPreviewStyles.mainWrapper}>
      <View style={PostPreviewStyles.postContainer}>
        {/* IMAGE */}
        <ContainerCenter
          alignItemsCenter
          isVerticalCenter
          style={PostPreviewStyles.imageContainer}>
          <View style={PostPreviewStyles.imageWrapper}>
            {areImages ? (
              <Image
                source={{uri: images ? images[0] : ''}}
                style={PostPreviewStyles.image}
                resizeMode="cover"
              />
            ) : (
              <ContainerCenter isVerticalCenter>
                <DefaultText xxs2 isTextAlignCenter>
                  no images
                </DefaultText>
              </ContainerCenter>
            )}
          </View>
        </ContainerCenter>

        {/* MISSION INFO */}
        <ContainerCenter style={PostPreviewStyles.missionInfoContainer}>
          <DefaultText>{missionName}</DefaultText>

          <ContainerCenter flexDirectionRow justifyContentSpaceBetween>
            {/* LAUNCH DATE */}
            <ContainerCenter>
              <DefaultText xxs2>launch date:</DefaultText>
              <DefaultText xs>
                {dayjs.unix(date).format('DD.MM.YYYY')}
              </DefaultText>
            </ContainerCenter>

            {/* SUCCESS ICON */}
            <ContainerCenter>
              <DefaultText xxs2>successful:</DefaultText>
              <Ionicons
                name={
                  isSuccessful
                    ? 'checkmark-circle-outline'
                    : 'close-circle-outline'
                }
                size={17}
                color={
                  isSuccessful
                    ? styled.colors.green.checkmark
                    : styled.colors.red.redButton
                }
                style={PostPreviewStyles.successIcon}
              />
            </ContainerCenter>
          </ContainerCenter>
        </ContainerCenter>
      </View>
    </Pressable>
  );
};

export default LaunchPreview;
