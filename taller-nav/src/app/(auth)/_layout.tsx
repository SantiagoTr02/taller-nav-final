import { Slot } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Biblioteca</Text>
      </View>
      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4A90E2' },
  header: { padding: 40, alignItems: 'center' },
  title: { fontSize: 28, color: '#FFF', fontWeight: 'bold' },
  content: { flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 },
});