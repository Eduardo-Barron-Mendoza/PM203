

/* Zona1: Importaciones de componenetes y archivos */
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';


/* Zona2: Main - Hogar de los componentes */
export default function SafeAreaScreen() {

  const [mensaje, setMensaje] = useState(
    'Bienvenidos a nuestra practica de  SafeAreaView y ScrollView');
  return (
    <SafeAreaView style= {styles.container}>

      <StatusBar style="auto"/>

      <ScrollView contentContainerStyle = {styles.scrollContainer}
        showsVerticalScrollIndicator ={true}>

      <Text style={styles.titulo}>
    
      Practica: SafeAreaView y ScrollView
      </Text>
      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>
          Integrantes:
        </Text>
        <Text style={styles.texto}>
          Rafael Baltazar
          Mary Camargo
          Gabriel Villafuerte
        </Text>
      </View>


      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>
          Hobbies:
        </Text>
        <Text style={styles.texto}>
          Jugar videojuegos 
          Ver peliculas
        </Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>
          Comidas favoritas:
        </Text>
        <Text style={styles.texto}>
          Tacos
          Hamburguesas
          Chilaquiles
        </Text>
      </View>


      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>
          Colores favoritos:
        </Text>
        <Text style={styles.texto}>
          Verde
          Blanco
          Rojo
        </Text>
      </View>


      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>
          Equipos favoritos:
        </Text>
        <Text style={styles.texto}>
          Barcelona
          Man. Untd
          Veracruz
        </Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>
          Peliculas:
        </Text>
        <Text style={styles.texto}>
          Shrek
          Titanic
          La monja
        </Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>
          Informacion extra:
        </Text>
        <Text style={styles.texto}>
          Este ejemplo muestra el uso del SafeAreaView y el ScrollView
        </Text>
      </View>

       <View style={styles.tarjeta}>
          <Text style={styles.subtitulo}>
            Ejemplo de State
          </Text>

          <Text style={styles.texto}>
            {mensaje}
          </Text>

          <Pressable
            style={styles.boton}
            onPress={() =>
              setMensaje(
                'El State cambió correctamente'
              )
            }
          >
            <Text style={styles.textoBoton}>
              Cambiar Mensaje
            </Text>
          </Pressable>
        </View>
      </ScrollView>

    </SafeAreaView>


    
  );
}

/* Zona3: Estilos y Posicionamiento */
/* ESTILOS */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  scrollContainer: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 40,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0F172A',
    marginTop: 10,
    marginBottom: 20,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 5,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 10,
  },

  texto: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 24,
  },

  boton: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },

  textoBoton: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

});