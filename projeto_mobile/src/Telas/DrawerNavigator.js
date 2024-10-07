import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator'; // Importa o StackNavigator
import TabNavigator from './TabNavigator'; // Importa o TabNavigator
import { Feather } from "@expo/vector-icons";
import Entrar from './Entrar';
import CriarConta from './CriarConta';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Menu" component={StackNavigator} />

            <Drawer.Screen
                name="Entrar"
                component={Entrar} />

            <Drawer.Screen
                name="Criar Conta"
                component={CriarConta}
                options={{                  
                    drawerIcon: ({ color, size }) => (
                        <Feather name="user-plus" size={24} color="#0038a8" /> ), 
                }}  />

            <Drawer.Screen
                name='Novidades'
                component={TabNavigator}  
                />

            <Drawer.Screen
                name="Feminino"
                component={StackNavigator}
                initialParams={{ screen: 'Feminino' }} // Aqui defenimos a exibição da Tela Feminino, mantendo o TABNAVIGATOR
                
            />

            <Drawer.Screen
                name="Masculino"
                component={StackNavigator} 
                initialParams={{ screen: 'Masculino' }}/>

            <Drawer.Screen
                name="Infantil"
                component={StackNavigator} 
                initialParams={{ screen: 'Infantil' }}/>
             
             <Drawer.Screen
                name="Perfil"
                component={StackNavigator}
                initialParams={{ screen: 'Perfil' }} // Navega diretamente para a tela CeaPay
                options={{                  
                    drawerIcon: ({ color, size }) => (
                        <Feather name="user" size={24} color="#0038a8" /> ), 
                }}
            />

        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
