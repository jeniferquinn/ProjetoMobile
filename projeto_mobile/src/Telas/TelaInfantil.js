import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

function TelaInfantil() {
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
                                source={require('../img/roupaInfantil1.jpg')} />
                            <TouchableOpacity>
                                <Text>Conjunto rosa Zara</Text>
                                <Text>$30.000.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ width: 140, height: 200 }}
                                source={require('../img/roupaInfantil2.jpg')} />
                            <TouchableOpacity>
                                <Text>Conjunto Zara</Text>
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
                                source={require('../img/roupaInfantil3.jpg')} />
                            <TouchableOpacity>
                                <Text>Conjunto moletom Zara</Text>
                                <Text>$30.000.00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{ width: 140, height: 200 }}
                                source={require('../img/roupaInfantil4.jpg')} />
                            <TouchableOpacity>
                                <Text>Conjunto Verão  Zara</Text>
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
                            source={require('../img/roupaInfantil5.jpg')} />
                        <TouchableOpacity>
                            <Text>Conjunto colorido Zara</Text>
                            <Text>$30.000.00</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Image
                            style={{ width: 140, height: 200 }}
                            source={require('../img/roupaInfantil6.jpg')} />
                        <TouchableOpacity>
                            <Text>Conjunto Zara</Text>
                            <Text>$45.000.00</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
    );
}
export default TelaInfantil;