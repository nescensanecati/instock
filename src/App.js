import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
    <BrowserRouter>   
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="*" element={<NotFoundPage />} />
          </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
