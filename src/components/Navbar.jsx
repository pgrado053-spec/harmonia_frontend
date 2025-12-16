import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const loggedIn = Boolean(localStorage.getItem("token"));

  // Rutas originales
  const menu = [
    { name: "Inicio", path: "/" },
    { name: "Foro", path: "/forum" },
    { name: "Diario", path: "/diary" },
    { name: "Educación", path: "/education" },
    { name: "Emergencia", path: "/emergency" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-[#004f54] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Marca / logo izquierda */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold">Harmonia</span>
          <span className="text-xs text-[#c9f0ec]">
            Bienestar emocional en línea
          </span>
        </div>

        {/* Menú centro (desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {menu.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  active
                    ? "font-semibold text-[#ffffff]"
                    : "text-[#e6f9f7]"
                } hover:text-[#c9f0ec]`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Derecha: toggle + botón auth */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {loggedIn ? (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-full bg-[#e6f9f7] text-[#004f54] text-sm font-medium hover:bg-white transition-colors"
            >
              Cerrar sesión
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-[#00a896] text-white text-sm font-medium hover:bg-[#008f7a] transition-colors"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
