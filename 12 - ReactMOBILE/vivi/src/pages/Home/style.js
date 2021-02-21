import React from 'react';
import { StyleSheet, Platform  } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh":"100%"
        //web 100vh
    },
    fundoImg: {    
        flex : 1 ,  
        justifyContent: 'center',
        alignItems: 'center',         
        resizeMode: 'cover',
        width: '100%',
    },   
    titulo: {        
        padding:8,         
        fontSize:41,
        fontWeight:'bold',
        color: '#000',
    },
    input: {
        marginTop:10,
        padding:15,
        width: 300,
        backgroundColor: '#fff',
        fontSize:15,
        fontWeight:'bold',
        borderRadius: 10,
    },
    botao:{
        width:300,
        height: 42,
        backgroundColor: '#8B4513',
        marginTop:10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    btnTexto:{
        color: '#fff',
        fontSize:20,
        fontWeight:'bold',
    }
   
    
});

export default styles;