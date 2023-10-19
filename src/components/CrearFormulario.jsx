import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useEntidadStore from '../store/entidadStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CrearFormulario = () => {
  const navigate = useNavigate();
  const entidad = useEntidadStore(state => state.entidad);
  const [campos, setCampos] = useState([]);
  const [nombreFormulario, setNombreFormulario] = useState(''); // Nuevo estado

  const agregarCampo = () => {
    setCampos([...campos, { campo: '', type: 'text' }]);
  };

  const eliminarCampo = (index) => {
    const newCampos = [...campos];
    newCampos.splice(index, 1);
    setCampos(newCampos);
  };

  const handleInputChange = (index, field, value) => {
    const newCampos = [...campos];
    newCampos[index][field] = value;
    setCampos(newCampos);
  };

  const enviarFormulario = () => {
    const payload = {
      entidad_id: Number(entidad),
      nombre: nombreFormulario,
      campos: campos
    };



    fetch('https://fcpay-production.up.railway.app/create-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => {
      if (response.ok) {
        alert("Formulario creado exitosamente");
        navigate('/formularios');
      } else {
        alert("Hubo un error al crear el formulario");
      }
    })
    .catch(error => console.error("Error al enviar el formulario:", error));
  };

  return (
    <div className="p-4 max-h-screen overflow-y-auto rounded-lg shadow-md bg-green-700 mx-4 my-4">
      <h1 className="text-2xl mb-4 font-bold text-white underline">Crear nuevo formulario</h1>
        <input 
        value={nombreFormulario}
        onChange={(e) => setNombreFormulario(e.target.value)}
        placeholder="Nombre del Formulario"
        className="p-2 border rounded-md mb-4 w-full"
      />
      {campos.map((campo, index) => (
        <div key={index} className="mb-2 flex space-x-4">
          <input 
            value={campo.campo}
            onChange={(e) => handleInputChange(index, 'campo', e.target.value)}
            placeholder="Nombre del campo"
            className="p-2 border rounded-md flex-grow"
          />
          <select 
            value={campo.tipo}
            onChange={(e) => handleInputChange(index, 'tipo', e.target.value)}
            className="p-2 border rounded-md w-1/3"
          >
            <option value="text">Texto</option>
            <option value="number">Número</option>
            <option value="date">Fecha</option>
            <option value="email">Correo electrónico</option>
            <option value="password">Contraseña</option>
            {/* Puedes agregar más tipos si lo deseas */}
          </select>
          <button onClick={() => eliminarCampo(index)}>
            <FontAwesomeIcon icon={faTrash} className="text-red-600" />
          </button>
        </div>
      ))}

      <button 
        onClick={agregarCampo}
        className="p-2 mt-4 bg-green-500 text-white rounded-md mr-2"
      >
        Agregar Campo
      </button>

      <button 
        onClick={enviarFormulario}
        className="p-2 mt-4 bg-blue-500 text-white rounded-md ml-2"
      >
        Enviar
      </button>
    </div>
  );
};

export default CrearFormulario;
