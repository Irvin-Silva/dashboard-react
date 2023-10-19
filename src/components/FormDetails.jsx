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
      .then(data =>
        {
            console.log(data)
            setDatos(data.datos_json)

        })
      .catch(error => console.error("Hubo un error al obtener los detalles del formulario:", error));
  }, [id]);

  if (datos.length === 0) return <p>Cargando...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Detalles del Formulario</h1>
      {datos.map((campo, index) => (
        <div key={index} className="mb-2">
          <strong>{campo.campo}</strong>: {campo.type}
        </div>
      ))}
    </div>
  );
};

export default FormDetails;
