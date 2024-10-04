import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Modal, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

function Tela1() {
    // Array de itens
    const items = [
        { name: "Vestido preto", price: "$30.000,00", image: require('../img/roupa1.webp') },
        { name: "Conjunto Dior", price: "$45.000,00", image: require('../img/conjunto2.webp') },
        { name: "Vestido preto", price: "$30.000,00", image: require('../img/roupa11.jpg') },
        { name: "Conjunto dourado Dior", price: "$45.000,00", image: require('../img/conjunto1.webp') },
        { name: "Casaco Channel", price: "$30.000,00", image: require('../img/casaco3.webp') },
        { name: "Vestido rosa Dior", price: "$45.000,00", image: require('../img/roupa8.jpg') },
        { name: "Casaco Channel", price: "$30.000,00", image: require('../img/casaco2.jpg') },
        { name: "Vestido rosa Dior", price: "$45.000,00", image: require('../img/roupa10.jpg') },
    ];

    // Estado para armazenar o texto da pesquisa
    const [searchText, setSearchText] = useState("");

    // Estado para o item selecionado
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Filtrar itens com base no texto de pesquisa
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Função para abrir o modal e definir o item selecionado
    const handleItemPress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 24, color: '#000467', alignSelf: 'center' }}>
                        O que Procura?
                    </Text>
                    <TextInput
                        style={{ marginTop: 10, alignSelf: 'center', borderBottomWidth: 1, borderColor: '#000467', width: 200, textAlign: 'center' }}
                        placeholder="PESQUISA AQUI"
                        value={searchText}
                        onChangeText={setSearchText} // Atualiza o estado com o valor do input
                    />
                </View>

                <View style={{ marginHorizontal: 30, marginTop: 60 }}>
                    {/* Mapeia os itens filtrados */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {filteredItems.map((item, index) => (
                            <View key={index} style={{ flexDirection: 'column', margin: 10 }}>
                                <Image
                                    style={{ width: 140, height: 200 }}
                                    source={item.image}
                                />
                                <TouchableOpacity onPress={() => handleItemPress(item)}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.price}</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Modal para exibir o item selecionado */}
            {selectedItem && (
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            {/* Botão de fechar como ícone de X */}
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Feather name="x" size={24} color="black" />  {/* Ícone de X */}
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{position: 'absolute', top: 10, right: 10,  zIndex: 1}}>
                            <Feather name="bookmark" size={24} color="black" />
                            </TouchableOpacity>

                            <Image style={styles.modalImage} source={selectedItem.image} />
                            <Text style={styles.modalText}>{selectedItem.name}</Text>
                            <Text style={styles.modalText}>{selectedItem.price}</Text>
                            <TouchableOpacity style={styles.buyButton} onPress={() => alert('Comprado!')}>
                                <Text style={styles.buyButtonText}>ADICIONAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Faz com que o modal apareça no final da tela (meia tela)
    },
    modalContent: {
        backgroundColor: 'white',
        height: height * 0.5, // Metade da altura da tela
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    modalImage: {
        width: 190,
        height: 260,
        marginBottom: 20,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
    },
    buyButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth:1
    },
    buyButtonText: {
        color:'#000467',
        fontSize: 16,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,  // Para garantir que o botão fique acima da imagem
    },
});

export default Tela1;
