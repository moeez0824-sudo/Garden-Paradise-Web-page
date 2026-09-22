import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full px-4 py-2 pl-10 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-500" />
        </div>
        <button 
          type="submit" 
          className="absolute inset-y-0 right-0 px-4 text-gray-700 hover:text-primary-600 transition-colors"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;