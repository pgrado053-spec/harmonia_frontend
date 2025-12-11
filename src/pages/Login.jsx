import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      // Guardar token para proteger rutas
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Inicio de sesión exitoso");
      navigate("/"); // Redirige al home o dashboard
    } else {
      alert(data.msg);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-purple-700 dark:text-purple-300 mb-6">
            Iniciar sesión
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Correo"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800">
              Entrar
            </button>
          </form>

          <p className="text-center mt-4">
            ¿No tienes cuenta?
            <a href="/register" className="text-purple-700 dark:text-purple-300 underline ml-2">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
