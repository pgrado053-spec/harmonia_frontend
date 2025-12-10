import { useState } from "react";
import { motion } from "framer-motion";
import step1 from "../assets/onboarding-1.svg";
import step2 from "../assets/onboarding-2.svg";
import step3 from "../assets/onboarding-3.svg";
import { Link } from "react-router-dom";

const slides = [
  {
    img: step1,
    title: "Bienvenido a Harmonia 💜",
    text: "Un espacio seguro para explorar tus emociones.",
  },
  {
    img: step2,
    title: "Aprende y crece 🌱",
    text: "Herramientas claras y suaves para transformar tus días.",
  },
  {
    img: step3,
    title: "Nunca estás sol@ 🤝",
    text: "Acompañamiento y calma en cada paso.",
  },
];

export default function Onboarding() {
  const [i, setI] = useState(0);
  const s = slides[i];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      <motion.img
        key={s.img}
        src={s.img}
        alt="Ilustración"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mb-6"
      />

      <motion.h1
        key={s.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-purple-700 dark:text-purple-300"
      >
        {s.title}
      </motion.h1>

      <motion.p
        key={s.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-md"
      >
        {s.text}
      </motion.p>

      <div className="mt-10">
        {i < slides.length - 1 ? (
          <button
            onClick={() => setI(i + 1)}
            className="px-8 py-3 bg-purple-600 text-white rounded-full shadow hover:scale-105 transition"
          >
            Siguiente →
          </button>
        ) : (
          <Link
            to="/"
            className="px-8 py-3 bg-purple-600 text-white rounded-full shadow hover:scale-105 transition"
          >
            Empezar
          </Link>
        )}
      </div>

    </div>
  );
}
