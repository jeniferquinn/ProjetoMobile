import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

function TelaFemenina() {
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
                                source={require('../img/roupa1.webp')} />
                            <TouchableOpacity>
                                <Text>Vestido preto</Text>
                                <Text>$30.000.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ width: 140, height: 200 }}
                                source={require('../img/conjunto2.webp')} />
                            <TouchableOpacity>
                                <Text>Conjunto Dior</Text>
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
                                source={require('../img/roupa11.jpg')} />
                            <TouchableOpacity>
                                <Text>Vestido preto</Text>
                                <Text>$30.000.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ width: 140, height: 200 }}
                                source={require('../img/conjunto1.webp')} />
                            <TouchableOpacity>
                                <Text>Conjunto dourado Dior</Text>
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
                            source={require('../img/casaco3.webp')} />
                        <TouchableOpacity>
                            <Text>Casaco Channel</Text>
                            <Text>$30.000.00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Image
                            style={{ width: 140, height: 200 }}
                            source={require('../img/roupa8.jpg')} />
                        <TouchableOpacity>
                            <Text>Vestido rosa Dior</Text>
                            <Text>$45.000.00</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
    );
}
export default TelaFemenina;