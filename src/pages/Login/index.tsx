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

    const handleLogin = async (event: any) => {
        event.preventDefault();
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/home');
            } else {
                alert("Não está logado");
            }
        }
    }

    return (
        <div id="box-login">
            <form id="form" onSubmit={handleLogin}>
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
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}