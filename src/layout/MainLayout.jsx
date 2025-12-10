import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 
                    dark:from-gray-900 dark:to-gray-800
                    text-gray-800 dark:text-gray-200">
      <Navbar />
      <main className="px-6">{children}</main>
    </div>
  );
}
