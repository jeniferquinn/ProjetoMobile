import { StyleSheet } from "react-native";



const estilos = StyleSheet.create({ 

fundo: {flex: 1, backgroundColor: 'white'},

menu: { flex: 0.05, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,
        marginTop: 70, 
}, 

menuTexto:{ fontSize: 18}, 

viewImage: {flex: 0.7 },

imagem: {width: 'auto', height: 555 }, 

viewceapay: {flex: 0.2, justifyContent: 'center', alignItems: 'center', marginTop: 200},

ceapay: {width: 400, height: 70, resizeMode: 'contain'}, 

viewCategorias: {flex: 0.5, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center'}, 
viewMenu:{ flex:0.18, paddingHorizontal: 10, paddingBottom: 20}, 
imageMenu: {width: 350, height: 50, resizeMode: 'contain'}, 

botao: { width: 300, height: 70, backgroundColor: 'lightgray', 
    borderRadius: 8, color: 'white', fontSize: 20,  textAlign: 'center', paddingTop: 20
}, 
entradaTexto: { 
    width: 300, 
    height: 50, 
    borderBottomColor: 'gray', 
    borderBottomWidth: 1, 
    marginHorizontal: 10, 
    padding: 10,
    marginTop:15
}, 
camposEntrar: {flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
 paddingTop: 50}, 

card: {flexDirection: "column", backgroundColor: '#f2f2f2', width: 60, height: 60, borderRadius: 6, alignItems: 'center', margin: 10},


ceaPayLancamentos: { marginHorizontal: 10, backgroundColor: 'white', flex: 0.78 },

ceaPayHead: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around'
},
ceaPayHeadText: {
    fontSize: 18,
   

}



});
export {estilos}