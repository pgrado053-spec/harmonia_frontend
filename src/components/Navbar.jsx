import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const loggedIn = Boolean(localStorage.getItem("token"));

  const menu = [
    { name: "Inicio", path: "/" },
    { name: "Foro", path: "/forum" },
    { name: "Diario", path: "/diary" },
    { name: "Educación", path: "/education" },
    { name: "Emergencia", path: "/emergency" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border-b shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-purple-700 dark:text-purple-300">
          Harmonia
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          {menu.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-purple-600 dark:hover:text-purple-300 ${
                location.pathname === item.path ? "text-purple-600 dark:text-purple-300 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {loggedIn ? (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            >
              Cerrar sesión
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
            >
              Iniciar sesión
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}
