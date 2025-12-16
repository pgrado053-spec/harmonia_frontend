import Navbar from "../components/Navbar";

export default function Diary() {
  return (
    <div>
      <Navbar />

      <div className="px-6 pt-24 pb-10 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#004f54] mb-4 text-center">
          Diario emocional
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          Escribe cómo te sientes hoy. Este espacio es solo para ti.
        </p>

        <textarea
          className="w-full min-h-[260px] p-4 border border-[#99d6d2] rounded-xl shadow-sm focus:ring-2 focus:ring-[#00a896] outline-none bg-white"
          placeholder="Describe tus pensamientos, emociones o lo que quieras recordar de tu día..."
        />

        <button className="mt-5 w-full bg-[#00a896] text-white py-3 rounded-full font-semibold hover:bg-[#008f7a] transition-colors">
          Guardar entrada
        </button>
      </div>
    </div>
  );
}

