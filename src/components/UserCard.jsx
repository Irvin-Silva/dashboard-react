import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ id, nombre_completo, documento_identidad }) => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user-details/${id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className="p-4 rounded-lg shadow-md transition duration-300  hover:bg-green-300 rounded-lg block cursor-pointer">
      <h2 className="text-gray-800 font-semibold text-lg mb-2">{nombre_completo}</h2>
      <p className="ext-gray-600 text-sm mb-2">Documento: {documento_identidad}</p>
      <div className="h-px bg-gray-400"></div>
    </div>
  );
};

export default UserCard;
