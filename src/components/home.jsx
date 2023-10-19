import {React, useEffect} from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

import useEntidadStore from '../store/entidadStore';


const Home = () => {

    const navigate = useNavigate();

    const { entidad } = useParams();
    console.log(entidad)
    const { setEntidad } = useEntidadStore();

    useEffect(() => {
        if (entidad) {
        setEntidad(entidad);
        }
    }, [entidad, setEntidad]);

  return (

      <div className="container">
        <div className="header">
          <h1>Bienvenido, Administrador</h1>
        </div>
        <div className="divider"></div>
        <div className="content">
          <div className="buttons">
            <button onClick={() => navigate('usuarios')} className="button-usuario">Usuario</button>
            <button onClick={() => navigate('formularios')} className="button-formulario">Formulario</button>
          </div>
          <img className="background-image" src={process.env.PUBLIC_URL + '/assets/image2.png'} alt="Fondo" />
        </div>
        <div className="footer">
          <Link to="/salida" className="logout-icon">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Link>
        </div>
      </div>

  );
};

export default Home;
