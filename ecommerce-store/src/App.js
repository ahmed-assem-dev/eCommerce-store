import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AccessoriesPage from "./pages/AccessoriesPage";
import BrandsPage from "./pages/BrandsPage";
import HomePage from "./pages/HomePage";
import KidsPage from "./pages/KidsPage";
import MenPage from "./pages/MenPage";
import OffersPage from "./pages/OffersPage";
import SalePage from "./pages/SalePage";
import WomenPage from "./pages/WomenPage";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
