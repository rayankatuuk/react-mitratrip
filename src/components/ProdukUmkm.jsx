import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const productList = [
  { img: "assets/images/listing/1.jpeg", nama: "Beras" },
  { img: "assets/images/listing/2.jpeg", nama: "Roti" },
  { img: "assets/images/listing/3.jpeg", nama: "Tepung" },
  { img: "assets/images/listing/4.jpeg", nama: "Gula" },
  { img: "assets/images/listing/5.jpeg", nama: "Minyak" },
  { img: "assets/images/listing/6.jpeg", nama: "Telur" },
];

const ProdukUmkm = () => (
  <div className="p-4 mb-20">
    <h6 className="mb-4 text-black font-bold">Produk Lokal UMKM Terbaik</h6>
    <Swiper
      spaceBetween={16}
      slidesPerView={3}
      breakpoints={{
        640: { slidesPerView: 3.5 },
        1024: { slidesPerView: 5 },
      }}
      grabCursor={true}
      pagination={{ clickable: true }}
      style={{ padding: "2px 2px" }}
    >
      {productList.map((product, idx) => (
        <SwiperSlide key={idx}>
          <div className="border border-gray-200 rounded-lg shadow-lg flex flex-col items-center min-w-[120px] bg-white">
            <img
              src={product.img}
              className="object-contain w-32 h-32 mt-2 rounded-lg sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-70 lg:h-70"
              alt={product.nama}
            />
            <div className="flex items-center justify-between w-full px-3 py-2">
              <span className="text-sm font-medium text-gray-800">
                {product.nama}
              </span>
              <i className="bi bi-arrow-right text-gray-500 text-lg"></i>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default ProdukUmkm;
