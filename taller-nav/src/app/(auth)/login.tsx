import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const handleLogin = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Iniciar Sesión</Text>
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});