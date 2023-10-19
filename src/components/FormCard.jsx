import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormCard = ({ id, nombre, numero }) => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/form-details/${id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className="block p-4 bg-green-200 rounded-lg shadow-md hover:bg-green-300 transition duration-300">
      <h2 className="text-xl font-medium text-green-800">{nombre}</h2>
      <p className="text-gray-700">Número de campos: {numero}</p>
    </div>
  );
};

export default FormCard;
