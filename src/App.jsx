import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductCreation from './pages/ProductCreation';
import ProductDetail from './pages/ProductDetail';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/new" element={<ProductCreation />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;