import axios from 'axios';
import React, { useContext, useState } from 'react';
import { authContextProvider } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(authContextProvider);
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`https://reqres.in/api/login`, { email: username, password })
            .then((res) => {
                console.log(res.data.token)
                login(res.data.token)
                navigate("/")
            })

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username or Email:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <br />
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
