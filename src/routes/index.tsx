import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { HOME_SCREEN, LOGIN_SCREEN } from '~/constants/routes';
import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';

import { createTheme } from './utils';

const Stack = createStackNavigator();

export function RootStack() {
  const { theme } = useSelector((state: AplicationState) => state.theme);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={false}
      >
        <ThemeProvider theme={createTheme(theme)}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={LOGIN_SCREEN}
              screenOptions={{
                gestureEnabled: false,
                animationEnabled: false,
              }}
            >
              <Stack.Screen
                name={LOGIN_SCREEN}
                component={Login}
                options={{ headerShown: false }}
              />

              <Stack.Screen name={HOME_SCREEN} component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
