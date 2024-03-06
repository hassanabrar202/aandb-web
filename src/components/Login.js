import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../utils/ContextProvider";

const Login = () => {
    const navigate = useNavigate();
    const { loginUser,registerUser } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleLogin = async () => {
        try {
            const userData = await loginUser(credentials);
            console.log('User logged in:', userData);
            navigate('/chat');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="bg-white flex flex-col justify-center items-center pl-14 pr-16 py-12 max-md:px-5">
            {/* ... (Your existing UI code) */}
            <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="text-stone-300 text-base leading-10 whitespace-nowrap justify-center rounded bg-neutral-100 mt-4 pl-4 pr-16 py-2.5 items-start max-md:max-w-full max-md:pr-5"
                placeholder="Enter email address"
            />
            <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="text-stone-300 text-base leading-10 whitespace-nowrap justify-center rounded bg-neutral-100 mt-4 pl-4 pr-16 py-2.5 items-start max-md:max-w-full max-md:pr-5"
                placeholder="Password"
            />
            <button
                className="text-neutral-50 text-2xl font-bold leading-10 whitespace-nowrap justify-center items-center bg-sky-600 mt-6 px-16 py-2.5 rounded-lg max-md:max-w-full max-md:px-5"
                onClick={handleLogin}
            >
                Log in
            </button>
        </div>
    );
};

export default Login;
