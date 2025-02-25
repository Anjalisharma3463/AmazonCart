import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";
import { motion } from "framer-motion"; // Import Framer Motion
import pc from "../img/pc.PNG";
import keyboard from "../img/keyboard.PNG";

const products = [
  { id: 1, name: "PC", price: 1000, image: pc },
  { id: 2, name: "TV", price: 1040, image: keyboard },
  { id: 3, name: "Phone", price: 2000, image: pc },
  { id: 4, name: "Keyboard", price: 500, image: keyboard },
  { id: 5, name: "Apple", price: 600, image: pc },
  { id: 6, name: "Fan", price: 400, image: keyboard },
  { id: 7, name: "Fan3", price: 400, image: pc },
  { id: 8, name: "Fan2", price: 400, image: keyboard },
  { id: 9, name: "Fan1", price: 400, image: pc },
  { id: 10, name: "Cover", price: 400, image: keyboard },
];

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-bold text-4xl text-center mb-8">Home Page - Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="border-2 border-gray-200 p-4 flex flex-col items-center rounded-lg shadow-md bg-white"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slide up
            animate={{ opacity: 1, y: 0 }} // Animate immediately when page loads
            whileInView={{ opacity: 1, y: 0 }} // Also animate when scrolled into view
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            viewport={{ once: false }} // Keep animating when scrolling
          >
            <img src={product.image} alt={product.name} className="w-40 h-40 object-cover" />
            <h3 className="mt-2 text-lg font-semibold">{product.name} - ${product.price}</h3>
            <div className="mt-4 flex space-x-2">
              <button
                className="bg-yellow-400 rounded px-4 py-2 hover:bg-yellow-500 transition"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
              <button
                className="bg-yellow-400 rounded px-4 py-2 hover:bg-yellow-500 transition"
                onClick={() => dispatch(addToWishlist(product))}
              >
                Add to Wishlist
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
