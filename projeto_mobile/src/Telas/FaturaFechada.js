import React from "react";
import { View, Text, ScrollView, TouchableOpacity, SectionList,} from "react-native";
import { estilos } from "../styleSheet/estilos";
import { Feather } from "@expo/vector-icons";


function FaturaFechada() {
    const Titulo1 = "Fatura Aberta";
    const Titulo2 = "Fatura Fechada";


    
var datas = ["22/06/2024 = ", "03/05/2024 = ", "02/02/2024 = "];
var lancamentos = [
    ['R$126,00 = parcela 1/1 - C&A Palladium'],
    ["R$77,00 = parcela 3/4 - C&A Batel"],
    ['R$25,00 = parcela 8/8 - C&A Estação'],
]




function mostra_dados({ item }) {
    return (
        <View>
            <Text style={{ fontSize: 16, paddingLeft: 20, paddingVertical: 10 }}>{item}</Text>
        </View>
    );
}

function mostra_Cab_Secao({ section }) {
    return (
        <View>
            <Text style={{ fontSize: 20, backgroundColor: '#f2f2f2', textAlign: 'center', color: '#0038a8' }}>{section.title}</Text>
        </View>
    );
}


return(
    <View style={{flex: 1 , paddingHorizontal: 15}}>
        <View style={estilos.ceaPayHead} >
        <Text style={{color: 'gray', fontSize: 18}}>{Titulo1}</Text>
        <Text style={[estilos.ceaPayHeadText,{ color: '#216f79',}]}>{Titulo2}</Text>
        </View>
        <View  style={{flex: 0.5}}>
    <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center', padding: 10, color: "#0038a8"}}>Julho</Text>
    <Text style={{fontSize: 18, textAlign: 'center'}}>Vencimento em 31/07/2024</Text>
    <Text style={{fontSize: 18,  textAlign: 'center', paddingTop: 10}}>Valor da Fatura</Text>
    <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: "#216f79"}}>R$228,00</Text>

    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
    <Feather name="check" color='#216f79' size={20} style={{paddingTop: 10}}/>

    <Text style={{fontSize: 18,  textAlign: 'center', paddingTop: 10, color:'#216f79'}}>  Fatura paga</Text>

      </View>

            
        </View>

        <View style={{alignItems: 'center', paddingBottom: 30 }} >
            <TouchableOpacity style={{borderWidth: 1, borderColor: '#0038a8', width: 300, height: 50,justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
               
            >
                <Text >Pagar Fatura</Text>
            </TouchableOpacity>
        </View>
        <ScrollView  style={estilos.ceaPayLancamentos}>
            <SectionList 
                sections={[
                    { title: datas[0], data: lancamentos[0] },
                    { title: datas[1], data: lancamentos[1] },
                    { title: datas[2], data: lancamentos[2] },

                    
                ]}
                renderItem={mostra_dados}
                renderSectionHeader={mostra_Cab_Secao}
                keyExtractor={(item, index) => item + index}
            />
        </ScrollView>
        
    </View>
);
}
export default FaturaFechada;