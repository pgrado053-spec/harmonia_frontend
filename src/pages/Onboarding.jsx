import { useState } from "react";
import { motion } from "framer-motion";
import step1 from "../assets/Foto-1.png";
import step2 from "../assets/Foto-2.png";
import step3 from "../assets/Foto-3.png";
import { Link } from "react-router-dom";

const slides = [
  {
    img: step1,
    title: "Bienvenido a Harmonia",
    text: "Un espacio seguro para explorar y comprender tus emociones.",
  },
  {
    img: step2,
    title: "Aprende y crece",
    text: "Te ofrecemos herramientas claras para transformar tu día a día.",
  },
  {
    img: step3,
    title: "Acompañamiento constante",
    text: "No tienes que hacerlo solo. Te acompañamos en cada paso.",
  },
];

export default function Onboarding() {
  const [i, setI] = useState(0);
  const s = slides[i];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#e1f6f5]">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Columna de la imagen */}
        <motion.div
          key={s.img}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <img
            src={s.img}
            alt="Ilustración"
            className="w-full max-w-md rounded-3xl shadow-lg object-contain"
          />
        </motion.div>

        {/* Columna de texto y botones */}
        <motion.div
          key={s.title + s.text}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#004f54]">
            {s.title}
          </h1>

          <p className="mt-4 text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            {s.text}
          </p>

          <div className="mt-8">
            {i < slides.length - 1 ? (
              <button
                onClick={() => setI(i + 1)}
                className="px-8 py-3 bg-[#00a896] text-white rounded-full shadow hover:bg-[#008f7a] transition-colors"
              >
                Siguiente
              </button>
            ) : (
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-[#00a896] text-white rounded-full shadow hover:bg-[#008f7a] transition-colors"
              >
                Empezar
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
