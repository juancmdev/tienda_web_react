import { Link } from "react-router";

const Header = () => {
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Tienda", path: "/store" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <header className="bg-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nombre de la Marca */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-indigo-200 transition"
        >
          Dxs Tienda
        </Link>

        {/* Barra de Navegación */}
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-white hover:text-indigo-200 transition font-bold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
