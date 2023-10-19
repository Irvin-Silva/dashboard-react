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
            className="p-4 rounded-lg shadow-md transition duration-300  hover:bg-green-700 rounded-lg block cursor-pointe">
            <h2 className="text-gray-50 font-semibold text-lg mb-2">{nombre}</h2>
            <p className="text-gray-900 text-sm mb-2">Número de campos: {numero}</p> {/* Corrección de typo en ext-gray-600 a text-gray-600 */}
            <div className="h-px bg-gray-400"></div>
        </div>
    );
};

export default FormCard;
