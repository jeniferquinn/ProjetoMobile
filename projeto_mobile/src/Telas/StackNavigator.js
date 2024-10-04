import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'; 
import Tela_principal from './Tela_principal';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import CriarConta from './CriarConta';
import TelaFemenina from './TelaFemenina';
import TelaMasculina from './TelaMasculina';
import TelaInfantil from './TelaInfantil';
import TelaPerfil from './TelaPerfil';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Novidades" component={Tela_principal} options={{ headerShown: false }}/>
            <Stack.Screen name="Menu" component={Tela2} options={{ headerShown: false }}/>
            <Stack.Screen name="Feminino" component={TelaFemenina} options={{ headerShown: false }}/>
            <Stack.Screen name="Masculino" component={TelaMasculina} options={{ headerShown: false }}/>
            <Stack.Screen name="Pesquisar" component={Tela1} options={{ headerShown: false }}/>
            <Stack.Screen name="Infantil" component={TelaInfantil} options={{ headerShown: false }}/>
            <Stack.Screen name="Cadastro" component={CriarConta} options={{ headerShown: false }}/>
            <Stack.Screen name="Perfil" component={TelaPerfil} options={{ headerShown: false }}/>
            
        </Stack.Navigator>
    );
}

export default StackNavigator;
