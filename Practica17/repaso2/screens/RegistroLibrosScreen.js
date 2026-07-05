import { useState, useEffect } from 'react';
import {View,Text,TextInput,Pressable,StyleSheet,FlatList,Image,ImageBackground,SafeAreaView,
  ActivityIndicator,KeyboardAvoidingView,Platform,Alert,Dimensions,} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

export default function RegistroLibros() {
  const [splash, setSplash] = useState(true);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [siguienteId, setSiguienteId] = useState(1);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000);
  }, []);

  const agregarLibro = () => {
    if (!titulo || !autor || !genero) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos');
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: siguienteId,
        titulo,
        autor,
        genero,
      };

      setLibros((listaAnterior) => [...listaAnterior, nuevoLibro]);
      setSiguienteId((anterior) => anterior + 1); 

      setTitulo('');
      setAutor('');
      setGenero('');
      setGuardando(false);

      Alert.alert('Libro guardado', 'El libro se guardo correctamente');
    }, 4000);
  };

  
  if (splash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('../assets/cargando2.png')}
          resizeMode="contain"
          style={styles.splashImagen}
        />
        <Text style={styles.splashTexto}>repaso2</Text>
        <StatusBar style="auto" />
      </View>
    );
  }


  return (
    <ImageBackground
      source={require('../assets/libros.png')}
      resizeMode="cover"
      style={styles.fondo}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="auto" />
        <KeyboardAvoidingView
          style={styles.contenedor}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Text style={styles.titulo}>Catálogo de Libros</Text>

          <TextInput
            style={styles.input}
            placeholder="Título del libro"
            placeholderTextColor="black"
            value={titulo}
            onChangeText={setTitulo}
          />

          <TextInput
            style={styles.input}
            placeholder="Autor"
            placeholderTextColor="black"
            value={autor}
            onChangeText={setAutor}
          />

          <TextInput
            style={styles.input}
            placeholder="Género"
            placeholderTextColor="black"
            value={genero}
            onChangeText={setGenero}
          />

          <Pressable style={styles.boton} onPress={agregarLibro} disabled={guardando}>
            {guardando ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.textoBoton}>Agregar libro</Text>
            )}
          </Pressable>

          <Text style={styles.contador}>
            Libros registrados: {libros.length}
          </Text>
          <FlatList
            style={styles.lista}
            data={libros}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.libroItem}>
                <Text style={styles.libroTitulo}>{item.titulo}</Text>
                <Text>Autor: {item.autor}</Text>
                <Text>Género: {item.genero}</Text>
                </View>
            )}
          />

        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImagen: {
    width: 180,
    height: 180,
  },
  splashTexto: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  fondo: {
    width,
    height,
  },
  safeArea: {
    flex: 1,
  },
  contenedor: {
    flex: 1,
    padding: 24,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 3,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 3,
    marginBottom: 16,
  },
  textoBoton: {
    color: 'white',
    textAlign: 'center',
  },
  lista: {
    flex: 1,
  },
  libroItem: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 3,
    marginBottom: 8,
  },
  libroTitulo: {
    fontWeight: 'bold',
  },
});