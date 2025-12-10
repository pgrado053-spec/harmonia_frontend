import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const menu = [
    { name: "Inicio", path: "/" },
    { name: "Foro", path: "/forum" },
    { name: "Diario", path: "/diary" },
    { name: "Educación", path: "/education" },
    { name: "Emergencia", path: "/emergency" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full bg-white/50 dark:bg-gray-900/30 
                 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 
                 shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-purple-700 dark:text-purple-300">
          Harmonia
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-purple-600 dark:hover:text-purple-300 ${
                location.pathname === item.path
                  ? "text-purple-600 dark:text-purple-300 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
