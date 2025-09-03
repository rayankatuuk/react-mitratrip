import { useState } from "react";

const NavbarBottom = () => {
  const [activeMenu, setActiveMenu] = useState("BERANDA");

  return (
    <div className="fixed bottom-2 left-0 right-0 w-full mx-auto rounded-lg shadow-sm p-2 z-40">
      <div className="flex justify-between items-center rounded-lg shadow bg-green-700">
        <a
          className={`flex flex-col items-center justify-center w-1/4 py-2 ${
            activeMenu === "BERANDA" ? "text-yellow-400" : "text-white"
          }`}
          href="/"
          onClick={() => setActiveMenu("BERANDA")}
        >
          <span>
            <i className="bi bi-house text-2xl"></i>
          </span>
          <p className="text-xs font-medium">BERANDA</p>
        </a>
        <a
          className={`flex flex-col items-center justify-center w-1/4 py-2 ${
            activeMenu === "RIWAYAT" ? "text-yellow-400" : "text-white"
          }`}
          href="#"
          onClick={() => setActiveMenu("RIWAYAT")}
        >
          <span>
            <i className="bi bi-clock-history text-2xl"></i>
          </span>
          <p className="text-xs font-medium">RIWAYAT</p>
        </a>
        <a
          className={`flex flex-col items-center justify-center w-1/4 py-2 ${
            activeMenu === "NOTIFIKASI" ? "text-yellow-400" : "text-white"
          }`}
          href="#"
          onClick={() => setActiveMenu("NOTIFIKASI")}
        >
          <span>
            <i className="bi bi-app-indicator text-2xl"></i>
          </span>
          <p className="text-xs font-medium">NOTIFIKASI</p>
        </a>
        <a
          className={`flex flex-col items-center justify-center w-1/4 py-2 ${
            activeMenu === "SETTING" ? "text-yellow-400" : "text-white"
          }`}
          href="#"
          onClick={() => setActiveMenu("SETTING")}
        >
          <span>
            <i className="bi bi-gear text-2xl"></i>
          </span>
          <p className="text-xs font-medium">SETTING</p>
        </a>
      </div>
    </div>
  );
};

export default NavbarBottom;
