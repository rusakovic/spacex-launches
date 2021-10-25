import {RouteProp, useRoute} from '@react-navigation/native';
import ContainerCenter from 'components/atoms/Containers/ContainerCenter';
import DefaultText from 'components/atoms/Text/DefaultText/DefaultText';
import {LaunchPreviewProps} from 'components/molecules/LaunchPreview/LaunchPreview';
import styled from 'constants/styled';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LaunchDetailsScreenStyles} from './styles';

interface LaunchDetailsScreenProps extends LaunchPreviewProps {
  areImages: boolean;
}

const LaunchDetailsScreen: React.FunctionComponent<LaunchDetailsScreenProps> =
  () => {
    const {
      params: {images, isSuccessful, date, missionName, areImages, details},
    } = useRoute<RouteProp<Record<string, LaunchDetailsScreenProps>, string>>();

    return (
      <View style={LaunchDetailsScreenStyles.mainWrapper}>
        <View style={LaunchDetailsScreenStyles.postContainer}>
          {/* IMAGE */}
          <ContainerCenter
            alignItemsCenter
            isVerticalCenter
            style={LaunchDetailsScreenStyles.imageContainer}>
            <View style={LaunchDetailsScreenStyles.imageWrapper}>
              {areImages ? (
                <Carousel
                  data={images || []}
                  sliderWidth={widthPercentageToDP(90)}
                  loop
                  itemWidth={widthPercentageToDP(70)}
                  renderItem={({item}) => (
                    <Image
                      source={{uri: images ? item : ''}}
                      style={LaunchDetailsScreenStyles.image}
                      resizeMode="cover"
                    />
                  )}
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
          <ContainerCenter
            style={LaunchDetailsScreenStyles.missionInfoContainer}>
            <DefaultText isTextAlignCenter>{missionName}</DefaultText>
            <ScrollView style={LaunchDetailsScreenStyles.detailsWrapper}>
              <DefaultText fitText={false} numberOfLines={50} s fontFamilyThin>
                {details || 'no details about this launch'}
              </DefaultText>
            </ScrollView>
            <ContainerCenter flexDirectionRow justifyContentSpaceBetween>
              {/* LAUNCH DATE */}
              <ContainerCenter>
                <DefaultText xxs2>launch date:</DefaultText>
                <DefaultText xs>{date}</DefaultText>
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
                  style={LaunchDetailsScreenStyles.successIcon}
                />
              </ContainerCenter>
            </ContainerCenter>
          </ContainerCenter>
        </View>
      </View>
    );
  };

export default LaunchDetailsScreen;
