// context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextProps {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password });
            setUser(response.data.user);
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            await axios.post('/api/register', { name, email, password });
            await login(email, password); // Automatically log in after registration
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);