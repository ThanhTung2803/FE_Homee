import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome_Screen from '../Screens/Welcome_Screen'; // Đường dẫn đến màn hình chào mừng
import BottomTabNavigator from './BottomTabNavigator';
import Detail_Screen from '../Screens/Detail_Screen';
import Test from '../Screens/Test';
import ChatListScreen from '../Screens/ChatListScreen';
import ChatDetailScreen from '../Screens/ChatDetailScreen ';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome_Screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeTabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detail_Screen"
          component={Detail_Screen as React.ComponentType<any>}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Test"
          component={Test as React.ComponentType<any>}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="ChatList" component={ChatListScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen}  options={{ headerShown: false }} />







      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

