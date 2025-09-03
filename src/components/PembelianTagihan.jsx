import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  ["assets/images/bills/1.jpg", "assets/images/bills/2.jpg"],
  ["assets/images/bills/3.jpg", "assets/images/bills/4.jpg"],
  ["assets/images/bills/5.jpg", "assets/images/bills/6.jpg"],
  ["assets/images/bills/8.jpg"],
];

const PembelianTagihan = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="p-4 bg-green-700">
      <div className="flex justify-between">
        <h6 className="mb-2 text-white font-bold text-md">Produk Digital</h6>
        <a className="text-white text-decoration-none text-xs" href="#">
          Lihat Semua <i className="bi bi-arrow-right-circle-fill" />
        </a>
      </div>
      <Swiper
        spaceBetween={12}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((imgs, idx) => (
          <SwiperSlide key={idx}>
            <a href="#" onClick={handleClick}>
              {imgs.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`w-full h-auto rounded-lg${
                    i === 0 ? " mb-2" : ""
                  } w-24 sm:w-46 md:w-120`}
                  alt="..."
                />
              ))}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h4 className="text-lg font-bold mb-2">Coming Soon</h4>
            <button
              className="mt-4 px-4 py-2 bg-green-700 text-white rounded"
              onClick={() => setShowPopup(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PembelianTagihan;
