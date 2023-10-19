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
      className="p-4 rounded-lg shadow-md transition duration-300  hover:bg-green-300 rounded-lg block cursor-pointer">
      <h2 className="text-gray-800 font-semibold text-lg mb-2">{nombre}</h2>
      <p className="ext-gray-600 text-sm mb-2">Número de campos: {numero}</p>
      <div className="h-px bg-gray-400"></div>
    </div>
  );
};

export default FormCard;
