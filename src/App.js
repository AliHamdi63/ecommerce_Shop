import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import Home from './components/homePage/Home';
import ProductInfo from './components/homePage/ProductInfo';
import ErrorPage from './components/homePage/ErrorPage';
import MainCart from './components/cartPage/MainCart';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />

        <Route path='/products/:id' element={<ProductInfo />} />

        <Route path='/cart' element={<MainCart />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
