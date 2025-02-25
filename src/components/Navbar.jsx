import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const wishlistCount = useSelector((state) => state.wishlist.wishlistItems.length);

  return (
    <nav className="w-full text-white h-16 bg-[#131921] flex flex-wrap items-center justify-between px-5 md:px-10">
      {/* Logo */}
      <Link to="/" className="text-3xl md:text-4xl font-bold">
        Amazon.in
      </Link>

      {/* Navigation Links */}
      <div className="flex text-lg md:text-xl space-x-3 md:space-x-6 font-semibold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">Cart ({cartCount})</Link>
        <Link to="/wishlist" className="hover:underline">Wishlist ({wishlistCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
