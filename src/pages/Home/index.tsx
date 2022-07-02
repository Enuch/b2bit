import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useNavigate } from 'react-router-dom';

import './index.css';

export const Home = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = async () => {
        await auth.signout();
        navigate('/');
    }

    return (
        <div>
            <button id="logout" onClick={handleLogout}>Logout</button>
            <div id="box-home">
                <div id="profile">
                    <p>Profile picture</p>
                    <img id="perfil" src='https://avatars.githubusercontent.com/u/50813054?v=4' width='70px' alt="profile" />
                    <div id="fields">
                        <label htmlFor="email">Your <strong>Name</strong></label>
                        <input
                            name="email"
                            type="text"
                            value={"Enuch Santos"}
                            readOnly
                        />
                        <label htmlFor="email">Your <strong>E-mail</strong></label>
                        <input
                            name="email"
                            type="email"
                            value={"enuch@gmail.com"}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}