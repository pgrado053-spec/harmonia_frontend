import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import hero from "../assets/home-hero.png"; 
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto min-h-[calc(100vh-5rem)] flex items-center">
        {/* Grid 50/50 */}
        <div className="grid md:grid-cols-2 gap-12 w-full items-center">
          {/* Columna imagen */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-lg">
            <motion.img
              src={hero}
              alt="Madre e hija usando una tablet"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Columna texto */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium text-[#00666b] mb-2"
            >
              Confiable y accesible para todos
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl font-bold text-[#004f54] mb-4"
            >
              Harmonia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-[#004f54] mb-4"
            >
              Apoyo emocional en línea para acompañarte en tu día a día.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-base md:text-lg text-gray-700 mb-8"
            >
              Un espacio seguro donde puedes aprender, expresarte y conectar
              con herramientas pensadas para tu bienestar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/onboarding"
                className="px-8 py-3 rounded-full bg-[#00a896] text-white text-sm font-semibold hover:bg-[#008f7a] transition-colors text-center"
              >
                Empezar ahora
              </Link>

              <Link
                to="/login"
                className="px-8 py-3 rounded-full border-2 border-[#004f54] text-[#004f54] text-sm font-semibold hover:bg-[#004f54] hover:text-white transition-colors text-center"
              >
                Iniciar sesión
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
