import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, Leaf, Phone, ArrowRight } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/', isAnchor: false },
    { name: 'Services', path: '/#services', isAnchor: true, targetId: 'services' },
    { name: 'About', path: '/#about', isAnchor: true, targetId: 'about' },
    { name: 'Projects', path: '/#projects', isAnchor: true, targetId: 'projects' },
    { name: 'Why Us', path: '/#why-us', isAnchor: true, targetId: 'why-us' },
    { name: 'Plant Shop', path: '/products', isAnchor: false },
    { name: 'Contact', path: '/#contact', isAnchor: true, targetId: 'contact' },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, item: typeof navLinks[0]) => {
    if (item.isAnchor && item.targetId) {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(item.targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home then scroll
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToQuote = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100 py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100/70 py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}logo.jpg`} 
              alt="Garden Paradise Logo" 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover shadow-sm ring-1 ring-amber-500/40 group-hover:scale-105 transition-transform duration-300" 
            />
            <div>
              <span className="text-xl font-bold text-gray-900 tracking-tight block leading-tight group-hover:text-primary-800 transition-colors">
                Garden Paradise
              </span>
              <span className="text-[11px] font-semibold tracking-wide uppercase text-primary-700 block">
                Landscaping & Garden Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="text-gray-700 hover:text-primary-700 transition-colors text-sm font-medium hover:underline underline-offset-8 decoration-primary-500 decoration-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Phone quick link on larger displays */}
            <a 
              href="tel:+923001234567" 
              className="hidden xl:flex items-center space-x-2 text-xs font-semibold text-gray-700 hover:text-primary-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary-600" />
              <span>+92 300 1234567</span>
            </a>

            {/* Shop Cart Icon */}
            <Link 
              to="/cart" 
              className="relative p-2.5 text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-xl transition-all"
              aria-label="Shopping Cart"
              title="View Supplies Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Primary Quote CTA button */}
            <button
              onClick={scrollToQuote}
              className="hidden sm:inline-flex items-center space-x-2 bg-primary-700 hover:bg-primary-800 text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all group"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-primary-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="px-3 py-2.5 text-gray-800 hover:text-primary-700 hover:bg-primary-50/70 rounded-xl text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            <a 
              href="tel:+923001234567" 
              className="flex items-center justify-center space-x-2 w-full py-2.5 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl"
            >
              <Phone className="w-4 h-4 text-primary-600" />
              <span>Call +92 300 1234567</span>
            </a>
            <button
              onClick={scrollToQuote}
              className="w-full py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-xl text-center shadow-sm flex items-center justify-center space-x-2"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;