import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RequireAuth } from './context/Auth/RequireAuth';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/private' element={<RequireAuth><Home/></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
