

/* Zona1: Importaciones de componenetes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';

/* Zona2: Main - Hogar de los componentes */
export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'safeArea':
            return <SafeAreaScreen/>
        case 'pressable':
            return <PressableScreen/>
        case 'textInput':
            return <TextInputScreen/>
        case 'flatList':
            return <FlatListScreen/>
        case 'imageBackground':
            return <ImageBackgroundScreen/>
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>
        case 'modal':
            return <ModalScreen/>
        
        case 'menu':
            default:
                return (
                    <View style={styles.container}>

                        <Text style={styles.titulo}>Menu de Practicas: </Text>
                        <Button onPress={()=>setScreen('tarjetas')} title='Practica: Tarjetas'></Button>

                        <Button onPress={()=>setScreen('safeArea')} title='Practica: SafeArea'></Button>

                        <Button onPress={()=>setScreen('pressable')} title='Practica: Pressable'></Button>

                        <Button onPress={()=>setScreen('textInput')} title='Practica: TextInput'></Button>

                        <Button onPress={()=>setScreen('flatList')} title='Practica: FlatList'></Button>

                        <Button onPress={()=>setScreen('imageBackground')} title='Practica: ImageBackground'></Button>

                        <Button onPress={()=>setScreen('activityIndicator')} title='Practica: ActivityIndicator'></Button>

                        <Button onPress={()=>setScreen('modal')} title='Practica: Modal'></Button>

                        <StatusBar style="auto" />

                    </View>
                );
  
    }

}


/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'column'
  },

  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  }

});
