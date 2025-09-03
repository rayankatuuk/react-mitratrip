import { useState, useEffect } from "react";

const Sidebar = ({ onClose }) => {
  const [show, setShow] = useState(false);

  // Fungsi untuk animasi close
  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // tunggu animasi selesai (300ms)
  };

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex">
      <div
        className={`bg-white w-64 h-full shadow-lg p-4 flex flex-col transform transition-transform duration-300 ease-in-out
          md:w-96 md:p-8 md:rounded-r-2xl rounded-r-2xl
          ${show ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="mb-6">
          <li>
            <a
              href="#"
              className="flex items-center py-4 px-3 rounded-lg bg-green-700 mb-4 md:py-6 md:px-5"
            >
              <img
                src="assets/images/profile.jpg"
                className="w-12 h-12 rounded-full mr-3 md:w-16 md:h-16 md:mr-5"
                alt="Profile"
              />
              <div>
                <h6 className="mb-0 text-white font-semibold md:text-xl">
                  Mitra Trip
                </h6>
                <small className="text-white md:text-base">
                  +62 8123456789
                </small>
                <br />
                <span className="text-xs text-white/70 md:text-sm">
                  Premium
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-person mr-2"></i> Edit Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-shop mr-2"></i> Lihat Lisensi
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-person-plus mr-2"></i> Daftar Agen
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-plus-square mr-2"></i> Top Up
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-box-arrow-in-down mr-2"></i> Komisi Transaksi
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-wallet mr-2"></i> Metode Pembayaran
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-clock-history mr-2"></i> Riwayat
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center py-2 text-gray-700 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-gear mr-2"></i> Pengaturan
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center py-2 text-red-600 hover:bg-gray-100 rounded md:py-3 md:text-lg"
            >
              <i className="bi bi-door-open mr-2"></i> Keluar
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1" onClick={handleClose}></div>
    </div>
  );
};

export default Sidebar;
