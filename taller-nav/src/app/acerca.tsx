import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function AcercaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de esta App</Text>
      <Text style={styles.description}>
        Esta es una aplicación de demostración desarrollada para el taller de navegación con Expo Router.
      </Text>
      <Button title="Cerrar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 24, color: '#555' },
});