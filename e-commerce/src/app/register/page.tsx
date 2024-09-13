// "use client"
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import React, { useState } from 'react';
// import { useAuth } from "@/app/provider/Auth.provider";




// export default function Signup() {

    
//     const [isPasswordFocused, setIsPasswordFocused] = useState(false);

//     const handlePasswordFocus = () => setIsPasswordFocused(true);
//     const handlePasswordBlur = () => setIsPasswordFocused(false);

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState<string | null>(null);
//     const { register } = useAuth();


//     const handleSubmit = async (event: any) => {
//         event.preventDefault();
//         try {
//             await register(name, email, password);
//         } catch (err) {
//             setError('Registration failed. Please try again.');
//         }
//     };



//     return (
//         <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 py-24">
//             <form onSubmit={handleSubmit} className="w-[35%] flex justify-center items-center flex-col gap-8">
//                 <p className="text-2xl font-black">Бүртгүүлэх</p>
//                 <Input className="bg-white rounded-2xl" type="text" placeholder="Нэр" value={name}onChange={(e) => {setName(e.target.value)   }} /> 
                                                                      
//                 <Input className="bg-white rounded-2xl" type="text" placeholder="Имэйл хаяг"  value={email}onChange={(e) => {setEmail(e.target.value)   }} /> 
//                 <Input
//                     className="bg-white rounded-2xl"
//                     type="password"
//                     placeholder="Нууц үг"
//                     value={password} onChange={(e) => {setPassword(e.target.value)   }}
//                     onFocus={handlePasswordFocus}
//                     onBlur={handlePasswordBlur}
//                 />
//                 <Input
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="bg-white rounded-2xl"
//                     type="password"
//                     placeholder="Нууц үг давтах"
                    
                    
//                 />
//                 <div className="w-full">
//                     {isPasswordFocused && (
//                         <ul>
//                             <li>Том үсэг орсон байх</li>
//                             <li>Жижиг үсэг орсон байх</li>
//                             <li>Тоо орсон байх</li>
//                             <li className="">Тэмдэгт орсон байх</li>
//                         </ul>
//                     )}
//                 </div>
//                 <button className="w-[454px] h-8 bg-blue-700 py-5 rounded-2xl flex items-center justify-center text-white">
//                     Үүсгэх
//                 </button>
//                 <Link href="/login">
//                     <button onClick={handleSubmit} type="submit" className="w-[454px] h-8 bg-white py-5 flex items-center my-8 justify-center text-black rounded-2xl">
//                         Нэвтрэх
//                     </button>{error && <p>{error}</p>}
//                 </Link>
//             </form>
//         </div >
//     );
// }

"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from 'react';
import { useAuth } from "@/app/provider/Auth.provider";

export default function Register() {
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { register } = useAuth();

    const handlePasswordFocus = () => setIsPasswordFocused(true);
    const handlePasswordBlur = () => setIsPasswordFocused(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await register(name, email, password);
        } catch (err: any) {
            setError(err.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 py-24">
            <form onSubmit={handleSubmit} className="w-[35%] flex justify-center items-center flex-col gap-8">
                <p className="text-2xl font-black">Бүртгүүлэх</p>
                <Input
                    className="bg-white rounded-2xl"
                    type="text"
                    placeholder="Нэр"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    className="bg-white rounded-2xl"
                    type="text"
                    placeholder="Имэйл хаяг"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    className="bg-white rounded-2xl"
                    type="password"
                    placeholder="Нууц үг"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                />
                <Input
                    className="bg-white rounded-2xl"
                    type="password"
                    placeholder="Нууц үг давтах"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="w-full">
                    {isPasswordFocused && (
                        <ul>
                            <li>Том үсэг орсон байх</li>
                            <li>Жижиг үсэг орсон байх</li>
                            <li>Тоо орсон байх</li>
                            <li>Тэмдэгт орсон байх</li>
                        </ul>
                    )}
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    className="w-[454px] h-8 bg-blue-700 py-5 rounded-2xl flex items-center justify-center text-white"
                >
                    Үүсгэх
                </button>
                {/* <Link href="/login"> */}
                    <a className="w-[454px] h-8 bg-white py-5 flex items-center my-8 justify-center text-black rounded-2xl">
                        Нэвтрэх
                    </a>
                {/* </Link> */}
            </form>
        </div>
    );
}
