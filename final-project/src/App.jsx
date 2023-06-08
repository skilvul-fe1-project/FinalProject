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
      <Route path="/home" element={<HomePage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/donasi" element={<DonasiPage />} />
        <Route path="/kontak" element={<KontakPage />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
