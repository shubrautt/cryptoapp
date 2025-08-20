import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <div className="nav-container min-h-screen w-64 shadow-md p-6 flex flex-col">
      <div className="logo text-3xl font-extrabold text-blue-600 mb-10 tracking-wide">
        Cryptos
      </div>
      <div className="links flex flex-col gap-4 text-lg font-medium text-gray-700">
        <Link
          to="/"
          className={`px-3 py-2 rounded-lg hover:bg-blue-50 transition ${
            activeLink === "/" ? "text-blue-600 font-semibold bg-blue-100" : ""
          }`}
          onClick={() => setActiveLink("/")}
        >
          Home
        </Link>
        <Link
          to="/crypto"
          className={`px-3 py-2 rounded-lg hover:bg-blue-50 transition ${
            activeLink === "/crypto"
              ? "text-blue-600 font-semibold bg-blue-100"
              : ""
          }`}
          onClick={() => setActiveLink("/crypto")}
        >
          Crypto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
