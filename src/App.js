import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Deleteinventory from "./component/Deleteinventory/Deleteinventory";
import Deletewarehouse from "./component/Deletewarehouse/Deletewarehouse";
import Nav from "./components/Nav/Nav";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deleteinventory" element={<Deleteinventory />} />
          <Route path="/deletewarehouse" element={<Deletewarehouse />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
