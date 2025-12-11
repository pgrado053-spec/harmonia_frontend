import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Diary from "./pages/Diary";
import Forum from "./pages/Forum";
import Education from "./pages/Education";
import Emergency from "./pages/Emergency";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/education" element={<Education />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}

export default App;
