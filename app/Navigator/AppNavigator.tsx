import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome_Screen from '../Screens/Welcome_Screen'; // Đường dẫn đến màn hình chào mừng
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={Welcome_Screen} 
          options={{ headerShown: false }} // Ẩn header cho màn hình chào mừng
        />

         <Stack.Screen 
          name="HomeTabs" 
          component={BottomTabNavigator}  // Điều hướng tới BottomTabNavigator
          options={{ headerShown: false }}  // Ẩn header của màn hình với tab
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
