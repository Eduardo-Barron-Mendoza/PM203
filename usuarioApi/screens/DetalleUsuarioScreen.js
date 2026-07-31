import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { useLocalSearchParams, useRouter, useFocusEffect } from 'expo-router';

export default function DetalleUsuarioScreen() {
  const { id, nombre: nombreInicial, edad: edadInicial } = useLocalSearchParams();
  const router = useRouter();
  const [nombre, setNombre] = useState(nombreInicial);
  const [edad, setEdad] = useState(edadInicial);
  const [modalVisible, setModalVisible] = useState(false);

  const obtenerUsuario = async () => {
    try {
      const respuesta = await fetch(`http://192.168.1.40:5000/v1/usuarios/`);
      const datos = await respuesta.json();
      const encontrado = datos.usuarios.find((usuario) => String(usuario.id) === String(id));
      if (encontrado) {
        setNombre(encontrado.nombre);
        setEdad(encontrado.edad);
      }
    } catch (error) {
      console.log("Error API: ", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      obtenerUsuario();
    }, [])
  );

  const ejecutarEliminacion = async () => {
    try {
      await fetch(`http://192.168.1.40:5000/v1/usuarios/${id}`, {
        method: "DELETE",
        headers: { "Authorization": "Basic " + btoa("admin:1234") },
      });
      setModalVisible(false);
      router.back();
    } catch (error) {
      console.log("Error al eliminar: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Detalles del Usuario</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.valor}>{nombre}</Text>

        <View style={styles.linea} />

        <Text style={styles.label}>Edad</Text>
        <Text style={styles.valor}>{edad} años</Text>
      </View>

      <Pressable
        style={styles.botonActualizar}
        onPress={() => router.push({ pathname: '/editar', params: { id, nombre, edad } })}
      >
        <Text style={styles.textoBoton}>Actualizar</Text>
      </Pressable>

      <Pressable style={styles.botonEliminar} onPress={() => setModalVisible(true)}>
        <Text style={styles.textoBoton}>Eliminar</Text>
      </Pressable>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitulo}>Confirmar eliminación</Text>
            <Text style={styles.modalMensaje}>
              ¿Estás seguro de que deseas eliminar al usuario {nombre}?
            </Text>

            <View style={styles.modalBotones}>
              <Pressable style={styles.botonCancelar} onPress={() => setModalVisible(false)}>
                <Text style={styles.textoCancelar}>Cancelar</Text>
              </Pressable>

              <Pressable style={styles.botonConfirmar} onPress={ejecutarEliminacion}>
                <Text style={styles.textoBoton}>Sí, eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 32,
    paddingTop: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    paddingHorizontal: 7,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 18,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  valor: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },
  botonActualizar: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 8,
  },
  botonEliminar: {
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 22,
    alignItems: 'center',
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  modalMensaje: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalBotones: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  botonCancelar: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonConfirmar: {
    flex: 1,
    backgroundColor: '#DC2626',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoCancelar: {
    color: '#1F2937',
    fontWeight: 'bold',
  },
});