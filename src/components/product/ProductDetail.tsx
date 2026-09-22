import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart, Star, Truck, RefreshCw, Heart } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }, quantity);
  };

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
              {product.category}
            </p>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-accent-500 fill-accent-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <p className="text-2xl font-semibold text-gray-900">PKR {product.price.toLocaleString()}</p>

          <div className="border-t border-b border-gray-200 py-6">
            <p className="text-gray-700 mb-6">{product.description}</p>

            <h3 className="font-medium text-gray-900 mb-3">Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-1 border-l border-r border-gray-300">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                disabled={quantity >= product.stock}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="text-sm text-gray-500">
              {product.stock} available
            </span>
          </div>

          {/* Add to Cart Button */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="btn-primary flex-grow py-3"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
            <button className="btn-secondary p-3">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Info */}
          <div className="space-y-3 pt-6 border-t border-gray-200">
            <div className="flex items-center text-sm text-gray-700">
              <Truck className="w-5 h-5 mr-2 text-primary-600" />
              <span>Free shipping on orders over PKR 14,000</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <RefreshCw className="w-5 h-5 mr-2 text-primary-600" />
              <span>30-day easy returns</span>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;