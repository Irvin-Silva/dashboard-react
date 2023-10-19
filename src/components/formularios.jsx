import React, { useEffect, useState } from 'react';
import useEntidadStore from '../store/entidadStore';
import FormCard from './FormCard';

const Formularios = () => {
  const entidad = useEntidadStore(state => state.entidad);
  const [formularios, setFormularios] = useState([]);

  useEffect(() => {
    fetch('https://fcpay-production.up.railway.app/forms', {
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
            setFormularios(data.forms)})
      .catch(error => console.error("Hubo un error al obtener los formularios:", error));
  }, []);

  return (
    <>

<div className="p-8 bg-green-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-green-700">Formularios</h1>
      <div className="space-y-4">
        {formularios.map(form => (
          <FormCard key={form.form_id} id={form.form_id} nombre={form.nombre} numero={form.num_campos} />
        ))}
      </div>
    </div>
   
    </>
  );
};

export default Formularios;
