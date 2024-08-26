import React, { useState } from 'react';
import list from '../../public/list.json';

function Cart() {
  // State to hold the cart items
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If already in the cart, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If not in the cart, add it with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to increase the quantity of a specific product
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease the quantity of a specific product, ensuring it does not go below 1
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Placeholder function to handle payment (to be implemented with actual payment logic)
  const handlePayment = () => {
    // Here you would typically handle the payment process
    alert('Payment functionality is not implemented.');
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header for available products */}
      <h1 className="text-3xl font-bold mb-6">Available Products</h1>
      <div className="space-y-6">
        {list.map((product) => (
          <div key={product.id} className="flex items-center border-b border-gray-200 pb-4 mb-4">
            <img src={product.image} alt={product.name} className="w-24 h-auto rounded-lg mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold text-gray-800">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart details section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 pb-2 mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  {/* Buttons to adjust the quantity of items in the cart */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="mx-2 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                  {/* Button to remove the item from the cart */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Display the total price of items in the cart */}
        <p className="text-lg font-bold mt-4">Total: ${calculateTotal()}</p>
        {/* Button to handle the payment process */}
        <button
          onClick={handlePayment}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Cart;
