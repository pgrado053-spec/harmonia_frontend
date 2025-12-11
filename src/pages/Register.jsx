import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "paciente"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registro exitoso. Ahora inicia sesión.");
      navigate("/login"); // 👈 REDIRECCIÓN AUTOMÁTICA
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
            Crear cuenta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
