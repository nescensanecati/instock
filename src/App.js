import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Deleteinventory from "./component/Deleteinventory/Deleteinventory";
import Nav from "./components/Nav/Nav";
import Inventory from "./pages/Inventory/Inventory";
import AddInventory from "./components/AddInventory/AddInventory";

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
          <Route path="/addinventory" element={<AddInventory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
