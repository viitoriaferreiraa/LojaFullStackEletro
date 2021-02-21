import React from 'react';
import
{ View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert, 

} from 'react-native';

import Fundo from '../../assets/imgHome.jpg';

import styles from './style';

export default function Home({navigation}){

  function Clicou() {
    Alert.alert("Garagem Velha","Cadastro realizado com sucesso");
    navigation.navigate("Products")
  }
    return(  
        <View style={styles.caixa}>       
            <ImageBackground style={styles.fundoImg} source={Fundo}>
              <Text style={styles.titulo}>My Boot</Text>   
              <TextInput 
                style={styles.input}
                placeholder="Digite seu email ..."              
              />  
                <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite seu senha ..."              
              />  
              <TouchableOpacity
              style={styles.botao}
              onPress={Clicou} 
              >
                <Text style={styles.btnTexto}>Login</Text>
              </TouchableOpacity> 

                  
            </ImageBackground> 

        </View>    
       
    );
}