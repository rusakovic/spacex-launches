import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import styled from 'constants/styled';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Routes} from 'routes/routes';
import {NextLaunchScreen, PreviousLaunchScreen} from 'screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          options={{
            tabBarIcon: () => (
              <Ionicons name="ios-play-back-outline" color="black" size={24} />
            ),
            tabBarLabel: 'PREVIOUS',
            headerTitle: 'Previous Launches',
          }}
        />
        <Tab.Screen
          name={Routes.NextLaunchScreen}
          component={NextLaunchScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons name="ios-rocket-outline" color="black" size={24} />
            ),
            tabBarLabel: 'NEXT',
            headerTitle: 'Next Launches',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaWrapper: {backgroundColor: 'white', flex: 1},
});

export default App;
