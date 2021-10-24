import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'constants/styled';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Routes} from 'routes/routes';
import {NextLaunchScreen, PreviousLaunchScreen} from 'screens';

const Tab = createBottomTabNavigator();

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
        />
        <Tab.Screen
          name={Routes.NextLaunchScreen}
          component={NextLaunchScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
