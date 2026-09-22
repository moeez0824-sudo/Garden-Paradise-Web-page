import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { products, getProductsByCategory, searchProducts, sortProducts } from '../data/products';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  const maxPrice = Math.max(...products.map((product) => product.price));
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  // Generate all unique tags from products
  const allTags = Array.from(
    new Set(products.flatMap((product) => product.tags))
  ).sort();

  // Filter and sort products
  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      let filtered = products;

      // Filter by category if provided
      if (category) {
        filtered = getProductsByCategory(category);
      }

      // Filter by search query if provided
      if (searchQuery) {
        filtered = searchProducts(searchQuery);
      }

      // Apply price filter
      filtered = filtered.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      // Apply tag filters if any are selected
      if (selectedTags.length > 0) {
        filtered = filtered.filter((product) =>
          product.tags.some((tag) => selectedTags.includes(tag))
        );
      }

      // Apply sorting
      filtered = sortProducts(filtered, sortBy);

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 500);
  }, [category, searchQuery, priceRange, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedTags([]);
    setSortBy('featured');
  };

  const getPageTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    }
    if (category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return 'All Products';
  };

  return (
    <div className="container-custom py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">{getPageTitle()}</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-secondary flex items-center"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`w-full lg:w-64 shrink-0 ${
            showFilters ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="sticky top-24 bg-white p-6 rounded-lg shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Clear All
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Price Range</h3>
              <div className="mb-2">
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>PKR {priceRange[0].toLocaleString()}</span>
                  <span>PKR {priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-sm font-medium mb-3">Product Tags</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {allTags.map((tag) => (
                  <label key={tag} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                      className="rounded text-primary-600 focus:ring-primary-500 mr-2"
                    />
                    <span className="text-sm text-gray-700">{tag}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mobile Only: Close Button */}
            <div className="mt-6 lg:hidden">
              <button
                onClick={() => setShowFilters(false)}
                className="btn-secondary w-full flex items-center justify-center"
              >
                <X className="w-4 h-4 mr-2" />
                Close Filters
              </button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {/* Desktop Title */}
          <div className="hidden lg:block mb-8">
            <h1 className="text-3xl font-semibold">{getPageTitle()}</h1>
          </div>
          
          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-sm text-gray-600">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {selectedTags.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-50 text-primary-700"
                  >
                    {tag}
                    <button
                      onClick={() => toggleTag(tag)}
                      className="ml-1 text-primary-500 hover:text-primary-700"
                      aria-label={`Remove ${tag} filter`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
                
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          <ProductGrid products={filteredProducts} loading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;