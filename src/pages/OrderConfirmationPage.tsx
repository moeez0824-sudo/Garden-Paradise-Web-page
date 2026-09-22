import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="container-custom py-16 max-w-2xl mx-auto text-center">
      <div className="bg-white p-8 rounded-lg shadow-soft">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary-600" />
        </div>
        
        <h1 className="text-2xl font-semibold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We'll send you an email confirmation with order details and tracking information.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center mb-4">
            <ShoppingBag className="w-5 h-5 text-primary-600 mr-2" />
            <span className="font-medium">Order #GP{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
          </div>
          <p className="text-sm text-gray-600">
            Estimated delivery: 3-5 business days
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
          <Link to="/account/orders" className="btn-secondary">
            View Order Status
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;