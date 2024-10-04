import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get('window'); // Pega a largura da tela

function Tela2() {
    const nav = useNavigation();
    function mudarTela1() {
        nav.navigate('Pesquisar')
    }
    function mudarFeminino() {
        nav.navigate('Feminino')
    }
    function mudarMasculina() {
        nav.navigate('Masculino')
    }

    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true} // Ativa a rolagem de página
            showsHorizontalScrollIndicator={false} // Remove a barra de rolagem
        >
            {/* Tela da Mulher */}
            <View style={{ flex: 1, width: width }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{
                        fontSize: 35, color: '#000467', borderWidth: 1, borderColor: '#950000',
                        alignSelf: 'center', fontFamily: 'Bodoni Moda SC'
                    }}>Haute Couture</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 18, color: '#000467' }}>MULHER</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'black', marginTop: 10 }}></View>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity
                        onPress={() => mudarFeminino()}
                        style={{ marginTop: 30, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>///NEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>VESTIDOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>CAMISAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>CAMISETAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>JEANS</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.15 }}>
                    <TouchableOpacity
                        onPress={() => mudarTela1()}
                        style={{ borderWidth: 1, marginHorizontal: 15 }}>
                        <Text style={{ alignSelf: "flex-end", marginHorizontal: 10 }}>Pesquisa</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Tela do Homem */}
            <View style={{ flex: 1, width: width }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{
                        fontSize: 35, color: '#000467', borderWidth: 1, borderColor: '#950000',
                        alignSelf: 'center', fontFamily: 'Bodoni Moda SC'
                    }}>Haute Couture</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 18, color: '#000467' }}>HOMEN</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'black', marginTop: 10 }}></View>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity
                    onPress={() => mudarMasculina()}
                        style={{ marginTop: 30, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>///NEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>CAMISAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>CAMISETAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>CALÇAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>JEANS</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.15 }}>
                    <TouchableOpacity
                        onPress={() => mudarTela1()}
                        style={{ borderWidth: 1, marginHorizontal: 15 }}>
                        <Text style={{ alignSelf: "flex-end", marginHorizontal: 10 }}>Pesquisa</Text>
                    </TouchableOpacity>
                </View>
                {/* TELA INFANTIL */}
            </View>
            <View style={{ flex: 1, width: 400 }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{
                        fontSize: 35, color: '#000467', borderWidth: 1, borderColor: '#950000',
                        alignSelf: 'center', fontFamily: 'Bodoni Moda SC'
                    }}>Haute Couture</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 18, color: '#000467' }}>INFANTIL</Text>
                </View>
                <View style={{ height: 1, backgroundColor: 'black', marginTop: 10 }}></View>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity
                        style={{ marginTop: 30, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>///NEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>CAMISAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>CAMISETAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>CALÇAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15 }}>JEANS</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.15 }}>
                    <TouchableOpacity
                        onPress={() => mudarTela1()}
                        style={{ borderWidth: 1, marginHorizontal: 15 }}>
                        <Text style={{ alignSelf: "flex-end", marginHorizontal: 10 }}>Pesquisa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default Tela2;
