import { Text, View } from 'react-native';

import { useSession } from '@/contexts/AuthContext';

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}

// import { Link } from 'expo-router';
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// import { useAuth } from '@/contexts/AuthContext';

// export default function HomeScreen() {
//   const { user, signOut, signIn } = useAuth();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>Welcome, {user?.signInDetails?.loginId}!</Text>
//       <Button title="Sign Out" onPress={signOut} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   welcome: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });
