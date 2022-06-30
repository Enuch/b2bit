import { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Formik } from "formik";

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
            if(isLogged) {
                navigate('/private');
            } else {
                alert("Não está logado");
            }
        }
    }

    return (
        <div>
            <h2>B2BIT</h2>
            <label htmlFor="email">E-mail</label>
            <input
                name="email"
                type="text" 
                value={email}
                onChange={handleEmailInput}
                placeholder="Digite seu email"
            />
            <label htmlFor="password">Senha</label>
            <input
                name="password"
                type="password" 
                value={password}
                onChange={handlePasswordInput}
                placeholder="Digite seu password"
            />

            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}