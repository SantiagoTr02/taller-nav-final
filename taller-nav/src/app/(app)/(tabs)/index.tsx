import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { LIBROS } from '@/data/libros';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={LIBROS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => router.push(`/libro/${item.id}`)}
          >
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.author}>{item.autor}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 16, backgroundColor: '#f9f9f9', marginBottom: 12, borderRadius: 8, borderWidth: 1, borderColor: '#eee' },
  title: { fontSize: 18, fontWeight: 'bold' },
  author: { fontSize: 14, color: '#666', marginTop: 4 },
});