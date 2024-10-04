import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/Telas/DrawerNavigator'; 
import TabNavigator from './src/Telas/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}