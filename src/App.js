import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Deleteinventory from "./components/Deleteinventory/Deleteinventory";
import Deletewarehouse from "./components/Deletewarehouse/Deletewarehouse";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/warehouseinventorylist/:idFromParams"
            element={<WarehouseInventoryList />}
          />
          <Route path="/deleteinventory/:id" element={<Deleteinventory />} />
          <Route path="/deletewarehouse/:id" element={<Deletewarehouse />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
