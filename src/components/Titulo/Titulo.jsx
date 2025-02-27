import React from 'react';

export const Titulo = ({title, title2}) => {
  return (
    <div className='mx-auto mt-16 px-4 sm:px-6 lg:px-8 w-full max-w-8xl'> 
      <h1 
        className='text-xl md:text-3xl lg:text-[42px] font-medium text-center tracking-wide text-[#051d40] leading-snug sm:leading-tight drop-shadow-[2px_1px_0px_gray]'>
       {title}<br />
        <span className='block mt-2' >{title2}</span>
      </h1>
    </div>
  );
};
