import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormDetails = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://fcpay-production.up.railway.app/retrieve-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ form_id: id }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDatos(data.datos_json);
      })
      .catch(error => console.error("Hubo un error al obtener los detalles del formulario:", error));
  }, [id]);

  if (datos.length === 0) return <p className="text-center mt-4 text-lg">Cargando...</p>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl mb-4 text-center font-semibold text-green-500"><i className="fa fa-info-circle mr-2"></i>Detalles del Formulario</h1>
      <div className="space-y-2 bg-green-50 p-4 rounded-lg shadow-md">
        {datos.map((campo, index) => (
          <div key={index} className="flex justify-between items-center">
            <strong className="text-green-600 text-lg"><i className="fa fa-tag mr-2"></i>{campo.campo}</strong>
            <span className="text-gray-700 text-sm rounded px-2 py-1 bg-green-200">{campo.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormDetails;
