import Navbar from "../components/Navbar";

export default function Diary() {
  return (
    <div>
      <Navbar />

      <div className="px-6 py-10 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-4 text-center">
          Mi Diario 📓
        </h1>

        <textarea
          className="w-full min-h-[250px] p-4 border rounded-xl shadow focus:ring-purple-500 outline-none dark:bg-gray-800 dark:text-white"
          placeholder="Escribe cómo te sientes hoy..."
        />

        <button className="mt-4 w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800">
          Guardar entrada
        </button>
      </div>
    </div>
  );
}
