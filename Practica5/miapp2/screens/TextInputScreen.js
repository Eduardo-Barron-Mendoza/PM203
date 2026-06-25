

/* Zona1: Importaciones de componenetes y archivos */
import { View, ScrollView, Text, TextInput, Alert, Button,StyleSheet,Platform } from 'react-native';
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
export default function TextInputScreen() {
  const [nombre, SetNombre] = useState();
  const[correo, SetCorreo] = useState();
  const[contrasena, SetContrasena] = useState();
  const[numero, SetNumero] = useState();
  const[bio, SetBio] = useState();

  const registro = ()=>{
    if(!nombre || !correo || !contrasena || !numero)
    {
      Alert.alert("Faltan datos", "Completa los campos faltantes")
      return;
    }
    if(!correo.includes("@") || !correo.includes(".com")){
      Alert.alert("Correo invalido", "El correo debe contener @ y .com")
      return;
    }

    if(!numero.match(/^[0-9+ ]+$/)){
      Alert.alert("Numero invalido", "El numero solo debe contener numeros del 0-9")
      SetNumero("");
      return;
    }
    Alert.alert(
    `Registrar ${nombre}`,
    "",
    [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Si",
        onPress: () => Alert.alert("Exito", "Usuario registrado correctamente")
      }
    ]
  );
  }
  return (
    <ScrollView contentContainerStyle= {styles.container}>
      <View style={styles.input}>
        <Text style={styles.Titulo}>Formunalrio de registro de usuario</Text>
        <TextInput
        style={styles.input}
        placeholder='Ingrese su nombre'
        placeholderTextColor="black"
        autoCapitalize="words"
        value={nombre}
        onChangeText={(texto)=> SetNombre(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder='Ingrese su correo electronico'
        placeholderTextColor="black"
        keyboardType="email-address"
        autoCapitalize="none"
        value={correo}
        onChangeText={(texto)=> SetCorreo(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder='Ingrese su contraseña de minimo 6 caracteres'
        placeholderTextColor="black"
        secureTextEntry={true}
        autoCapitalize="none"
        value={contrasena}
        onChangeText={(texto)=> SetContrasena(texto)}
        />


        <TextInput
        style={styles.input}
        placeholder='Ingrese su numero de telefono'
        placeholderTextColor="black"
        keyboardType="number-pad"
        maxLength={12}
        value={numero}
        onChangeText={(texto)=> SetNumero(texto)}
        />

        <TextInput
        style={styles.input}
        placeholder='Cuentanos sobre ti (Opcional)'
        placeholderTextColor="black"
        multiline={true}
        numberOfLines={4}
        maxLength={20}
        autoCapitalize="none"
        value={bio}
        onChangeText={(texto)=> SetBio(texto)}
        />

        <Button title="Registrar" color="red" onPress={registro}/>
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
    padding: 30,
    fontSize: 20,
    alignContent: "stretch",
  },
  input: {
    borderWidth: 3,
    borderColor: "#e6e6e6",
    borderRadius: 3,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#ffffff",
  },
});