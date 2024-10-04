import react from "react";
import { View, Text } from "react-native";

function TelaSacola() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ borderWidth: 1, marginTop: 50, paddingHorizontal: 60, fontSize:18 }}>SACOLAS</Text>
                <Text style={{ borderWidth: 1, marginTop: 50, paddingHorizontal: 60, fontSize:18 }}>FAVORITOS</Text>
            </View>
        </View>
    );
}
export default TelaSacola;