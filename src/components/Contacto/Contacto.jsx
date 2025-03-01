import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    cuit: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://back-sino-production.up.railway.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Correo enviado exitosamente");
        setFormData({
          fullName: "",
          companyName: "",
          cuit: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Error al enviar el correo: " + result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al enviar el correo");
    }
  };

  const [t, i18n] = useTranslation("global");

  return (
    <div id="contacto">
      <h2 className="text-4xl font-extrabold text-center tracking-wider text-[#051d40] mt-10 mb-6 ">
        {t("contact.title")}
      </h2>
      <div className="max-w-6xl mx-auto p-6 bg-[#051d40] shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Fila 1: Nombre Completo, Razón Social y CUIT/CUIL */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-white"
              >
                {t("contact.fullName")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("contact_placerholder.fullName")}
                required
              />
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-white"
              >
                {t("contact.company_name")}{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("contact_placerholder.company_name")}
                required
              />
            </div>
            <div>
              <label
                htmlFor="cuit"
                className="block text-sm font-medium text-white"
              >
                {t("contact.id")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cuit"
                name="cuit"
                value={formData.cuit}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("contact_placerholder.id")}
                required
              />
            </div>
          </div>

          {/* Fila 2: Email y Teléfono agrupados verticalmente y Mensaje */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Columna de Email y Teléfono */}
            <div className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  {t("contact.email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t("contact_placerholder.email")}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  {t("contact.tel")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t("contact_placerholder.tel")}
                  required
                />
              </div>
            </div>

            {/* Columna de Mensaje */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                {t("contact.message")} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full h-[85%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("contact_placerholder.message")}
                required
              ></textarea>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center">
            <button className="bg-black text-white font-medium px-6 py-2 w-[250px] rounded-md hover:bg-blue-600 transition border-2 border-blue-600 my-4">
              {t("contact.button_text")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
