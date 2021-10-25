import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from '@constants/styled';

export const LaunchDetailsScreenStyles = StyleSheet.create({
  mainWrapper: {flex: 1, marginHorizontal: wp(4), marginVertical: hp(2)},
  postContainer: {
    height: hp(80),
    width: '100%',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 5,
    },
    shadowColor: styled.colors.black,
    shadowOpacity: 0.1,
    backgroundColor: styled.colors.white.white,
    shadowRadius: 5,
  },
  imageContainer: {
    height: '40%',
    borderBottomWidth: 1,
    borderBottomColor: styled.colors.grey10opacity,
  },
  imageWrapper: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
  },
  missionInfoContainer: {
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    justifyContent: 'space-between',
    height: '60%',
  },
  detailsWrapper: {
    marginVertical: hp(3),
  },
  successIcon: {
    textAlign: 'right',
  },
});
