import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtikelPage from "./pages/Artikel/ArtikelPage";
import DetailPage from "./pages/Detail/DetailPage";
import DonasiPage from './pages/Donasi/DonasiPage'
import HomePage from "./pages/home/HomePage"
import KontakPage from "./pages/Kontak/KontakPage"


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/Home" element={<HomePage />} />
        <Route path="/Artikel" element={<ArtikelPage />} />
        <Route path="/Artikel/Detail" element={<DetailPage />} />
        <Route path="/Donasi" element={<DonasiPage />} />
        <Route path="/Kontak" element={<KontakPage />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
