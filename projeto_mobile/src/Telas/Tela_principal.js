import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

function Tela_principal() {
    const nav = useNavigation();
    function mudarTela() {
        nav.navigate('Pesquisar')
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.text}>Haute Couture</Text>
                </View>
                <View style={{ marginTop: 20,  }}>
                    <TouchableOpacity
                        onPress={() => mudarTela()}
                        style={{ alignSelf: "flex-end", paddingHorizontal:80,borderWidth: 1, }}>
                        <Text style={{color: '#000467'}}>Pesquisa</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Image
                        style={styles.image}
                        source={require('../img/imagem.jpg')
                        } />
                    <Image
                        style={styles.image}
                        source={require('../img/roupa4.jpg')} // Insira uma URL válida da imagem
                    />
                    <Image
                        style={styles.image}
                        source={require('../img/desfile.webp')} // Insira uma URL válida da imagem
                    />
                    <Image
                        style={styles.image}
                        source={require('../img/roupa5.jpg')} // Insira uma URL válida da imagem
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Cor de fundo
    },
    text: {
        fontSize: 35,
        color: '#000467',
        borderWidth: 1,
        borderColor: '#950000',
        alignSelf: 'center',
        fontFamily: 'Bodoni Moda SC'
    },
    image: {
        width: 370,
        height: 230
    },
});

export default Tela_principal;
