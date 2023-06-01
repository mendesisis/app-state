import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  const [fonteCarregada, setFonteCarregada] = useState(false);
  

  async function loadFonts() {
    await Font.loadAsync({
     playfairdisplay_regular: require('./assets/Playfair_Display/static/PlayfairDisplay-Regular.ttf'),
     playfairdisplay_italic: require('./assets/Playfair_Display/static/PlayfairDisplay-Italic.ttf'),
     playfairdisplay_black: require('./assets/Playfair_Display/static/PlayfairDisplay-Black.ttf')
    });
    
  }

  useEffect(()=>{
    loadFonts()
    .then (()=>{
      setFonteCarregada(true);
    })
    .catch((error)=>{
      console.log('Ocorreu um erro', error);
    })


  }, []);
  
  return (
    <View style={styles.container}>
      <TouchableHighlight
      style={{width:130,
      borderRadius: 4,
      backgroundColor: 'black',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      height: 40}}>
      
     
      {fonteCarregada ?
      <Text style={{fontFamily:'playfairdisplay_regular', fontSize: 50}}>Click!</Text>
      :
      <Text></Text>
     }   
        </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
