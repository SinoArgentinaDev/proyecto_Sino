import React, { useState } from 'react';

export const Contacto = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        cuit: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario (e.g., hacer una petición HTTP)
        console.log(formData);
    };

    return (

        <div id='contacto'>
            <h2 className="text-4xl font-extrabold text-center tracking-wider	 text-[#051d40] mt-10 mb-6">CONTÁCTENOS </h2>
            <div  className="max-w-5xl mx-auto p-6 bg-[#051d40] shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Fila 1: Nombre Completo, Razón Social y CUIT/CUIL */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-white">Nombre Completo <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder='Nombre y Apellido'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-white">Razón Social <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder='Nombre de la empresa'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cuit" className="block text-sm font-medium text-white">CUIT/CUIL <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                id="cuit"
                                name="cuit"
                                value={formData.cuit}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder='Número sin espacios ni guiones'
                                required
                            />
                        </div>
                    </div>

                    {/* Fila 2: Email y Teléfono agrupados verticalmente y Mensaje */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Columna de Email y Teléfono */}
                        <div className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white">Correo Electrónico <span className='text-red-500'>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder='correo@ejemplo.com'
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-white">Teléfono <span className='text-red-500'>*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder='Cód. de área  + número de teléfono'
                                    required
                                />
                            </div>
                        </div>

                        {/* Columna de Mensaje */}
                        <div className="md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-white">Mensaje <span className='text-red-500'>*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full h-[85%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder='Por favor, ingrese su mensaje aquí'
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Botón de envío */}
                    <div className="flex justify-center">
                        <button className="bg-black text-white font-medium px-6 py-2 w-[250px] rounded-md hover:bg-blue-600 transition border-2 border-blue-600 my-4">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
