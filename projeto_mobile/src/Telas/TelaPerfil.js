import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

function TelaPerfil() {
    const nav = useNavigation();
    function mudarSacola(){
        nav.navigate('Sacola')
    }
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
            style={{width: 80, height:30, borderWidth:1, borderColor:'black',
             marginHorizontal:15, marginTop: 20}}
             onPress={()=> mudarSacola()}>
                <Text style={{fontSize: 18, marginTop: 3, alignSelf:'center'}}>Sacola</Text>
            </TouchableOpacity>
            <View style={{marginTop: 50}}>
                <Text style={{marginHorizontal: 15, fontSize: 18}}>name</Text>
                <View style={{ height: 1, backgroundColor: 'black', marginTop:10 }}></View>
                <Text style={{marginHorizontal: 15, marginTop: 20, fontSize: 18}}>endereços</Text>
                <View style={{ height: 1, backgroundColor: 'black', marginTop:10 }}></View>
                <Text style={{marginHorizontal: 15, marginTop: 20, fontSize: 18}}>e-mail</Text>
                <View style={{ height: 1, backgroundColor: 'black', marginTop:10 }}></View>
                <Text style={{marginHorizontal: 15, marginTop: 20, fontSize: 18}}>telefone</Text>
                <View style={{ height: 1, backgroundColor: 'black', marginTop:10 }}></View>
            </View>
        </View>
    );
}
export default TelaPerfil;