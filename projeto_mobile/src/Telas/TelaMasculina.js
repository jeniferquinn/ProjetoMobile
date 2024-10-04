import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

function TelaMasculina() {
    return (
        <ScrollView>
            <View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{
                        fontSize: 35, color: '#000467', borderWidth: 1, borderColor: '#950000',
                        alignSelf: 'center', fontFamily: 'Bodoni Moda SC'
                    }}>Haute Couture</Text>
                </View>
                <View style={{ marginHorizontal: 30, marginTop: 60 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ width: 140, height: 200 }}
                                source={require('../img/roupaMasculina1.webp')} />
                            <TouchableOpacity>
                                <Text>Conjunto branco DG</Text>
                                <Text>$30.000.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ width: 140, height: 200 }}
                                source={require('../img/roupaMasculina4.jpg')} />
                            <TouchableOpacity>
                                <Text>Conjunto DG</Text>
                                <Text>$45.000.00</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ width: 140, height: 200 }}
                                source={require('../img/roupaMasculina3.jpg')} />
                            <TouchableOpacity>
                                <Text>Conjunto Dior</Text>
                                <Text>$30.000.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ width: 140, height: 200 }}
                                source={require('../img/roupaMasculina2.webp')} />
                            <TouchableOpacity>
                                <Text>Conjunto preto Dior</Text>
                                <Text>$45.000.00</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 30}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image
                            style={{ width: 140, height: 200 }}
                            source={require('../img/roupaMasculina5.jpg')} />
                        <TouchableOpacity>
                            <Text>Conjunto Versace</Text>
                            <Text>$30.000.00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Image
                            style={{ width: 140, height: 200 }}
                            source={require('../img/roupaMasculina6.jpg')} />
                        <TouchableOpacity>
                            <Text>Conjunto Channel</Text>
                            <Text>$45.000.00</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
    );
}
export default TelaMasculina;