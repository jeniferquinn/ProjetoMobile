// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tela_principal from './Tela_principal';
/* import Tela1 from './Tela1';
import Tela2 from './Tela2'; */
import TelaSacola from './TelaSacola';
import Entrar from './Entrar';
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Novidades" component={Tela_principal} options={{
          headerShown: false, // Oculta o cabeçalho
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="gift"
              color="#0038a8"  // Cor personalizada
              size={20}        // Tamanho personalizado
            />
          )
        }}
      />
     {/*  <Tab.Screen name="Pesquisar" component={Tela1} options={{
          headerShown: false, // Oculta o cabeçalho
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={24} color="#0038a8" />
          )
        }}
      />
      <Tab.Screen name="Menu" component={Tela2} options={{
          headerShown: false, // Oculta o cabeçalho
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" size={24} color="#0038a8" />
          )
        }}
      />
 */}
      <Tab.Screen name="Sacola" component={TelaSacola} options={{
          headerShown: false, // Oculta o cabeçalho
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={24} color="#0038a8" />
          )
        }}
      />
      <Tab.Screen name="Perfil" component={Entrar} options={{
          headerShown: false, // Oculta o cabeçalho
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={24} color="#0038a8" />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
