import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Education from "./pages/Education";
import Forum from "./pages/Forum";
import Diary from "./pages/Diary";
import Emergency from "./pages/Emergency";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/education" element={<Education />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
