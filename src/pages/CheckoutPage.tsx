import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Truck, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

type CheckoutStep = 'shipping' | 'payment' | 'review';

const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const [activeStep, setActiveStep] = useState<CheckoutStep>('shipping');
  const [expandedSteps, setExpandedSteps] = useState<Record<CheckoutStep, boolean>>({
    shipping: true,
    payment: false,
    review: false,
  });
  
  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const toggleStep = (step: CheckoutStep) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [step]: !prev[step],
    }));
  };

  const goToNextStep = () => {
    if (activeStep === 'shipping') {
      setActiveStep('payment');
      setExpandedSteps({
        shipping: false,
        payment: true,
        review: false,
      });
    } else if (activeStep === 'payment') {
      setActiveStep('review');
      setExpandedSteps({
        shipping: false,
        payment: false,
        review: true,
      });
    }
  };

  const goToPreviousStep = () => {
    if (activeStep === 'payment') {
      setActiveStep('shipping');
      setExpandedSteps({
        shipping: true,
        payment: false,
        review: false,
      });
    } else if (activeStep === 'review') {
      setActiveStep('payment');
      setExpandedSteps({
        shipping: false,
        payment: true,
        review: false,
      });
    }
  };
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goToNextStep();
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goToNextStep();
  };
  
  const handlePlaceOrder = () => {
    clearCart();
    navigate('/order-confirmation');
  };

  if (cart.length === 0) {
    return (
      <div className="container-custom py-16 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-soft text-center">
          <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            You need to add items to your cart before proceeding to checkout.
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
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Steps */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Information */}
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div 
              className="p-6 border-b border-gray-200 flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep('shipping')}
            >
              <div className="flex items-center">
                <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <Truck className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-medium">Shipping Information</h2>
              </div>
              {expandedSteps.shipping ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>

            {expandedSteps.shipping && (
              <form onSubmit={handleShippingSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div 
              className="p-6 border-b border-gray-200 flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep('payment')}
            >
              <div className="flex items-center">
                <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-medium">Payment Information</h2>
              </div>
              {expandedSteps.payment ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>

            {expandedSteps.payment && (
              <form onSubmit={handlePaymentSubmit} className="p-6 space-y-6">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="cardHolder"
                    value={paymentInfo.cardHolder}
                    onChange={(e) => setPaymentInfo({ ...paymentInfo, cardHolder: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      value={paymentInfo.cvv}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    className="btn-secondary"
                  >
                    Back to Shipping
                  </button>
                  <button type="submit" className="btn-primary">
                    Review Order
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Review */}
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div 
              className="p-6 border-b border-gray-200 flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep('review')}
            >
              <h2 className="text-lg font-medium">Review Order</h2>
              {expandedSteps.review ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>

            {expandedSteps.review && (
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Shipping Information</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p>
                      {shippingInfo.firstName} {shippingInfo.lastName}
                    </p>
                    <p>{shippingInfo.address}</p>
                    <p>
                      {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                    </p>
                    <p>{shippingInfo.country}</p>
                    <p>{shippingInfo.phone}</p>
                    <p>{shippingInfo.email}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Payment Information</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p>
                      Card ending in {paymentInfo.cardNumber.slice(-4)}
                    </p>
                    <p>{paymentInfo.cardHolder}</p>
                    <p>Expires: {paymentInfo.expiryDate}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Order Items</h3>
                  <ul className="divide-y divide-gray-200 bg-gray-50 rounded-md overflow-hidden">
                    {cart.map((item) => (
                      <li key={item.id} className="p-4 flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden mr-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium text-gray-900">
                          PKR {Math.round(item.price * item.quantity).toLocaleString()}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={goToPreviousStep}
                    className="btn-secondary"
                  >
                    Back to Payment
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="btn-primary"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-soft overflow-hidden sticky top-24">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium">Order Summary</h2>
            </div>

            <div className="p-6">
              <div className="max-h-64 overflow-y-auto mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden mr-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      PKR {Math.round(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>PKR {Math.round(cartTotal).toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{cartTotal >= 14000 ? 'Free' : 'PKR 1,500'}</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Tax (5%)</span>
                  <span>PKR {Math.round(cartTotal * 0.05).toLocaleString()}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>
                      PKR {Math.round(
                        cartTotal +
                        (cartTotal >= 14000 ? 0 : 1500) +
                        cartTotal * 0.05
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;