import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromCart } from "../redux/cartSlice";
import { motion } from "framer-motion";
const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="font-bold text-xl m-4 grid grid-cols-12 gap-4">
      {/* Cart Section */}
      <div className="col-span-8">
        <h1 className="text-4xl">Shopping Cart</h1>
        {cartItems.length === 0 ? <p className="mt-4">Cart is empty.</p> : null}
        
        {cartItems.map((item) => (
          <motion.div key={item.id} className="flex space-x-4 my-7 w-full h-70 border-2 border-gray-200 p-4"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slide up
  animate={{ opacity: 1, y: 0 }} // Animate immediately when page loads
  whileInView={{ opacity: 1, y: 0 }} // Also animate when scrolled into view
  transition={{ duration: 0.5, delay: item.key * 0.1 }} // Staggered animation
  viewport={{ once: false }} // Keep animating when scrolling
          >
            <img src={item.image} className="w-50 h-50 object-fit" alt={item.name} />
            <div className="space-y-4">
              <h3>{item.name} - ${item.price}</h3>
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order Summary Section */}
      <div className="col-span-4 border-2 h-80 flex flex-col justify-center items-center p-6">
        <h1 className="text-2xl">Order Summary</h1>
        <div className="w-full flex justify-between py-4">
          <p>Items: ({cartItems.length})</p>
          <p>${totalPrice}</p>
        </div>
        <div className="w-full py-4 font-bold flex justify-between text-xl">
          <p>Order Total</p>
          <p>${totalPrice}</p>
        </div>
        <button 
          onClick={() => setShowModal(true)} 
          className="w-full bg-yellow-400 text-black rounded p-3 mt-4 hover:bg-yellow-500 transition"
        >
          Proceed to Buy
        </button>
      </div>

      {showModal && (
  <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm">
    <div className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full">
      <div className="text-green-500 text-5xl mb-3">✔</div>
      <h2 className="text-xl font-semibold">Payment Successful!</h2>
      <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
      <p className="font-bold mt-2">Total: ${totalPrice}</p>
      <button 
        onClick={() => setShowModal(false)}
        className="mt-4 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Cart;
