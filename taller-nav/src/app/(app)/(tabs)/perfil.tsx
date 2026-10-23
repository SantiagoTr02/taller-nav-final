import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil de Usuario</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Acerca de"
          onPress={() => router.push('/acerca')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Cerrar sesión"
          color="red"
          onPress={() => router.replace('/(auth)/login')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 20, marginBottom: 30 },
  buttonContainer: { marginVertical: 8, width: '80%' },
});