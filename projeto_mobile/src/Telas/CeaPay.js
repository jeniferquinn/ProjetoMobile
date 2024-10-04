import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Switch } from "react-native";
import { estilos } from "../styleSheet/estilos";
import FaturaAberta from "./FaturaAberta";
import FaturaFechada from "./FaturaFechada";

function CeaPay() {
    const [ligado, setLigado] = useState(false); 
    const [inicio, setInicio] = useState(<FaturaAberta/>); 

   
    function mudaTela() {
        if (ligado) {
            setInicio(<FaturaAberta/>); 
            setLigado(false);
        } else {
            setInicio(<FaturaFechada />);
            setLigado(true);
        }
    }

    return (
        <View style={estilos.fundo}>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                <Switch
                    value={ligado}
                    trackColor={{ false: "#0038a8", true: "#cccccc" }} 
                    thumbColor={ligado ? "#0038a8" : "#F9dd16"} 
                    onValueChange={mudaTela} 
                />
            </View>
            {inicio} {/* Renderiza o componente baseado no estado `inicio` */}
        
        </View>
        
    );
}

export default CeaPay;
