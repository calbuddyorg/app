import { Redirect, Stack } from 'expo-router';
import { Text } from 'react-native';

import { useSession } from '@/contexts/AuthContext';

export default function AppLayout() {
  const { session, isLoading } = useSession();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}

// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { getCurrentUser } from 'aws-amplify/auth';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect, useState } from 'react';
// import 'react-native-reanimated';
// import { View, ActivityIndicator } from 'react-native';

// import { AuthProvider } from '@/contexts/AuthContext'; // Wrap the entire app with this provider
// import { useColorScheme } from '@/hooks/useColorScheme';

// // Initialize Amplify
// import '@/services/aws-config';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
//   });
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       try {
//         const currentUser = await getCurrentUser();
//         console.log('response user:', currentUser);
//         setUser(currentUser);
//       } catch (error) {
//         console.log('User not authenticated', error);
//         setUser(null);
//       } finally {
//         setIsLoading(false); // Stop loading once authentication check is done
//       }
//     };

//     checkAuthStatus();
//   }, []);

//   useEffect(() => {
//     if (loaded && !isLoading) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, isLoading]);

//   if (isLoading || !loaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <AuthProvider>
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack>
//           {user ? (
//             <>
//               <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//               <Stack.Screen name="+not-found" />
//             </>
//           ) : (
//             <>
//               <Stack.Screen name="auth/SignIn" options={{ headerShown: false }} />
//               <Stack.Screen name="auth/SignUp" options={{ headerShown: false }} />
//             </>
//           )}
//         </Stack>
//       </ThemeProvider>
//     </AuthProvider>
//   );
// }
