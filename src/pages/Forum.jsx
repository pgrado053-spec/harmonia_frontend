import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

export default function Forum() {
  const posts = [
    { user: "Ana", text: "Hoy fue difícil, pero sigo intentando 🤍" },
    { user: "Carlos", text: "¿Alguien tiene consejos para ansiedad?" },
    { user: "Marta", text: "Lo estás haciendo increíble 💜" },
  ];

  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-6">
        Foro de apoyo 💬
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {posts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow border"
          >
            <h3 className="font-semibold text-purple-700 dark:text-purple-300">{p.user}</h3>
            <p className="text-gray-700 dark:text-gray-300">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
