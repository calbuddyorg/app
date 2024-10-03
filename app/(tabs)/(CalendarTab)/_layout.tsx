import { Stack } from 'expo-router';

export default function CalendarTabScreen() {

  return (
    <Stack>

      <Stack.Screen name="index" options={{ headerShown: false }} />


    </Stack>
  );
}