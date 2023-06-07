import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtikelPage from "./pages/Artikel/ArtikelPage";
import DetailPage from "./pages/Detail/DetailPage";
import Header from './components/Header'
import DonasiPage from './pages/Donasi/DonasiPage'
import Footer from './components/Footer'

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<ArtikelPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
