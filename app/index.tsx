import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: process.env.AWS_USER_POOL_WEB_CLIENT_ID as string,
      userPoolId: process.env.AWS_USER_POOL_ID as string,
      identityPoolId: process.env.AWS_IDENTITY_POOL_ID as string,
    },
  },
});

const SignOutButton = () => {
  const { signOut } = useAuthenticator();

  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView>
          <SignOutButton />
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
  );
}

const styles = StyleSheet.create({
  signOutButton: {
    alignSelf: 'flex-end',
  },
});
