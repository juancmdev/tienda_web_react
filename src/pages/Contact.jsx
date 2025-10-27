import { MdWhatsapp } from "react-icons/md";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="container mx-auto p-8 max-w-lg">
      {" "}
      {/* Centramos el contenido */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        ¿Tienes preguntas? Contáctanos
      </h1>
      {/* RECUERDA: Reemplaza "TU_URL_DE_FORMSPREE" 
        con el enlace que Formspree te da.
      */}
      <form
        action="https://formspree.io/f/mblpldbn"
        method="POST"
        className="space-y-6" // Añade espacio vertical entre campos
      >
        {/* Campo Nombre */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-bold text-gray-700 mb-2 "
          >
            Nombre Completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Campo Correo */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-bold text-gray-700 mb-2"
          >
            Tu Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email" // Importante para la respuesta de Formspree
            required
            className="w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Campo Mensaje */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-bold text-gray-700 mb-2"
          >
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition"
          ></textarea>
        </div>

        {/* Botón de Envío */}
        <div>
          <button
            type="submit"
            className="block w-full text-center py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition duration-150 cursor-pointer"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
      {/* Separador visual */}
      <div className="relative flex justify-center items-center py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <span className="relative bg-white px-3 text-xl font-medium text-gray-500">
          O contáctanos directamente
        </span>
      </div>
      {/* Botón de WhatsApp destacado */}
      <a
        href="https://wa.me/573206462328"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-3 w-full py-3 bg-green-500 text-white font-extrabold rounded-xl shadow-lg hover:bg-green-600 transition duration-150 transform hover:scale-[1.01] mb-10"
      >
        <MdWhatsapp className="h-7 w-7" />
        <span className="text-lg">Chatea con nosotros por WhatsApp</span>
      </a>
    </div>
  );
};

export default Contact;
