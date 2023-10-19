import React, { useEffect, useState } from 'react';
import useEntidadStore from '../store/entidadStore';
import UserCard from './UserCard';

const Usuarios = () => {
  const entidad = useEntidadStore(state => state.entidad);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://fcpay-production.up.railway.app/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entidad_id: entidad }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsuarios(data.users);
      })
      .catch(error => console.error("Hubo un error al obtener los usuarios:", error));
  }, [entidad]); // Añade entidad como dependencia para que useEffect se ejecute cuando entidad cambie

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl mb-4 text-center font-semibold text-green-500"><i className="fa fa-info-circle mr-2"></i>Detalles del Formulario</h1>
      <div className="space-y-2 bg-green-50 p-4 rounded-lg shadow-md">
        {usuarios.map((usuario, index) => (
          <div key={index} className="flex justify-between items-center">
            <strong className="text-green-600 text-lg"><i className="fa fa-tag mr-2"></i>{usuario.correo_electronico}</strong>
            <span className="text-gray-700 text-sm rounded px-2 py-1 bg-green-200">{usuario.rol}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usuarios;
