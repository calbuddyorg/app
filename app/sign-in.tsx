import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '@/contexts/AuthContext';

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Authenticator.Provider>
        <Authenticator />
      </Authenticator.Provider>
      {/* <Text
        onPress={() => {
          signIn({
            username: '44d87428-b0b1-7098-30f5-8866d212ac49',
            password: '12345678',
            options: {
              authFlowType: 'USER_PASSWORD_AUTH',
            },
          });
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}
      >
        Sign In
      </Text> */}
    </View>
  );
}
