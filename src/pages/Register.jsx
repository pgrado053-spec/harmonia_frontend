import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <PageWrapper>
      <div className="flex justify-center items-center min-h-[80vh] px-6">

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-8 shadow-xl rounded-3xl max-w-md w-full"
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300 mb-6">
            Crear cuenta
          </h2>

          <form className="space-y-4">
            <input type="text" placeholder="Nombre completo" className="input-modern" />
            <input type="email" placeholder="Correo" className="input-modern" />
            <input type="password" placeholder="Contraseña" className="input-modern" />
            <button className="btn-primary">Registrarse</button>
          </form>
        </motion.div>

      </div>
    </PageWrapper>
  );
}
