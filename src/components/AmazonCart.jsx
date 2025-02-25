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
    <div className="font-bold text-xl m-4 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Cart Section */}
      <div className="md:col-span-8">
        <h1 className="text-4xl">Shopping Cart</h1>
        {cartItems.length === 0 ? <p className="mt-4">Cart is empty.</p> : null}

        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col md:flex-row space-x-0 md:space-x-4 my-5 p-4 border-2 border-gray-200 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slide up
            animate={{ opacity: 1, y: 0 }} // Animate immediately when page loads
            whileInView={{ opacity: 1, y: 0 }} // Also animate when scrolled into view
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            viewport={{ once: false }} // Keep animating when scrolling
          >
            <img
              src={item.image}
              className="w-full md:w-32 h-32 object-cover rounded"
              alt={item.name}
            />
            <div className="flex flex-col justify-between mt-4 md:mt-0">
              <h3 className="text-lg">{item.name} - ${item.price}</h3>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-2"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order Summary Section */}
      <div className="md:col-span-4 border-2 p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl mb-4">Order Summary</h1>
        <div className="flex justify-between py-2">
          <p>Items: ({cartItems.length})</p>
          <p>${totalPrice}</p>
        </div>
        <div className="py-2 font-bold flex justify-between text-xl">
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

      {/* Payment Success Modal */}
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
