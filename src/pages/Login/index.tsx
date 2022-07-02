import { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import './index.css';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            console.log('as')
            if (isLogged) {
                navigate('/private');
            } else {
                alert("Não está logado");
            }
        }
    }

    return (
        <div id="box-login">
            <form id="form">
                <h2>b2b<span>it</span></h2>
                <div id="inputs">
                    <label htmlFor="email">E-mail</label>
                    <input
                        name="email"
                        type="text"
                        value={email}
                        onChange={handleEmailInput}
                        placeholder="@gmail.com"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordInput}
                        placeholder="**********"
                    />

                </div>
                <button onClick={handleLogin}>Sign In</button>
            </form>
        </div>
    )
}