import {LaunchPreviewProps} from 'components/molecules/LaunchPreview/LaunchPreview';
import {Routes} from 'routes/routes';

export type RootStackParamList = {
  [Routes.LaunchDetailsScreen]: {
    images: LaunchPreviewProps['images'];
    isSuccessful: LaunchPreviewProps['isSuccessful'];
    date: string;
    missionName: LaunchPreviewProps['missionName'];
    areImages: boolean;
    details: LaunchPreviewProps['details'];
  };
  [Routes.NextLaunchScreen]: undefined;
  [Routes.PreviousLaunchScreen]: undefined;
  [Routes.RootStack]: undefined;
};
