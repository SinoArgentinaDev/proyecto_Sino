import React from 'react';

export const Links = ({ titulo, links }) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h3 className="text-white font-extrabold text-lg">{titulo}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li 
            key={index} 
            className="text-white hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
