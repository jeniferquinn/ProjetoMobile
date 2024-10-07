import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Image, Alert } from "react-native";
import { estilos } from "../styleSheet/estilos";
import { db } from "./configaFirebase"; // Importe o db do seu arquivo de configuração
import { collection, addDoc } from "firebase/firestore"; // Importe as funções necessárias do Firestore
import { useNavigation } from '@react-navigation/native';

function CriarConta() {
    const navigation = useNavigation(); // Obtém a instância de navegação

    // Crie estados para os campos do formulário
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");

    const criarConta = async () => {
        try {
            // Salva os dados do cliente no Firestore
            const docRef = await addDoc(collection(db, "Clientes"), {
                email: email,
                senha: senha,
                nome: nome,
                endereco: endereco,
                telefone: telefone,
            });
    
            Alert.alert("Sucesso", "Conta criada com sucesso!");
    
            // Navega para a tela de perfil passando os dados do cliente
            navigation.navigate("Perfil", {
                nome: nome,
                endereco: endereco,
                email: email,
                telefone: telefone,
            });
        } catch (error) {
            Alert.alert("Erro", "Não foi possível criar a conta: " + error.message);
        }
    };
    
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ marginTop: 20 }}>
                <Text style={{
                    fontSize: 35, color: '#000467', borderWidth: 1, borderColor: '#950000',
                    alignSelf: 'center', fontFamily: 'Bodoni Moda SC'
                }}>Haute Couture</Text>
            </View>
            <View style={estilos.camposEntrar}>
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="E-MAIL"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail} // Atualiza o estado do email
                />
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="SENHA"
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha} // Atualiza o estado da senha
                />
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="NOME"
                    autoCapitalize="words"
                    value={nome}
                    onChangeText={setNome} // Atualiza o estado do nome
                />
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="ENDEREÇO"
                    autoCapitalize="words"
                    value={endereco}
                    onChangeText={setEndereco} // Atualiza o estado do endereço
                />
                <TextInput
                    style={estilos.entradaTexto}
                    placeholder="TELEFONE"
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    value={telefone}
                    onChangeText={setTelefone} // Atualiza o estado do telefone
                />
            </View>

            <View>
                <TouchableHighlight
                    style={{ alignSelf: 'center', marginTop: 60, borderWidth: 1, width: 180, height: 40 }}
                    onPress={criarConta} // Chama a função ao pressionar
                >
                    <Text style={{ alignSelf: 'center', marginTop: 10 }}>CRIAR CONTA</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default CriarConta;

