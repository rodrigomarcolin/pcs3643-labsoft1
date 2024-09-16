import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sideMenuOpenState } from "../../../state/atoms/sideMenu";
import { useAuth } from "../../../hooks/useAuth";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(sideMenuOpenState);
  const { isAuthenticated, logout } = useAuth();

  return (
    <div
      className={`fixed inset-x-0 h-12 top-0 md:inset-y-0 md:left-0 md:w-64 md:h-full bg-gray-800 text-white transition-transform duration-300 ${
        isOpen ? "md:translate-x-0" : "md:-translate-x-full"
      }`}
    >
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-4 text-white hidden md:block"
        >
          {isOpen ? "←" : "→"}
        </button>
        <nav className="mt-8">
          <ul className="flex items-center gap-2 md:block justify-center md:space-y-2">
            <li>
              <Link to="/" className="block py-2 hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="block py-2 hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
        {isAuthenticated && (
          <button
            onClick={logout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
