

/* Zona1: Importaciones de componenetes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Perfil } from '../components/Perfil';


/* Zona2: Main - Hogar de los componentes */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>

      
      <Perfil estiloExt={styles.tarjetaRoja} nombre="Eduardo Barron" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>

    
      <Perfil 
      estiloExt={styles.tarjetaVerde}
      nombre="Eduardo" 
      carrera="Sistemas" 
      materia="Programacion Movil" 
      cuatri="9"></Perfil>

      <Perfil estiloExt={styles.tarjetaRoja} nombre="2222" carrera="Sistemas" materia="Programacion Movil" cuatri="9"></Perfil>



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
    justifyContent: 'flex-start',
    flexDirection:'column'
  },

  tarjetaRoja:{backgroundColor:'#FF6B6B'},
  tarjetaVerde:{backgroundColor:'#6BCB77'},
});
