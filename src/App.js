import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Deleteinventory from "./components/Deleteinventory/Deleteinventory";
import Nav from "./components/Nav/Nav";
import Inventory from "./pages/Inventory/Inventory";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deleteinventory" element={<Deleteinventory />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
