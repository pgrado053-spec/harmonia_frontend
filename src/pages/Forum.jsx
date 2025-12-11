import Navbar from "../components/Navbar";

export default function Forum() {
  const posts = [
    { user: "Ana", text: "Hoy fue un día difícil, pero quiero mejorar 🤍" },
    { user: "Carlos", text: "¿Alguien tiene técnicas para dormir mejor?" },
    { user: "Mari", text: "Lo estás haciendo bien, aunque no lo veas 💜" }
  ];

  return (
    <div>
      <Navbar />

      <div className="px-6 py-10">
        <h1 className="text-4xl text-center font-bold text-purple-700 dark:text-purple-300 mb-6">
          Foro de apoyo 💬
        </h1>

        <div className="flex flex-col gap-4">
          {posts.map((p, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
              <h3 className="font-bold text-purple-700 dark:text-purple-300">{p.user}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
