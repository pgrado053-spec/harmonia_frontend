import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-14 h-7 rounded-full p-1 flex items-center transition-all bg-[#00666b] dark:bg-gray-600"
    >
      <div
        className={`w-5 h-5 rounded-full shadow transform transition-all ${
          dark
            ? "translate-x-7 bg-yellow-400"
            : "translate-x-0 bg-[#e1f6f5]"
        }`}
      ></div>
    </button>
  );
}

