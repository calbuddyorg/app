import { Stack } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';

export default function CalendarTabScreen() {
  return (
    <Stack>
      

      
      <Stack.Screen name="index" options={{ headerShown: false }} />

    </Stack>
  );
}