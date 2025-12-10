import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import hero from "../assets/hero-illustration.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center text-center pt-20">

        <motion.img
          src={hero}
          alt="Ilustración calmante"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl mt-6 mb-4"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-purple-700 dark:text-purple-300"
        >
          Respira. Conecta. Sana.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-lg md:text-xl max-w-xl text-gray-600 dark:text-gray-300"
        >
          Tu espacio seguro para crecer emocionalmente, con calma y esperanza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-4 mt-8"
        >
          <Link
            to="/onboarding"
            className="px-8 py-3 bg-purple-600 text-white rounded-full shadow hover:scale-105 transition"
          >
            Comenzar
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-300
                       rounded-full hover:bg-purple-50 transition"
          >
            Iniciar sesión
          </Link>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
