import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { apiConfig } from '../config/api';

export default function EditarUsuarioScreen() {
  const { id, nombre: nombreInicial, edad: edadInicial } = useLocalSearchParams();
  const router = useRouter();

  const [nombre, setNombre] = useState(nombreInicial ?? '');
  const [edad, setEdad] = useState(edadInicial ?? '');
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const actualizarUsuario = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje("Vacíos", "Todos los campos son obligatorios");
      return;
    }

    try {
      setCargando(true);
      const respuesta = await fetch(`${apiConfig.baseUrl}/v1/usuarios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("admin:1234"),
        },
        body: JSON.stringify({ nombre: nombre, edad: edad }),
      });
      const datos = await respuesta.json();
      console.log(datos);
      mostrarMensaje("Éxito", "Se actualizó el usuario");
      router.back();
    } catch (error) {
      console.log("Error API", error);
      mostrarMensaje("Error", "No fue posible actualizar");
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Editar Usuario</Text>
      <View style={styles.card}>
        

        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad del usuario"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable style={styles.boton} onPress={actualizarUsuario} disabled={cargando}>
          <Text style={styles.textoBoton}>
            {cargando ? "Guardando" : "Guardar cambios"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    paddingHorizontal: 7,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#16A34A',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});