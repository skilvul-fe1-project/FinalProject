import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
