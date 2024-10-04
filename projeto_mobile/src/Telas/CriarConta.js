import React from "react";
import { View, Text, TextInput, TouchableHighlight, Image } from "react-native";
import { estilos } from "../styleSheet/estilos";

function CriarConta() {
    let ceapay = require('../img/ceapay.png');

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 35, color: '#000467', borderWidth: 1, borderColor:'#950000', 
                    alignSelf: 'center', fontFamily:'Bodoni Moda SC'}}>Haute Couture</Text>
                </View>
            <View style={estilos.camposEntrar}>
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="E-MAIL"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="SENHA"
                    secureTextEntry={true}
                />
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="NOME"
                    autoCapitalize="words"
                />
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="ENDEREÇO"
                    autoCapitalize="words"
                />
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="TELEFONE"
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                />
            </View>

            <View>
                <TouchableHighlight
                    style={{ alignSelf: 'center', marginTop: 60, borderWidth: 1, width: 180, height: 40 }}>
                    <Text style={{ alignSelf: 'center', marginTop: 10 }}>CRIAR CONTA</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default CriarConta;
