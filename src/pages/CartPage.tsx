import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container-custom py-16 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-soft text-center">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="w-16 h-16 text-gray-300" />
          </div>
          <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium">
                Cart Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
            </div>

            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="p-6 flex items-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex-grow">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-medium text-gray-900 hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600">PKR {Math.round(item.price).toLocaleString()}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 border-l border-r border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="font-medium text-gray-900">
                      PKR {Math.round(item.price * item.quantity).toLocaleString()}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-600 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-soft overflow-hidden sticky top-24">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium">Order Summary</h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>PKR {Math.round(cartTotal).toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{cartTotal >= 14000 ? 'Free' : 'PKR 1,500'}</span>
              </div>
              
              {cartTotal < 14000 && (
                <div className="text-sm text-gray-500 pt-1">
                  Add PKR {Math.round(14000 - cartTotal).toLocaleString()} more for free shipping
                </div>
              )}

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between font-semibold text-gray-900">
                  <span>Total</span>
                  <span>PKR {Math.round(cartTotal >= 14000 ? cartTotal : cartTotal + 1500).toLocaleString()}</span>
                </div>
              </div>

              <Link to="/checkout" className="btn-primary w-full py-3 mt-6">
                Proceed to Checkout
              </Link>

              <Link
                to="/products"
                className="block text-center text-primary-600 hover:text-primary-700 mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;