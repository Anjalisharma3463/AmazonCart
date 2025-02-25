import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { motion } from "framer-motion";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  return (
    <div className="mx-5">
      <h1 className="font-bold text-4xl mb-4">Wishlist</h1>
      {wishlistItems.length === 0 ? <p>Your wishlist is empty.</p> : null}

      {wishlistItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="flex flex-col md:flex-row space-x-0 md:space-x-4 my-5 p-4 border-2 border-gray-200 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: false }}
        >
          <img src={item.image} className="w-full md:w-32 h-32 object-cover rounded" alt={item.name} />
          <div className="flex flex-col justify-between mt-4 md:mt-0">
            <h3 className="text-lg">{item.name} - ${item.price}</h3>
            <div className="flex flex-col md:flex-row space-y-2 md:space-x-2">
              <button
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
                onClick={() => {
                  dispatch(addToCart(item));
                  dispatch(removeFromWishlist(item.id));
                }}
              >
                Move to Cart
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => dispatch(removeFromWishlist(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Wishlist;
