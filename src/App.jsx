import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import CartItems from "./pages/CartItems";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/cart-items" element={<CartItems/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
