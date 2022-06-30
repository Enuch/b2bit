import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Private = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <h2>Usuário logado {auth.user?.name}</h2>

            <p>Bem vindo ao seu perfil!</p>
        </div>
    );
}