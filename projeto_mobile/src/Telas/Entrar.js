import React from "react";
import { View, Text, TextInput, TouchableHighlight, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { estilos } from "../styleSheet/estilos";

function Entrar() {
    const nav = useNavigation();
    function mudarCadastro() {
        nav.navigate('Cadastro')
      }
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{fontSize: 24, marginTop: 30, marginBottom: 24, color: '#000467',}}
            >ACESSE A SUA CONTA</Text>
            <View style={estilos.camposEntrar}>
                <TextInput 
                    style={estilos.entradaTexto} 
                    placeholder="e-mail" 
                    keyboardType="email-address" 
                    autoCapitalize="none"
                />
                <TextInput 
                    style={estilos.entradaTexto} 
                    placeholder="senha" 
                    secureTextEntry={true} 
                />
                <TouchableHighlight
                style={{ alignSelf: 'center', marginTop: 20, borderWidth: 1, width: 180, height: 40 }}>
                    <Text style={{ alignSelf: 'center', marginTop: 10 }}>Entrar </Text>
                </TouchableHighlight>
            </View>
            <View style={{ marginTop: 40 }}>
                <Text style={{fontSize: 20, marginTop: 30, marginBottom: 24, color: '#000467',}}
                >PRECISA DE UMA CONTA?</Text>
                <TouchableHighlight
                 onPress={() => mudarCadastro()}
                 style={{ alignSelf: 'center', marginTop: 20, borderWidth: 1, width: 180, height: 40 }}>
                    <Text style={{ alignSelf: 'center', marginTop: 10 }}>REGISTRE-SE</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
}

export default Entrar;
