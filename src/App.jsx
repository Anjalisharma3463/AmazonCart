import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/AmazonCart";
import Wishlist from "./components/WishList";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
};

export default App;
