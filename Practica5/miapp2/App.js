

/* Zona1: Importaciones de componenetes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';


/* Zona2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>

      
    

      <Text>------------ Componentes Nativos ------------</Text>
      <Image source={require('./assets/wave.png')}/>
      <Text>Hola mundo React Native</Text>
      <Text>------------ Componentes Nativos ------------</Text>

      <Text>------------ Componente Propio simple ------------</Text>
      <Saludo></Saludo>

      <Text>------------ Componente Propio simple ------------</Text>
      <Saludo2></Saludo2>

      <StatusBar style="auto" />

    </View>
  );
}

/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
