

/* Zona1: Importaciones de componenetes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuScreen from './screens/MenuScreen';


/* Zona2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <MenuScreen></MenuScreen>

      <StatusBar style="auto" />

    </View>
  );
}

/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column'
  },

});
