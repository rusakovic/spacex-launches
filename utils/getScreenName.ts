import {
  RouteProp,
  ParamListBase,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {Routes} from 'routes/routes';

export const getHeaderTitle = (
  route: RouteProp<ParamListBase, Routes.RootStack>,
) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch (routeName) {
    case Routes.PreviousLaunchScreen:
      return 'Previous Launches';

    case Routes.NextLaunchScreen:
      return 'Next Launches';

    default:
      return '';
  }
};
