import Navbar from "../components/Navbar";

export default function Education() {
  const topics = [
    "Ansiedad",
    "Autoestima",
    "Mindfulness",
    "Depresión",
    "Relaciones",
    "Autocuidado",
  ];

  return (
    <div>
      <Navbar />

      <div className="px-6 pt-24 pb-10 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#004f54] mb-4 text-center">
          Educación emocional
        </h1>

        <p className="text-gray-700 mb-8 text-center">
          Explora temas clave para entender mejor tus emociones y fortalecer
          tu bienestar.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {topics.map((item) => (
            <div
              key={item}
              className="p-6 bg-white shadow-sm rounded-xl border border-[#ccebea] hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-[#004f54]">
                {item}
              </h2>
              <p className="mt-3 text-gray-700 text-sm">
                Información clara, ejercicios y recursos prácticos para
                acompañarte en este tema.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
