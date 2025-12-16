import Navbar from "../components/Navbar";

export default function Emergency() {
  return (
    <div>
      <Navbar />

      <div className="px-6 pt-24 pb-10 text-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#b00020] mb-4">
          Ayuda en caso de emergencia
        </h1>

        <p className="text-gray-700 mb-6">
          Si estás en peligro o necesitas ayuda inmediata, utiliza una de
          estas opciones. No dudes en pedir apoyo.
        </p>

        <div className="flex flex-col gap-6">
          <a
            href="tel:123"
            className="bg-[#b00020] text-white py-4 rounded-full text-lg font-semibold shadow hover:bg-[#8a0019] transition-colors"
          >
            Llamar al 123
          </a>

          <a
            href="https://www.minsalud.gov.co"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-[#004f54] text-[#004f54] py-4 rounded-full text-lg font-semibold hover:bg-[#004f54] hover:text-white transition-colors"
          >
            Líneas de ayuda en salud mental
          </a>
        </div>
      </div>
    </div>
  );
}
