import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { apiConfig } from '../config/api';

export default function Index() {
  const [ip, setIp] = useState('');
  const router = useRouter();

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const guardarIp = () => {
    if (ip.trim() === '') {
      mostrarMensaje("Vacío", "Escribe la IP de tu computadora");
      return;
    }

    apiConfig.baseUrl = `http://${ip.trim()}:5000`;
    router.replace('/alta');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Conectar con la API</Text>
        <Text style={styles.subtitulo}>
          Escribe la IP local de la computadora donde corre la API
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ej. 192.168.1.40"
          value={ip}
          onChangeText={setIp}
          autoCapitalize="none"
        />

        <Pressable style={styles.boton} onPress={guardarIp}>
          <Text style={styles.textoBoton}>Continuar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 25 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#1F2937', marginBottom: 8 },
  subtitulo: { fontSize: 14, color: '#4B5563', marginBottom: 20 },
  input: {
    height: 50, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 10,
    paddingHorizontal: 15, marginBottom: 18, backgroundColor: '#F9FAFB', fontSize: 16,
  },
  boton: { backgroundColor: '#2563EB', paddingVertical: 15, borderRadius: 10, alignItems: 'center' },
  textoBoton: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});