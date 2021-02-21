import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    fundoImg:{
        width:'100%',
    },
   
    logo: {      
        color:'#000',
        fontSize:40,
        fontWeight:'bold',
        marginTop:20,
        padding:20,
        display: 'flex',
        textAlign:'center',        
    },
    item : {
        flex : 1 ,
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 20,
        backgroundColor : 'white',
        width : 400,              
        borderRadius : 10,
        padding : 15,
        alignSelf : 'center',
        alignItems : 'center'
      }
});

export default style;