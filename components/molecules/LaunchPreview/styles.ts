import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from '@constants/styled';

export const PostPreviewStyles = StyleSheet.create({
  mainWrapper: {flex: 1, marginHorizontal: wp(4), marginVertical: hp(2)},
  postContainer: {
    height: hp(10),
    width: '100%',
    flexDirection: 'row',
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
    width: '40%',
    borderRightWidth: 1,
    borderRightColor: styled.colors.grey10opacity,
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
    width: '60%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    justifyContent: 'space-between',
    height: '100%',
  },
  successIcon: {
    textAlign: 'right',
  },
});
