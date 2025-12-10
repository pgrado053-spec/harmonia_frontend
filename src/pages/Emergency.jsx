import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

export default function Emergency() {
  return (
    <PageWrapper>
      <div className="max-w-lg mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4"
        >
          Emergencia 🚨
        </motion.h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Si necesitas ayuda inmediata, aquí tienes opciones:
        </p>

        <a href="tel:123" className="btn-danger mb-4">Llamar al 123</a>

        <a
          href="https://www.minsalud.gov.co"
          className="btn-outline"
          target="_blank"
        >
          Líneas de apoyo emocional
        </a>

      </div>
    </PageWrapper>
  );
}
