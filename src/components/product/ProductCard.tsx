import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  }, [addToCart, product.id, product.name, product.price, product.image]);

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="card h-full flex flex-col">
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-white text-primary-600 p-2 rounded-full shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary-600 hover:text-white"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              {product.category}
            </p>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
              <span className="text-sm font-medium ml-1">{product.rating}</span>
            </div>
          </div>
          
          <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {product.description.split('.')[0]}.
          </p>
          
          <div className="mt-auto">
            <p className="font-semibold text-gray-900">PKR {product.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;