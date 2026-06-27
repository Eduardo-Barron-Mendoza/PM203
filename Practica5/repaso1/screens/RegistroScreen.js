import { View, ScrollView, Text, TextInput, Alert, Button,StyleSheet, Platform, Switch, Pressable } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';




Platform
if(Platform.OS === "web"){
  Alert.alert=(titular, mensaje, boton) => {
    const list = Array.isArray(mensaje) ? mensaje : boton;
    if(list){
      if(window.confirm(titular)) list.find((b) => b.onPress)?.onPress();
    }else{
      window.alert(titular+ (mensaje ? "\n" + mensaje : ""));
    }
  };
}


/* Zona2: Main - Hogar de los componentes */
export default function RegistroScreen() {
  const [nombre, setNombre] = useState();
  const[carrera, setCarrera] = useState();
  const[semestre, setSemestre] = useState();
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const registro = ()=>{
    if (!nombre || !carrera || !semestre) {
      console.log("Entró al if");

      Alert.alert(
        "Campos incompletos",
        "Debes llenar todos los campos",
        [{ text: "Aceptar" }]
      );

      return;
    }
    
    if(!semestre.match(/^[0-9]+$/)){
      Alert.alert("Error", "El semestre debe ser un numero")
      setSemestre("");
      return;
    }
    Alert.alert(
      "Registro enviado",
      `Nombre: ${nombre}
      Carrera: ${carrera}
      Semestre: ${semestre}

      Taller: ${taller ? "Sí" : "No"}
      Constancia: ${constancia ? "Sí" : "No"}
      Deportes: ${deportes ? "Sí" : "No"}`,
      [
        {
          text: "Aceptar",
        },
      ]
    );
  }
  return (
    <ScrollView contentContainerStyle= {styles.container}>
      <View style={styles.input}>
        <Text style={styles.Titulo}>Registro de un Evento Universitario</Text>
        <TextInput
        style={styles.input}
        placeholder='Ingrese su nombre completo'
        placeholderTextColor="black"
        value={nombre}
        onChangeText={(texto)=> setNombre(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder='Ingrese su Carrera'
        placeholderTextColor="black"
        autoCapitalize="none"
        value={carrera}
        onChangeText={(texto)=> setCarrera(texto)}
        />


        <TextInput
        style={styles.input}
        placeholder='Ingrese el numero de su semestre actual'
        placeholderTextColor="black"
        value={semestre}
        onChangeText={(texto)=> setSemestre(texto)}
        />

        <Text style={styles.Titulo}>Opciones</Text>

        <View style={styles.fila}>
        <Text>¿Asistirá al taller?</Text>
        <Switch
          value={taller}
          onValueChange={setTaller}
        />
      </View>

      <View style={styles.fila}>
        <Text>¿Requiere constancia?</Text>
        <Switch
          value={constancia}
          onValueChange={setConstancia}
        />
      </View>

      <View style={styles.fila}>
        <Text>¿Participará en deportes?</Text>
        <Switch
          value={deportes}
          onValueChange={setDeportes}
        />
      </View>

        <Pressable style={styles.boton} onPress={registro}>
          <Text style={styles.textoBoton}>Enviar registro</Text>
        </Pressable>

        <StatusBar style="auto" />
      </View>

    </ScrollView>
  );
}

/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 24,
    gap: 12,
  },
  Titulo: {
    padding: 10,
    fontSize: 20,
    alignContent: "stretch",
    fontWeight: 500,

  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 3,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#ffffff",
    fontWeight: 300,
   
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  boton: {
    backgroundColor: "blue",
    padding: 10,
  },

  textoBoton: {
    color: "white",
    textAlign: "center",
  },
});