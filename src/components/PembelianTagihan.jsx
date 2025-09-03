const products = [
  ["assets/images/bills/1.jpg", "assets/images/bills/2.jpg"],
  ["assets/images/bills/3.jpg", "assets/images/bills/4.jpg"],
  ["assets/images/bills/5.jpg", "assets/images/bills/6.jpg"],
  ["assets/images/bills/7.jpg", "assets/images/bills/8.jpg"],
];

const PembelianTagihan = () => {
  return (
    <div className="p-4 bg-green-700">
      <div className="flex justify-between">
        <h6 className="mb-2 text-white font-bold text-lg">Produk Digital</h6>
        <a className="text-white text-decoration-none" href="#">
          LIHAT SEMUA <i className="bi bi-arrow-right-circle-fill" />
        </a>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {products.map((imgs, idx) => (
          <div className="w-full h-auto rounded-lg" key={idx}>
            <a href="#">
              {imgs.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`w-full h-auto rounded-lg${
                    i === 0 ? " mb-2" : ""
                  } w-24 sm:w-46 md:w-120 h-auto`}
                  alt="..."
                />
              ))}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PembelianTagihan;
