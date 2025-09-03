import Navbar from "../components/Navbar";
import NavbarBottom from "../components/NavbarBottom";
import PembelianTagihan from "../components/PembelianTagihan";
import ProdukUmkm from "../components/ProdukUmkm";
import PromoHariIni from "../components/PromoHariIni";

const Home = () => {
  return (
    <div>
      <Navbar />
      <PromoHariIni />
      <PembelianTagihan />
      <ProdukUmkm />
      <NavbarBottom />
    </div>
  );
};

export default Home;
