import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, moveToCart } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import {motion } from "framer-motion";
const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  return (
     

     <div className="mx-5"
      >
        {/* cart items */}
        <h1 className="font-bold text-4xl">Wishlist</h1>
        {wishlistItems.length === 0 ? <p>Wishlist is empty.</p> : null}
         {wishlistItems.map((item) => (
           <motion.div key={item.id} className="flex space-x-4 my-7 font-bold text-xl  h-70  border-2 border-gray-200   p-4 "
           initial={{ opacity: 0, y: 50 }} // Start hidden and slide up
           animate={{ opacity: 1, y: 0 }} // Animate immediately when page loads
           whileInView={{ opacity: 1, y: 0 }} // Also animate when scrolled into view
           transition={{ duration: 0.5, delay: item.key * 0.1 }} // Staggered animation
           viewport={{ once: false }} // Keep animating when scrolling

           >
             <img src={item.image} className="w-50 h-50" alt="" />
             <div className="space-y-4">
             <h3>{item.name} - ${item.price}</h3>
             <button className="m-2 bg-[#fbbf24] rounded p-2 hover:bg-yellow-500 transition "  onClick={() => {
            dispatch(addToCart(item));
            dispatch(removeFromWishlist(item.id));
          }}>
            Move to Cart
          </button>
             <button className="bg-[#fbbf24] rounded p-2 hover:bg-yellow-500 transition " onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
             </div>
           </motion.div>
         ))}
      </div>
  );
};

export default Wishlist;
