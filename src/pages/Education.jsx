import Navbar from "../components/Navbar";

export default function Education() {
  return (
    <div>
      <Navbar />

      <div className="px-6 py-10">
        <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-6 text-center">
          Educación emocional 📚
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {["Ansiedad", "Autoestima", "Mindfulness", "Depresión", "Relaciones", "Autocuidado"].map((item) => (
            <div
              key={item}
              className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl border dark:border-gray-700 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-300">{item}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Información clara, ejercicios y recursos para mejorar tu bienestar.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
