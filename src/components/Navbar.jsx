import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="p-4 shadow-sm bg-green-700 sticky top-0 z-50">
        {/* Navbar Brand */}
        <div className="flex items-center">
          <a href="/" className="font-semibold text-white text-2xl">
            MitraTrip<span className="text-yellow-400">.com</span>
          </a>
          <div className="ms-auto flex items-center">
            <a
              href="#"
              className="mr-3 text-white text-base text-decoration-none"
            >
              <i className="m-2 bi-plus-circle" />
              Saldo Anda : Rp 0.
            </a>
            <button
              className="text-white ms-auto"
              onClick={() => setSidebarOpen(true)}
            >
              <i className="bi bi-list text-xl"></i>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white border-0 shadow-sm rounded overflow-hidden mt-3 flex items-center px-4 gap-2">
          <span className="bg-white border-0">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="flex-1 outline-none border-none bg-transparent m-2"
            placeholder="Sudah isi pulsa hari ini..?"
          />
        </div>
      </div>
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
    </>
  );
};

export default Navbar;
