import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import styled from 'constants/styled';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Routes} from 'routes/routes';
import {NextLaunchScreen, PreviousLaunchScreen} from 'screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {QueryClient, QueryClientProvider} from 'react-query';

const Tab = createBottomTabNavigator();
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
            headerTitle: 'Previous Launches',
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
            headerTitle: 'Next Launches',
            tabBarActiveTintColor: styled.colors.grey70opacity,
            tabBarInactiveTintColor: styled.colors.grey40opacity,
          }}
        />
      </Tab.Navigator>
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
