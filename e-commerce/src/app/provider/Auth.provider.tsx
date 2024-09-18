"use client";

import { api } from "@/lib/axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import { toast } from "react-toastify";


interface User {

    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const authPaths = ["/login"];

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [user, setUser] = useState<User | null>(null);
    const [isReady, setIsReady] = useState(false);
    const [redirectAfterLogin, setRedirectAfterLogin] = useState<string>("");

    const login = async (email: string, password: string) => {
        try {
            const res = await api.post<{ token: string, user: User }>("/login", { email, password });
            console.log("Login Response:", res.data); // Debugging line

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                setUser(res.data.user);
                toast.success("amjilttai newterlee")
                router.push(redirectAfterLogin || "/");
            } else {
                throw new Error("Login failed. No token received.");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error("Login Error:", err); // Debugging line
                toast.error(err.message || "An error occurred");
            } else {
                toast.error("An unknown error occurred");
            }
        }
    };


    const register = async (name: string, email: string, password: string) => {
        try {
            await api.post("/register", { name, email, password });

            setRedirectAfterLogin("/");
            router.push("/login");
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err);
                toast.error(err.message || "An error occurred");
            } else {
                toast.error("An unknown error occurred");
            }
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        router.push("/login");
    };

    useEffect(() => {
        const loadUser = async () => {
            try {
                setIsReady(false);

                const token = localStorage.getItem("token");

                if (!token) return;

                const res = await api.get<User>("/user/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(res, "resss");


                setUser(res.data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.log(err);
                    toast.error("Your session has expired. Please login again.");
                } else {
                    toast.error("An unknown error occurred");
                }
                localStorage.removeItem("token");
            } finally {
                setIsReady(true);
            }
        };

        loadUser();
    }, []);

    useEffect(() => {
        if (authPaths.includes(pathname)) return;

        if (!isReady) return;

        // if (!user) router.replace("/login");
    }, [pathname, user, isReady]);

    if (!isReady) return null;

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);