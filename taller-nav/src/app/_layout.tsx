import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="libro/[id]" options={{ title: 'Detalle' }} />
        <Stack.Screen name="acerca" options={{ presentation: 'modal', title: 'Acerca de' }} />
      </Stack>
    </GestureHandlerRootView>
  );
}