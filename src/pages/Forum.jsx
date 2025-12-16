import { useState } from "react";
import Navbar from "../components/Navbar";

const initialPosts = [
  {
    id: 1,
    user: "Ana",
    text: "Hoy fue un día difícil, pero quiero seguir mejorando.",
    liked: false,
    replies: [],
  },
  {
    id: 2,
    user: "Carlos",
    text: "¿Alguien tiene técnicas para dormir mejor?",
    liked: false,
    replies: [],
  },
  {
    id: 3,
    user: "Mari",
    text: "Estoy intentando recordar que cada pequeño avance cuenta.",
    liked: false,
    replies: [],
  },
];

export default function Forum() {
  const [posts, setPosts] = useState(initialPosts);
  const [replyDrafts, setReplyDrafts] = useState({});

  const toggleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, liked: !p.liked } : p
      )
    );
  };

  const handleReplyChange = (id, value) => {
    setReplyDrafts((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleReplySubmit = (id) => {
    const text = (replyDrafts[id] || "").trim();
    if (!text) return;

    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, replies: [...p.replies, { text }] }
          : p
      )
    );

    setReplyDrafts((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  return (
    <div>
      <Navbar />

      <div className="pt-24 px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-center font-bold text-[#004f54] mb-2">
            Foro de apoyo
          </h1>
          <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
            Lee experiencias de otras personas y comparte lo que estás
            viviendo. Este espacio busca acompañamiento y respeto.
          </p>

          <div className="space-y-4">
            {posts.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl border border-[#d3f2ee] shadow-sm px-6 py-4"
              >
                {/* Cabecera del post */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#004f54]">
                      {p.user}
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">
                      {p.text}
                    </p>
                  </div>

                  {/* Botón corazón */}
                  <button
                    onClick={() => toggleLike(p.id)}
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#e63946] transition-colors"
                  >
                    <span
                      className={`text-lg ${
                        p.liked ? "text-[#e63946]" : ""
                      }`}
                    >
                      {p.liked ? "♥" : "♡"}
                    </span>
                    <span>{p.liked ? "Te gusta" : "Me gusta"}</span>
                  </button>
                </div>

                {/* Respuestas existentes */}
                {p.replies.length > 0 && (
                  <div className="mt-4 space-y-2 border-t border-[#e6f6f4] pt-3">
                    {p.replies.map((r, index) => (
                      <div
                        key={index}
                        className="text-sm text-gray-700"
                      >
                        <span className="font-medium text-[#00666b]">
                          Tú:{" "}
                        </span>
                        {r.text}
                      </div>
                    ))}
                  </div>
                )}

                {/* Caja para responder */}
                <div className="mt-4">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Responder a {p.user}
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <textarea
                      rows={2}
                      className="flex-1 border border-[#cfe9e5] rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00a896]"
                      placeholder="Escribe un mensaje breve de apoyo..."
                      value={replyDrafts[p.id] || ""}
                      onChange={(e) =>
                        handleReplyChange(p.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => handleReplySubmit(p.id)}
                      className="px-4 py-2 rounded-full bg-[#00a896] text-white text-sm font-semibold self-end sm:self-auto hover:bg-[#008f7a] transition-colors"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
