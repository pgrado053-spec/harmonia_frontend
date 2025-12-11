import Navbar from "../components/Navbar";

export default function Emergency() {
  return (
    <div>
      <Navbar />

      <div className="px-6 py-10 text-center">
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-6">
          Botón de emergencia 🚨
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Si estás en peligro o necesitas ayuda inmediata, usa una de estas opciones:
        </p>

        <div className="flex flex-col gap-6 max-w-md mx-auto">
          <a href="tel:123" className="bg-red-600 text-white py-4 rounded-xl text-xl font-bold shadow hover:bg-red-700">
            Llamar al 123
          </a>

          <a
            href="https://www.minsalud.gov.co"
            target="_blank"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-300 py-4 rounded-xl text-xl font-bold hover:bg-blue-50 dark:hover:bg-gray-800"
          >
            Líneas de ayuda en salud mental
          </a>
        </div>
      </div>
    </div>
  );
}
