import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Salida from './components/salida';
import Usuarios from './components/usuarios';
import Formularios from './components/formularios';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home/:entidad" element={<Home />} />
        <Route path="/salida" element={<Salida />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/formularios" element={<Formularios />} />
      </Routes>
    </>
  );
};

export default App;
