"use client";
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAuth } from "@/app/provider/Auth.provider";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const { login } = useAuth();

    const handleSubmit = async () => {
        try {
            await login(email, password);
        } catch (err: any) {
            setError(err.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-80">
            <div className="w-[35%] flex justify-center items-center flex-col gap-8 mt-20">
                <p className="text-2xl font-black">Нэвтрэх</p>
                <Input className="rounded-2xl bg-white" type="text" placeholder="Имэйл хаяг" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <Input className="rounded-2xl bg-white" type="password" placeholder="Нууц үг" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                {error && <p className="text-red-500">{error}</p>}
                <button className="w-[454px] h-8 bg-blue-700 py-5 flex items-center justify-center text-white rounded-2xl" onClick={handleSubmit}>

                    Нэвтрэх
                </button>


                <Link href="forget" className="underline">Нууц үг мартсан</Link>
                <Link href="/register">
                    <button className="w-[454px] h-8 bg-white py-5 flex items-center my-8 justify-center text-blue-700 rounded-2xl">
                        Бүртгүүлэх
                    </button>
                </Link>
            </div>
        </div>
    );

}
