import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "paciente",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login");
    } else {
      alert(data.msg);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-[#e1f6f5] px-6">
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-[#ccebea]">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#004f54] mb-6">
            Crear cuenta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-[#ccebea] focus:ring-2 focus:ring-[#00a896] outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-[#ccebea] focus:ring-2 focus:ring-[#00a896] outline-none"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-[#ccebea] focus:ring-2 focus:ring-[#00a896] outline-none"
              required
            />

            <button className="w-full bg-[#00a896] text-white py-3 rounded-full font-semibold hover:bg-[#008f7a] transition-colors">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
