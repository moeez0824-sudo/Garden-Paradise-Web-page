import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container-custom py-24 text-center">
      <div className="max-w-md mx-auto">
        <Leaf className="w-16 h-16 text-primary-600 mx-auto mb-6" />
        <h1 className="text-4xl font-semibold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
          <Link to="/products" className="btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;