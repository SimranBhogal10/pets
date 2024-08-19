import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Props } from "./useCart";

type User = {
  // email: string,
  // name: string,
  // password: string
  [x:string] : any
}

type AuthContextType = {
    isLoggedIn: boolean;
    isLoading: boolean;
    signup: (userData: User) => void;
    login: (userData: User) => void;
    logout: () => void;
    setIsLoggedIn: any
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = (children: Props) =>{
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user');
        const userLoggedIn = localStorage.getItem('isUserLoggedIn');
      
      if (userLoggedIn=='true' && user) {
        setIsLoggedIn(true);
      }
    }
    }, []);
  
    const signup = (userData: User) => {
      setIsLoading(true);
      const user = localStorage.getItem("user");
      if(user) toast.error('User already registered');
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isUserLoggedIn', 'true');
      setIsLoggedIn(true);
      router.push('/');
    };

    const login = (userData: User) =>{
      setIsLoading(true);
      const user = localStorage.getItem("user");
        if(user){
            const loginUser = JSON.parse(user);
            if(loginUser.email !== userData.email || loginUser.password !== userData.password){
                setIsLoading(false);
                toast.error('Invalid credentials');
            }
            else{
                toast.success('Login successful');
                localStorage.setItem('isUserLoggedIn', 'true');
                setIsLoggedIn(true);
                router.push('/');
            }
        }
        else{
          toast.error('Please register first');
        }
    }
  
    const logout = () => {
      setIsLoggedIn(false);
      localStorage.setItem('isUserLoggedIn', 'false');
      console.log('inside log out',)
      router.push('/login');
    }; 

    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, signup, isLoading }} {...children} />
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
  