import React from 'react';

export const HelpCard = ({ icon, name, text, bgColor = 'bg-white' }) => {
  return (
    <div className={`max-w-sm p-6 mb-12 ${bgColor} border border-gray-200 rounded-lg shadow-sm dark:border-gray-700`}>
      <p className="w-7 h-7 text-3xl text-white dark:text-white mb-4">{icon}</p>
      <a href="#">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-white dark:text-white drop-shadow-[2px_1px_0px_black]">
          {name}
        </h5>
      </a>
      <p className="mb-4 font-normal text-white dark:text-gray-400">
        {text}
      </p>
    </div>
  );
};

