import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { estilos } from "../styleSheet/estilos";


function Infantil() {

    let infantil = require('../img/infantil.png');
    let infantilMenu = require('../img/infantilMenu.png')

   // Configurar navegação
   const navigation = useNavigation();

   // Funções de navegação
   function navigateToNovidades() {
       navigation.navigate('Novidades');
   }

   function navigateToFeminino() {
       navigation.navigate('Feminino');
   }

   function navigateToMasculino() {
       navigation.navigate('Masculino');
   }

   function navigateToInfantil() {
       navigation.navigate('Infantil');
   }

    return (
        <View style={estilos.fundo}>
            <View style={estilos.menu}>
                <TouchableHighlight
                   onPress={() => navigateToNovidades()}>
                    <Text style={estilos.menuTexto}>Novidades </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => navigateToFeminino()}>
                    <Text style={estilos.menuTexto}>Feminino </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => navigateToMasculino()}>
                    <Text style={estilos.menuTexto}>Masculino </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => navigateToInfantil()}>
                    <Text style={estilos.menuTexto}>Infantil </Text>
                </TouchableHighlight>
            </View>

            <View style={estilos.viewMenu}>
                <Image source={infantilMenu} style={estilos.y}/>
            </View>

            <View style={estilos.viewImage}>
                <Image source={infantil} style={estilos.imagem}/>

            </View>
            
            


        </View>



    );
}
export default Infantil;