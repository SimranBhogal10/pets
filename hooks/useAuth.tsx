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
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = (children: Props) =>{
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  
    useEffect(() => {
      const user = localStorage.getItem('user');
      const userLoggedIn = localStorage.getItem('isUserLoggedIn');
      console.log('userLoggedIn:::', userLoggedIn);
      if (userLoggedIn=='true' && user) {
        setIsLoggedIn(true);
      }
    }, []);
  
    const signup = (userData: User) => {
      setIsLoading(true);
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
            // console.log(loginUser);
            // console.log(userData);
            // console.log(loginUser.password !== userData.password);
            
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
    }
  
    const logout = () => {
      setIsLoggedIn(false);
      localStorage.setItem('isUserLoggedIn', 'false');
      console.log('inside log out',)
      router.push('/login');
    }; 

    return <AuthContext.Provider value={{ isLoggedIn, login, logout, signup, isLoading }} {...children} />
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
  