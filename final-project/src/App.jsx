import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Artikel from "./pages/Artikel/ArtikelPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Artikel />
    </>
  );
}

export default App;
