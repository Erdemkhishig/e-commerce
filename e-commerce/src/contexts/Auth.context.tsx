// // // context/AuthContext.tsx
// // import React, { createContext, useContext, useState } from 'react';
// // import axios from 'axios';

// // interface User {
// //     id: string;
// //     email: string;
// //     name: string;
// // }

// // interface AuthContextProps {
// //     user: User | null;
// //     token: string | null;
// //     login: (email: string, password: string) => Promise<void>;
// //     register: (name: string, email: string, password: string) => Promise<void>;
// //     logout: () => void;
// // }

// // const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// // export function AuthProvider({ children }: { children: React.ReactNode }) {
// //     const [user, setUser] = useState<User | null>(null);
// //     const [token, setToken] = useState<string | null>(null);

// //     const login = async (email: string, password: string) => {
// //         try {
// //             const response = await axios.post('http://localhost:3001/api/login', { email, password });
// //             setUser(response.data.user);
// //             setToken(response.data.token);
// //             localStorage.setItem('token', response.data.token);
// //         } catch (error) {
// //             console.error('Login failed', error);
// //         }
// //     };

// //     const register = async (name: string, email: string, password: string) => {
// //         try {
// //             await axios.post('http://localhost:3001/api/register', { name, email, password });
// //             await login(email, password); // Automatically log in after registration
// //         } catch (error) {
// //             console.error('Registration failed', error);
// //         }
// //     };

// //     const logout = () => {
// //         setUser(null);
// //         setToken(null);
// //         localStorage.removeItem('token');
// //     };

// //     return (
// //         <AuthContext.Provider value={{ user, token, login, register, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // }

// // export const useAuth = () => useContext(AuthContext);

// "use client";

// import { api } from "@/lib/axios";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState, createContext, useContext } from "react";
// import { toast } from "react-toastify";

// const AuthContext = createContext();

// const authPaths = ["/login", "/register"];

// export const AuthProvider = ({ children }) => {
//     const router = useRouter();
//     const pathname = usePathname();

//     const [user, setUser] = useState(null);
//     const [isReady, setIsReady] = useState(false);

//     const login = async (email, password) => {
//         try {
//             const res = await api.post("/auth/login", { email, password });

//             localStorage.setItem("token", res.data.token);

//             setUser(res.data.user);

//             router.push("/info1");
//         } catch (err) {
//             console.log(err);
//             toast.error(err.message);
//         }
//     };

//     const register = async (name, email, password) => {
//         try {
//             await api.post("/auth/register", {
//                 name,
//                 email,
//                 password,
//             });

//             router.push("/login");
//         } catch (err) {
//             console.log(err);
//             toast.error(err.response.data.message);
//         }
//     };

//     useEffect(() => {
//         const loadUser = async () => {
//             try {
//                 setIsReady(false);

//                 const token = localStorage.getItem("token");

//                 if (!token) return;

//                 const res = await api.get("/users/me", {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 setUser(res.data);
//             } catch (err) {
//                 console.log(err);
//                 localStorage.removeItem("token");
//                 toast.error("Your session has expired. Please login again.");
//             } finally {
//                 setIsReady(true);
//             }
//         };

//         loadUser();
//     }, []);

//     useEffect(() => {
//         if (authPaths.includes(pathname)) return;

//         if (!isReady) return;

//         if (!user) router.replace("/login");
//     }, [pathname, user, isReady]);

//     if (!isReady) return null;

//     return (
//         <AuthContext.Provider value={{ user, login, register }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);