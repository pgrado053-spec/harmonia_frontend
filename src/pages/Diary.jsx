import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

export default function Diary() {
  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-6"
        >
          Mi Diario 📘
        </motion.h1>

        <textarea
          className="w-full min-h-[250px] p-4 bg-white dark:bg-gray-800 border rounded-xl shadow"
          placeholder="Escribe lo que sientes hoy…"
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="btn-primary w-full mt-4"
        >
          Guardar entrada
        </motion.button>

      </div>
    </PageWrapper>
  );
}
