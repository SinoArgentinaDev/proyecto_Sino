import React from 'react';
import { useTranslation } from 'react-i18next';

export const Card = ({ src, alt, title, text }) => {
const [t, i18n] = useTranslation("global")
    return (
        <div className="relative w-[310px] bg-white border border-gray-400 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={src} alt={alt} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <p className="mb-8 font-medium text-[#545454] dark:text-gray-400 text-base">
                    {text}
                </p>
            </div>
            {/* Ver más botón fijo */}
            <div className="absolute bottom-2 right-4">
                <a
                    href="/servicios"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#051d40] focus:ring-4 focus:outline-none"
                >
                    {t("services_lading.button_text")}
                    <svg
                        className="rtl:rotate-180 w-4 h-4 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h18m0 0L14 1m4 4L14 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

// Validación de props


// Exportación por defecto con el nombre correcto
export default Card;
