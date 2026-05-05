export default function PageWrapper({ children }) {
  return (
    <div className="pt-24 px-4 md:px-8 bg-[#FFFAF0] min-h-screen">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
