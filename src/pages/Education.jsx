import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

const topics = ["Ansiedad", "Mindfulness", "Autoestima", "Relaciones", "Depresión", "Autocuidado"];

export default function Education() {
  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-10">
        Educación emocional 📚
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {topics.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300">{t}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Aprende herramientas suaves para tu bienestar.
            </p>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
