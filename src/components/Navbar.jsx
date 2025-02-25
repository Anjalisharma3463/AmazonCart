import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const wishlistCount = useSelector((state) => state.wishlist.wishlistItems.length);

  return (
    <nav className="w-full  text-white h-12 bg-[#131921] flex p-7 justify-between items-center">
      <h1 className="text-4xl font-bold">Amazon.in</h1>
      <div className="flex text-xl space-x-4 font-semibold"> 
      <Link to="/">Home</Link> <br />
      <Link to="/cart">Cart ({cartCount})</Link> <br />
      <Link to="/wishlist">Wishlist ({wishlistCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
