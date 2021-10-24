import ContainerCenter from 'components/atoms/Containers/ContainerCenter';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import React from 'react';
import {Image, View} from 'react-native';
import styled from '@constants/styled';
import {PostPreviewStyles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  return (
    <View style={PostPreviewStyles.mainWrapper}>
      <View style={PostPreviewStyles.postContainer}>
        <ContainerCenter
          alignItemsCenter
          isVerticalCenter
          style={{
            width: '40%',
            borderRightWidth: 1,
            borderRightColor: styled.colors.grey10opacity,
          }}>
          <View
            style={{
              height: '100%',
              width: '100%',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              overflow: 'hidden',
            }}>
            <Image
              source={{uri: images ? images[0] : ''}}
              style={{height: '100%'}}
              resizeMode="cover"
            />
          </View>
        </ContainerCenter>

        <ContainerCenter
          style={{
            width: '60%',
            paddingHorizontal: '2%',
            paddingVertical: '2%',
            justifyContent: 'space-between',
            height: '100%',
          }}>
          <DefaultText>{missionName}</DefaultText>

          <ContainerCenter flexDirectionRow justifyContentSpaceBetween>
            <ContainerCenter>
              <DefaultText xxs2>launch date:</DefaultText>
              <DefaultText xs>{date}</DefaultText>
            </ContainerCenter>

            <ContainerCenter>
              <DefaultText xxs2>successful:</DefaultText>
              <Ionicons
                name={
                  isSuccessful
                    ? 'checkmark-circle-outline'
                    : 'close-circle-outline'
                }
                size={17}
                style={{textAlign: 'right'}}
              />
            </ContainerCenter>
          </ContainerCenter>
        </ContainerCenter>
      </View>
    </View>
  );
};

export default LaunchPreview;
