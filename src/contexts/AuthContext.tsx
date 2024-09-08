import { signIn as signInWithCognito, signOut as signOutWithCognito } from 'aws-amplify/auth';
import type { SignInInput } from 'aws-amplify/auth';
import { useContext, createContext, type PropsWithChildren } from 'react';

import { useStorageState } from './useStorageState';

const AuthContext = createContext<{
  signIn: (input: SignInInput) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async (input: SignInInput) => {
          try {
            const user = await signInWithCognito(input);
            console.dir(user, { depth: null });
            setSession('frank');
          } catch (error) {
            console.error('Error signing in', { error });
          }
        },
        signOut: async () => {
          try {
            await signOutWithCognito();
            setSession(null);
          } catch (error) {
            console.error('Error signing out', error);
          }
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
