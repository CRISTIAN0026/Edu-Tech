import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage';
import NavBar from './components/NavBar';
import Register from './pages/register';
import Login from './pages/login';
import { AuthContext } from "../src/context/authContext.js";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={user ? <h2>{user.email} is logged in</h2> : <Register/> } />
        <Route path="/login" element={user ? <h2>{user.email} is logged in</h2> : <Login/> } />
      </Routes>
    </div>
  );
}

export default App;
