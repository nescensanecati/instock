import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/editwarehouse/:idFromParams"
            component={<EditWarehouse />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
