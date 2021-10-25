import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DefaultTheme,
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  ParamListBase,
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import styled from 'constants/styled';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Routes} from 'routes/routes';
import {LaunchPreview, NextLaunchScreen, PreviousLaunchScreen} from 'screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getHeaderTitle} from 'utils/getScreenName';

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();
const queryClient = new QueryClient();

const Navigator = () => {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: styled.colors.white.white,
    },
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <StackNavigator.Navigator>
        <StackNavigator.Screen
          name={Routes.RootStack}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}>
          {() => {
            return (
              <Tab.Navigator>
                <Tab.Screen
                  name={Routes.PreviousLaunchScreen}
                  component={PreviousLaunchScreen}
                  options={{
                    tabBarIcon: ({focused}) => (
                      <Ionicons
                        name="ios-play-back-outline"
                        color={
                          focused
                            ? styled.colors.grey70opacity
                            : styled.colors.grey40opacity
                        }
                        size={24}
                      />
                    ),
                    tabBarLabel: 'PREVIOUS',
                    headerShown: false,
                    tabBarActiveTintColor: styled.colors.grey70opacity,
                    tabBarInactiveTintColor: styled.colors.grey40opacity,
                  }}
                />
                <Tab.Screen
                  name={Routes.NextLaunchScreen}
                  component={NextLaunchScreen}
                  options={{
                    tabBarIcon: ({focused}) => (
                      <Ionicons
                        name="ios-rocket-outline"
                        color={
                          focused
                            ? styled.colors.grey70opacity
                            : styled.colors.grey40opacity
                        }
                        size={24}
                      />
                    ),
                    tabBarLabel: 'NEXT',
                    headerShown: false,
                    tabBarActiveTintColor: styled.colors.grey70opacity,
                    tabBarInactiveTintColor: styled.colors.grey40opacity,
                  }}
                />
              </Tab.Navigator>
            );
          }}
        </StackNavigator.Screen>
        <StackNavigator.Screen
          name={Routes.LaunchPreview}
          component={LaunchPreview}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.safeAreaWrapper}>
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaWrapper: {backgroundColor: 'white', flex: 1},
});

export default App;
