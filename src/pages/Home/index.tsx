import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useNavigate } from 'react-router-dom';

import './index.css';

export const Home = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    let url = auth.user?.avatar;

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
                    <img id="perfil" src={url?.image_high_url} width='70px' alt="profile" />
                    <div id="fields">
                        <label htmlFor="email">Your <strong>Name</strong></label>
                        <input
                            name="email"
                            type="text"
                            value={auth.user?.name}
                            readOnly
                        />
                        <label htmlFor="email">Your <strong>E-mail</strong></label>
                        <input
                            name="email"
                            type="email"
                            value={auth.user?.email}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}