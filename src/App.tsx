import React, { useContext } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/Auth/AuthContext';
import { RequireAuth } from './context/Auth/RequireAuth';
import { Home } from './pages/Home';
import { Private } from './pages/Private'

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/private'>Private Page</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/private' element={<RequireAuth><Private/></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
