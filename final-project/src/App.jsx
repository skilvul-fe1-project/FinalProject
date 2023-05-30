import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Artikel from "./pages/Artikel/ArtikelPage";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Artikel />
      <Footer />
    </>
  );
}

export default App;
