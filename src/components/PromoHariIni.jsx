import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const products = [
  { img: "assets/images/1.png" },
  { img: "assets/images/2.png" },
  { img: "assets/images/3.png" },
  { img: "assets/images/4.png" },
  { img: "assets/images/5.png" },
  { img: "assets/images/6.png" },
];

const PromoHariIni = () => (
  <div className="py-4">
    <div className="px-4 flex justify-between">
      <h6 className="mb-2 text-black font-bold">Promo Hari Ini</h6>
      <a className="text-green-700 no-underline text-sm" href="#">
        Lihat Semua <i className="bi bi-arrow-right-circle-fill" />
      </a>
    </div>
    <Swiper
      spaceBetween={16}
      slidesPerView={3.5}
      breakpoints={{
        640: { slidesPerView: 3.5 },
        1024: { slidesPerView: 6 },
      }}
      grabCursor={true}
      pagination={{ clickable: true }}
      style={{ padding: "0 12px" }}
    >
      {products.map((promo, idx) => (
        <SwiperSlide key={idx}>
          <div className="py-2 flex flex-col items-center min-w-[120px]">
            <a href="#">
              <img src={promo.img} className="w-full h-auto" />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default PromoHariIni;
