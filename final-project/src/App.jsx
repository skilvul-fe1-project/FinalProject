import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtikelPage from "./pages/Artikel/ArtikelPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ArtikelPage />
      <Footer />
    </>
  );
}

export default App;
