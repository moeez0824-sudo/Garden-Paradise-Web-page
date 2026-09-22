import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductDetail from '../components/product/ProductDetail';
import ProductGrid from '../components/product/ProductGrid';
import { getProductById, products } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(getProductById(id || ''));
  
  // Get related products (products in the same category)
  const relatedProducts = product
    ? products
        .filter(
          (p) => p.category === product.category && p.id !== product.id
        )
        .slice(0, 4)
    : [];

  useEffect(() => {
    // Simulate API request delay
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        const foundProduct = getProductById(id);
        setProduct(foundProduct);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="container-custom py-12">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-200 aspect-square rounded-lg"></div>
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="py-6 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/products" className="btn-primary">
          Browse All Products
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container-custom">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link to="/products" className="text-gray-500 hover:text-primary-600 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link
              to={`/products/${product.category}`}
              className="text-gray-500 hover:text-primary-600 transition-colors capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <ProductDetail product={product} />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-8">You may also like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetailPage;