import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Deleteinventory from "./components/Deleteinventory/Deleteinventory";
import Deletewarehouse from "./components/Deletewarehouse/Deletewarehouse";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import InventoryList from "./components/InventoryList/InventoryList";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import AddInventory from "./components/AddInventory/AddInventory";
import EditItem from "./components/EditItem/EditItem";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/deleteinventory/:id" element={<Deleteinventory />} />
          <Route path="/deletewarehouse/:id" element={<Deletewarehouse />} />
          <Route path="/addwarehouse" element={<AddNewWarehouse />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/editwarehouse/:idFromParams"
            element={<EditWarehouse />}
          />
          <Route path="/itemdetails/:id" element={<ItemDetails />} />
          <Route path="/addinventory" element={<AddInventory />} />
          <Route path="/edititem/:id" element={<EditItem />} />
          <Route path="/warehousedetails/:id" element={<WarehouseDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
