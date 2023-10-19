import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Salida from './components/salida';
import Usuarios from './components/usuarios';
import Formularios from './components/Formularios';
import FormDetails from './components/FormDetails';
import CrearFormulario from './components/CrearFormulario';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <>

      <Routes>

        <Route path="/home/:entidad" element={<Home />} />
        <Route path="/salida" element={<Salida />} />
        <Route path="/formularios" element={<Formularios />} />
        <Route path="/form-details/:id" element={<FormDetails />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/crear-formulario" element={<CrearFormulario />} />
        <Route path="/usuarios" element={<Usuarios />} />


      </Routes>

    </>
  );
};

export default App;
