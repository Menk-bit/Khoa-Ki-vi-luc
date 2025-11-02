import { Link, useLocation } from "react-router-dom";

export default function Header({ compact = false }: { compact?: boolean }) {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Plan", path: "/plan" },
    { name: "About", path: "/about" },
    { name: "AI assistant", path: "/chat" },
  ];

  // Different layout if compact
  const headerClasses = compact
    ? "w-full h-16 bg-white flex items-center justify-between px-4 border-b"
    : "w-full h-[164px] bg-white flex items-center justify-between px-20 sticky top-0 z-50";

  return (
    <header className={headerClasses}>
      <Link
        to="/"
        className="text-brand-dark-green font-poppins text-2xl font-bold tracking-[-0.48px]"
      >
        Tech4Green
      </Link>

      <nav className="flex items-center gap-6 md:gap-12">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-brand-dark-green text-center font-poppins text-base font-medium tracking-[-0.32px] hover:opacity-70 transition-opacity ${
              location.pathname === item.path
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3c731cda32439360a212722ffd24d5d6c27b9223?width=160"
        alt="Logo"
        className={compact ? "w-10 h-10" : "w-20 h-20"}
      />
    </header>
  );
}