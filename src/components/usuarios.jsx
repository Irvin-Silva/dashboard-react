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
      .then(data => 
        {
            console.log(data)
            setUsuarios(data.users)})
      .catch(error => console.error("Hubo un error al obtener los usuarios:", error));
  }, []);

  return (
    <>

<div className="p-8 bg-green-300 rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Usuarios</h1>
      <div className="space-y-4">
        {usuarios.map(form => (
          <UserCard key={form.usuario_id} id={form.usuario_id} nombre_completo={form.nombre_completo} documento_identidad={form.documento_identidad} />
        ))}
      </div>
    </div>
   
    </>
  );
};

export default Usuarios;
