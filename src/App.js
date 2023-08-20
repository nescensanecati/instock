import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Deleteinventory from "./components/Deleteinventory/Deleteinventory";
import Deletewarehouse from "./components/Deletewarehouse/Deletewarehouse";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ItemDetails from "./components/ItemDetails/ItemDetails";



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deleteinventory/:id" element={<Deleteinventory />} />
          <Route path="/deletewarehouse/:id" element={<Deletewarehouse />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/editwarehouse/:idFromParams" element={<EditWarehouse />}/>
          <Route path="/itemdetails/:id" element={<ItemDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
