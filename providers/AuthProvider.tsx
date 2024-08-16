'use client'

import { AuthContextProvider } from "@/hooks/useAuth";

type AuthProviderProps = {
    children: React.ReactNode;
  }
  
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    
    return (
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    );
  };

  export default AuthProvider;