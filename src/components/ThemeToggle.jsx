import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      whileTap={{ scale: 0.8 }}
      className="flex items-center w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 p-1"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        className="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center"
      >
        {dark ? (
          <MoonIcon className="w-5 text-yellow-400" />
        ) : (
          <SunIcon className="w-5 text-yellow-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
