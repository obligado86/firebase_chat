import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean | undefined>(undefined);

    useEffect(() => {
        //setTimeout(() => {
            setIsAuthenticated(false);
        //}, 3000);
    }, []);

    const login = async () => {
        try {
            
        } catch (e) {
            
        }
    };
    const logout = async () => {
        try {
            
        } catch (e) {
            
        }
    };
    const register = async (email, password, username, profileUrl) => {
        try {
            
        } catch (e) {
            
        }
    };

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, register, logout, }}>
            {children}
        <AuthContext.Provider>
    );
};

export function useAuth() {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth must be inside AuthenticationProvider');
    }
    return value;
};
