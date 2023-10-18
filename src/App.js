
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <h1>Bienvenido, Administrador</h1>
        </div>
        <div className="divider"></div> {/* Barra divisoria */}
        <div className="buttons">
          <button className="button-usuario">Usuario</button>
          <button className="button-formulario">Formulario</button>
        </div>
        <img className="background-image" src={process.env.PUBLIC_URL + '/assets/image2.png'} alt="Fondo" />
        <Link to="/salida" className="logout-icon">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
      </div>
      <Routes>
        <Route path="/salida" element={<Salida />} />
      </Routes>
    </Router>
  );
};

const Salida = () => {
  return <h2>¡Has salido! Hasta luego.</h2>;
};

export default App;
