import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { LIBROS } from '@/data/libros';

export default function DetalleLibroScreen() {
  const { id } = useLocalSearchParams();
  const libro = LIBROS.find((l) => l.id === id);

  if (!libro) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Libro no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: libro.titulo }} />
      <Text style={styles.title}>{libro.titulo}</Text>
      <Text style={styles.detail}>Autor: {libro.autor}</Text>
      <Text style={styles.detail}>Año de publicación: {libro.anio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  detail: { fontSize: 18, color: '#333', marginBottom: 8 },
  error: { fontSize: 20, color: 'red', textAlign: 'center' },
});