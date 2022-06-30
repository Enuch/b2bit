import { useEffect, useState } from "react"
import { User } from "../../types/User";
import { useApi } from "../hooks/useApi";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');

            if (storageData) {
                const data = await api.validateToken(storageData);
                console.log(data, "Ola porra");
                if (data) {
                    setUser(data);
                }
            }
        }
        validateToken();
    }, []);

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.user && data.tokens) {
            setUser(data.user);
            setToken(data.tokens.access)
            return true;
        } 
        return false;
    }

    const signout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}