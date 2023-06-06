// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtikelPage from "./pages/Artikel/ArtikelPage";
import DetailPage from "./pages/Detail/DetailPage";

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
