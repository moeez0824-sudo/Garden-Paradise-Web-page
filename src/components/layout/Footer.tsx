import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Clock, ShieldCheck, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      {/* Top Value Banner */}
      <div className="border-b border-gray-850 py-8 bg-gray-900/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3 text-gray-300">
              <div className="w-10 h-10 rounded-xl bg-primary-900/70 border border-primary-700/50 flex items-center justify-center text-primary-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Licensed & Fully Insured</p>
                <p className="text-xs text-gray-400">Complete liability and workers compensation coverage</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-300">
              <div className="w-10 h-10 rounded-xl bg-primary-900/70 border border-primary-700/50 flex items-center justify-center text-primary-400 flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Certified Horticulturists</p>
                <p className="text-xs text-gray-400">Master landscape architects & tree specialists</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-gray-300">
              <div className="w-10 h-10 rounded-xl bg-primary-900/70 border border-primary-700/50 flex items-center justify-center text-primary-400 flex-shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white">100% Plant Guarantee</p>
                <p className="text-xs text-gray-400">1-year warranty on all nursery installed trees & shrubs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.jpg" 
                alt="Garden Paradise Logo" 
                className="w-10 h-10 rounded-full object-cover shadow-md ring-1 ring-amber-400/40 group-hover:scale-105 transition-transform duration-300" 
              />
              <div>
                <span className="text-xl font-bold text-white tracking-tight block group-hover:text-primary-200 transition-colors">
                  Garden Paradise
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-primary-400 block">
                  Landscaping & Garden Care
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Crafting and nurturing timeless outdoor spaces across residential and commercial estates. Dedicated to horticultural craft, sustainable soils, and client peace of mind.
            </p>

            <div className="pt-2">
              <a 
                href="#contact" 
                className="btn-primary text-xs py-2 px-4 inline-flex items-center space-x-2"
              >
                <span>Request Free Estimate</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-white transition-colors">Project Gallery</a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Nursery Shop</Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">Contact & Estimate</a>
              </li>
            </ul>
          </div>

          {/* Gardening Services */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Garden Design & Planting</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Lawn Care & Striping</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Landscape Hardscaping & Patios</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Seasonal Maintenance Contracts</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Tree Pruning & Disease Care</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">Outdoor Lighting & Water Elements</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Hours */}
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h4 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
              Contact & Hours
            </h4>
            <div className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <a href="tel:+923001234567" className="text-white hover:text-primary-300 font-semibold transition-colors">
                  +92 300 1234567
                </a>
                <p className="text-xs text-gray-500">Dispatch & Consultation</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <a href="mailto:gardenparadise@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  gardenparadise@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
              <p className="text-gray-400 text-xs leading-relaxed">
                Main Boulevard, Gulberg III<br />
                Lahore, Punjab, Pakistan
              </p>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <Clock className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-gray-400">
                <p><strong className="text-gray-300">Mon - Fri:</strong> 7:30 AM – 6:00 PM</p>
                <p><strong className="text-gray-300">Saturday:</strong> 8:00 AM – 4:00 PM</p>
                <p><strong className="text-gray-300">Sunday:</strong> Closed (Emergency calls only)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-850 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Garden Paradise Landscaping & Garden Care LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;