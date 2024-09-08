import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: process.env.EXPO_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID as string,
      userPoolId: process.env.EXPO_PUBLIC_AWS_USER_POOL_ID as string,
      identityPoolId: process.env.EXPO_PUBLIC_AWS_IDENTITY_POOL_ID as string,
    },
  },
});
