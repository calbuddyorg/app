import { StyleSheet, Text, View } from "react-native";
import { Button, SafeAreaView } from 'react-native';

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import {
  AWS_USER_POOL_ID, 
  AWS_USER_POOL_WEB_CLIENT_ID, 
  AWS_IDENTITY_POOL_ID 
} from '@env';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: AWS_USER_POOL_WEB_CLIENT_ID,
      userPoolId: AWS_USER_POOL_ID,
      identityPoolId: AWS_IDENTITY_POOL_ID,
    },
  },
  }
);

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
    alignSelf: "flex-end",
  },
});
