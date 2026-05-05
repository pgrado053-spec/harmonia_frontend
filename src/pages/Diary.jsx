// src/pages/Diary.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../api";

export default function Diary() {
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    const trimmed = text.trim();
    if (!trimmed) {
      alert("Escribe algo antes de guardar.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch(`${API_URL}/diary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        console.error("Error backend diario:", res.status, data);
        throw new Error("Respuesta no OK");
      }

      alert("Entrada guardada correctamente.");
      setText("");
    } catch (error) {
      console.error("Error guardando diario:", error);
      alert("No se pudo guardar la entrada. Intenta más tarde.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Fondo en toda la pantalla */}
      <div className="bg-[#FFFAF0] min-h-screen pt-24 pb-10">
        {/* Contenido centrado */}
        <div className="px-6 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#004f54] mb-4 text-center">
            Diario emocional
          </h1>

          <p className="text-gray-700 mb-6 text-center">
            Escribe cómo te sientes hoy. Este espacio es solo para ti.
          </p>

          <textarea
            className="w-full min-h-[260px] p-4 border border-[#99d6d2] rounded-xl shadow-sm focus:ring-2 focus:ring-[#00a896] outline-none bg-white"
            placeholder="Describe tus pensamientos, emociones o lo que quieras recordar de tu día..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-5 w-full bg-[#00a896] text-white py-3 rounded-full font-semibold hover:bg-[#008f7a] transition-colors disabled:opacity-60"
          >
            {saving ? "Guardando..." : "Guardar entrada"}
          </button>
        </div>
      </div>
    </div>
  );
}