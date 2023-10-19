import React, { useEffect, useState } from 'react';
import useEntidadStore from '../store/entidadStore';
import FormCard from './FormCard';
import { useNavigate } from 'react-router-dom';

const Formularios = () => {
    const entidad = useEntidadStore(state => state.entidad);
    const [formularios, setFormularios] = useState([]);

    const navigate = useNavigate();
  
    useEffect(() => {
      fetch('https://fcpay-production.up.railway.app/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ entidad_id: entidad }),
      })
        .then(response => response.json())
        .then(data => setFormularios(data.forms))
        .catch(error => console.error("Hubo un error al obtener los formularios:", error));
    }, [entidad]);
  
    return (
        <>
      <div className="rounded-lg bg-green-600 p-8 max-w-lg mx-auto mt-10 shadow-lg"> {/* Agregado más padding con p-8 */}
        <h1 className="text-2xl font-bold mb-5 text-white text-center">Formularios</h1> {/* Texto centrado con text-center */}
        <div className="overflow-y-auto max-h-96">
          {formularios.map(form => (
            <FormCard key={form.form_id} id={form.form_id} nombre={form.nombre} numero={form.num_campos} />
          ))}
        </div>
      </div>
        <button 
        onClick={() => navigate('/crear-formulario')} 
        className="fixed bottom-4 right-4 bg-green-500 p-2 w-12 h-12 rounded-full text-white shadow-lg focus:outline-none hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center"      >
        <i className="fa fa-plus"></i>
      </button>
      </>
    );
  };
  
  

export default Formularios;
