export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#00a896] text-white hover:bg-[#008f7a] focus:ring-[#00a896]",
    outline:
      "border border-[#004f54] text-[#004f54] hover:bg-[#004f54] hover:text-white focus:ring-[#004f54]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
