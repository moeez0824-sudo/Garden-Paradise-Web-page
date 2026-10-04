import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Star, 
  Sparkles,
  Scissors,
  Layers,
  Trees,
  Home,
  Check,
  Award,
  Send
} from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Curated nursery products memoized
  const curatedProducts = useMemo(() => products.slice(0, 4), []);

  const [selectedGalleryTab, setSelectedGalleryTab] = useState<string>('all');

  // Interactive Quote Form State
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Garden Design',
    propertySize: 'Medium (1/4 to 1/2 acre)',
    message: '',
  });
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);

  const services = [
    {
      id: 'garden-design',
      title: 'Garden Design & Planting',
      tagline: 'Custom botanical layouts & planting plans',
      description: 'Bespoke garden layouts tailored to your soil, sun exposure, and aesthetic preferences with year-round blooming cycles.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=75&fm=webp',
      icon: Leaf,
      features: ['Native & drought-tolerant species', '3D landscape visualization', 'Seasonal color planning'],
    },
    {
      id: 'lawn-care',
      title: 'Lawn Care & Turf Management',
      tagline: 'Lush, resilient, golf-grade grass',
      description: 'Comprehensive turf health programs including seasonal aeration, organic fertilization, weed control, and sod installation.',
      image: `${import.meta.env.BASE_URL}lawn-care.jpg`,
      icon: Scissors,
      features: ['Core aeration & overseeding', 'Organic weed & moss treatment', 'Precision striping & edging'],
    },
    {
      id: 'landscape-design',
      title: 'Landscape Architecture & Hardscaping',
      tagline: 'Permanent stone, pathways & living zones',
      description: 'Expert construction of natural stone patios, garden walkways, retaining walls, steps, and decorative rockeries.',
      image: `${import.meta.env.BASE_URL}landscape-hardscaping.jpg`,
      icon: Layers,
      features: ['Natural flagstone & paver patios', 'Dry-stone retaining walls', 'Integrated garden steps & paths'],
    },
    {
      id: 'garden-maintenance',
      title: 'Complete Garden Maintenance',
      tagline: 'Reliable weekly & seasonal garden care',
      description: 'Scheduled visits keeping your beds weed-free, shrubs trimmed, perennials deadheaded, and soil properly mulched.',
      image: `${import.meta.env.BASE_URL}garden-maintenance.jpg`,
      icon: Clock,
      features: ['Weekly / bi-weekly scheduled care', 'Seasonal spring & fall cleanups', 'Hedge trimming & pruning'],
    },
    {
      id: 'tree-plant-care',
      title: 'Tree & Specimen Plant Care',
      tagline: 'Horticultural health & structural pruning',
      description: 'Certified arbor and plant specialists caring for specimen trees, ornamental shrubs, root health, and disease prevention.',
      image: `${import.meta.env.BASE_URL}tree-plant-care.jpg`,
      icon: Trees,
      features: ['Formative crown pruning', 'Pest & disease diagnosis', 'Deep-root organic feeding'],
    },
    {
      id: 'outdoor-landscaping',
      title: 'Outdoor Living & Landscaping',
      tagline: 'Comfortable natural outdoor environments',
      description: 'Full-spectrum exterior transformations integrating low-voltage landscape lighting, fire pits, pergolas, and water elements.',
      image: `${import.meta.env.BASE_URL}outdoor-living.jpg`,
      icon: Home,
      features: ['Warm low-voltage lighting', 'Water features & fountains', 'Custom garden timber structures'],
    },
  ];

  const galleryProjects = [
    {
      id: 1,
      title: 'Perennial Sanctuary & Stone Terrace',
      category: 'gardens',
      categoryLabel: 'Garden Design',
      location: 'Oakridge Residential',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=750&q=75&fm=webp',
      duration: '3 Weeks'
    },
    {
      id: 2,
      title: 'Complete Lawn Aeration & Striping',
      category: 'lawn',
      categoryLabel: 'Lawn Care',
      location: 'Highland Park Estate',
      image: `${import.meta.env.BASE_URL}lawn-care.jpg`,
      duration: 'Ongoing Care'
    },
    {
      id: 3,
      title: 'Flagstone Patio & Native Shrub Borders',
      category: 'hardscape',
      categoryLabel: 'Backyard Landscaping',
      location: 'Pinecrest Manor',
      image: `${import.meta.env.BASE_URL}landscape-hardscaping.jpg`,
      duration: '4 Weeks'
    },
    {
      id: 4,
      title: 'Curated English Countryside Border',
      category: 'gardens',
      categoryLabel: 'Garden Design',
      location: 'Meadowview Cottage',
      image: `${import.meta.env.BASE_URL}english-cottage-garden.jpg`,
      duration: '2 Weeks'
    },
    {
      id: 5,
      title: 'Modern Architectural Backyard & Deck',
      category: 'hardscape',
      categoryLabel: 'Outdoor Spaces',
      location: 'Hilltop Residence',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=750&q=75&fm=webp',
      duration: '5 Weeks'
    },
    {
      id: 6,
      title: 'Seasonal Estate Pruning & Maintenance',
      category: 'maintenance',
      categoryLabel: 'Maintenance',
      location: 'Canyon Crest Gardens',
      image: `${import.meta.env.BASE_URL}garden-maintenance.jpg`,
      duration: 'Bi-Weekly'
    },
  ];

  const filteredGallery = useMemo(() => {
    return selectedGalleryTab === 'all' 
      ? galleryProjects 
      : galleryProjects.filter(p => p.category === selectedGalleryTab);
  }, [selectedGalleryTab]);

  const testimonials = [
    {
      quote: "Garden Paradise transformed our backyard into a peaceful green oasis. Highly punctual, professional, and spotless cleanup.",
      author: "Tariq Mehmood",
      location: "DHA Phase 5, Lahore",
      service: "Complete Landscape & Patio Redesign",
      rating: 5,
    },
    {
      quote: "Our patchy lawn turned into a lush golf-green carpet in just a few weeks. Superb turf care and genuine advice!",
      author: "Bilal Ahmed",
      location: "Bahria Town, Islamabad",
      service: "Lawn Care & Soil Aeration",
      rating: 5,
    },
    {
      quote: "Fair, transparent pricing with zero surprises. Beautiful modern stone walkway and perfect heat-tolerant plants.",
      author: "Ayesha Khan",
      location: "Clifton, Karachi",
      service: "Garden Design & Stone Walkways",
      rating: 5,
    },
  ];

  const handleSelectServiceForQuote = useCallback((serviceTitle: string) => {
    setQuoteFormData(prev => ({ ...prev, service: serviceTitle }));
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleQuoteSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsQuoteSubmitted(true);
  }, []);

  return (
    <div className="bg-[#faf9f6]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-gray-950 text-white overflow-hidden">
        {/* Realistic High-Resolution Landscaping Photography Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}hero-garden.jpg`}
            alt="Luxury manicured garden and landscape architecture estate"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          {/* Subtle gradient overlay to keep text ultra-crisp while showcasing the vibrant garden */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-gray-950/20"></div>
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="container-custom relative z-10 py-16 sm:py-24">
          <div className="max-w-2xl">
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-200 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-300" />
              <span>Certified Professional Landscaping & Garden Care</span>
            </div>

            {/* Clear Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-5 leading-tight sm:leading-[1.25]">
              Transforming Outdoor Spaces into Living Works of Art
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-white/85 mb-8 leading-relaxed font-normal max-w-lg">
              From bespoke garden architecture to dependable year-round lawn maintenance, our certified horticulturists and craftsmen deliver timeless natural elegance to your home.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <a 
                href="#contact" 
                className="btn-primary py-3.5 px-6 text-sm md:text-base font-semibold text-center shadow-lg hover:shadow-xl transition-all"
              >
                Get a Free Estimate
              </a>
              <a 
                href="#services" 
                className="btn-secondary bg-white/15 backdrop-blur-md text-white border-white/30 hover:bg-white/25 py-3.5 px-6 text-sm md:text-base font-semibold text-center transition-all"
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 flex-shrink-0" />
                <span>4.9/5 Rating (350+ Reviews)</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Workmanship Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full inline-block mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Gardening & Landscaping Services
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Every garden is unique. We offer end-to-end residential and commercial services tailored to cultivate healthy, thriving greenery and durable outdoor architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="card-hover flex flex-col group border border-gray-100/90 rounded-2xl overflow-hidden bg-white"
                >
                  {/* Image Container with subtle hover zoom */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-2 rounded-xl text-primary-700 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-gray-100">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center text-xs text-gray-600">
                          <Check className="w-3.5 h-3.5 text-primary-600 mr-2 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleSelectServiceForQuote(service.title)}
                      className="w-full btn-secondary text-xs sm:text-sm font-semibold py-2.5 flex items-center justify-center space-x-2 group-hover:border-primary-600 group-hover:text-primary-700 transition-all"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-20 bg-earth-50/70 border-y border-earth-200/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Realistic Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-medium border-4 border-white">
                <img
                  src={`${import.meta.env.BASE_URL}master-craftsmanship.jpg`}
                  alt="Professional horticulturist tending to nursery plants"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-soft border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-700">Master Craftsmanship</p>
                    <p className="text-sm font-semibold text-gray-900">Sustainable Horticultural Care</p>
                  </div>
                  <div className="bg-primary-50 text-primary-700 p-2 rounded-lg">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-100/70 px-3 py-1 rounded-full inline-block mb-3">
                  About Garden Paradise
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                  Over a Decade of Horticultural Craft, Reliability & Passion
                </h2>
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                Founded with a deep commitment to sustainable gardening, Garden Paradise combines classic English landscape tradition with climate-adaptive plant selection and modern masonry techniques.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                We believe exceptional landscaping is more than just trimming grass—it is an art of thoughtful soil preparation, balanced moisture systems, and respectful design that elevates how you experience outdoor living at home.
              </p>

              {/* Realistic Trust Statistics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-primary-700">14+</span>
                  <span className="text-xs text-gray-600 font-medium">Years Experience</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-primary-700">850+</span>
                  <span className="text-xs text-gray-600 font-medium">Gardens Transformed</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-primary-700">98%</span>
                  <span className="text-xs text-gray-600 font-medium">Client Retention</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-soft text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-primary-700">25+</span>
                  <span className="text-xs text-gray-600 font-medium">Certified Specialists</span>
                </div>
              </div>

              <div className="pt-2">
                <a href="#contact" className="btn-primary">
                  Speak With Our Horticulturists
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS / GALLERY */}
      <section id="projects" className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full inline-block mb-3">
                Featured Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Recent Projects & Transformations
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
                Explore real garden makeovers, precise turf treatments, and custom hardscaping executed by our dedicated landscape team.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'gardens', label: 'Garden Design' },
                { key: 'lawn', label: 'Lawn Care' },
                { key: 'hardscape', label: 'Patios & Hardscape' },
                { key: 'maintenance', label: 'Maintenance' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedGalleryTab(tab.key)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedGalleryTab === tab.key
                      ? 'bg-primary-700 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Grid Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((project) => (
              <div 
                key={project.id} 
                className="group relative rounded-2xl overflow-hidden shadow-soft border border-gray-100 bg-gray-900 aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent-300 mb-1">
                    {project.categoryLabel} · {project.location}
                  </span>
                  <h4 className="text-white text-lg font-bold group-hover:text-primary-200 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-white/70 text-xs mt-1">
                    Timeline: {project.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section id="why-us" className="py-20 bg-earth-100/60">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-100 px-3 py-1 rounded-full inline-block mb-3">
              The Garden Paradise Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Property Owners Trust Us
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We focus on dependable service, clear communication, and horticultural integrity so your garden stays healthy for years to come.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Horticulturists</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our team includes qualified landscape architects and arborists who understand seasonal biology, microclimates, and soil science.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Detailed written proposals outlining materials, labor, and plant warranties with zero hidden surprises or surprise add-ons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reliable & On-Time</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We respect your time. Our uniformed crews arrive on schedule, maintain immaculate jobsites, and clean up thoroughly after every visit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Conscious Practices</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We prioritize organic fertilizers, smart drip irrigation, pollinator-friendly perennials, and responsible composting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CURATED NURSERY SUPPLIES (Preserved Store Integration) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full inline-block mb-3">
                From Our Nursery
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Premium Plants & Professional Gardening Supplies
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
                We use these exact nursery specimens and professional tools in our client projects. Order directly for home delivery.
              </p>
            </div>
            <Link to="/products" className="btn-secondary self-start md:self-auto text-xs sm:text-sm">
              <span>View All Nursery Products</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <ProductGrid products={curatedProducts} />
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-20 bg-earth-50/50 border-t border-earth-200/40">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-100 px-3 py-1 rounded-full inline-block mb-3">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Real reviews from homeowners throughout our local service community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 text-sm">{t.author}</h4>
                  <p className="text-xs text-primary-700 font-medium">{t.location}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT & FREE QUOTE FORM */}
      <section id="contact" className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full inline-block mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                  Request a Free Consultation & Estimate
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                  Tell us about your garden or landscaping goals. We'll visit your property, review the site conditions, and provide an itemized estimate.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Phone className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Phone</h4>
                    <a href="tel:+923001234567" className="text-base font-semibold text-gray-900 hover:text-primary-700 transition-colors">
                      +92 300 1234567
                    </a>
                    <p className="text-xs text-gray-500">Mon - Sat: 7:30 AM – 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <Mail className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Email</h4>
                    <a href="mailto:gardenparadise@gmail.com" className="text-base font-semibold text-gray-900 hover:text-primary-700 transition-colors">
                      gardenparadise@gmail.com
                    </a>
                    <p className="text-xs text-gray-500">We reply within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <MapPin className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-gray-500">Main Office & Nursery</h4>
                    <p className="text-sm font-semibold text-gray-900">
                      Main Boulevard, Gulberg III, Lahore, Pakistan
                    </p>
                    <p className="text-xs text-gray-500">Serving Lahore & surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-earth-50/70 p-6 sm:p-8 rounded-2xl border border-earth-200/80 shadow-soft">
                {isQuoteSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Thank You, {quoteFormData.name || 'Friend'}!</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Your estimate request for <strong>{quoteFormData.service}</strong> has been received. One of our senior horticulturists will contact you at <strong>{quoteFormData.phone || quoteFormData.email}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsQuoteSubmitted(false)}
                      className="btn-secondary text-xs mt-4"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Project Estimate Form</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={quoteFormData.name}
                          onChange={e => setQuoteFormData({...quoteFormData, name: e.target.value})}
                          placeholder="Jane Doe"
                          className="input-custom text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={quoteFormData.phone}
                          onChange={e => setQuoteFormData({...quoteFormData, phone: e.target.value})}
                          placeholder="+92 300 0000000"
                          className="input-custom text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={quoteFormData.email}
                          onChange={e => setQuoteFormData({...quoteFormData, email: e.target.value})}
                          placeholder="jane@example.com"
                          className="input-custom text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Desired Service *
                        </label>
                        <select
                          value={quoteFormData.service}
                          onChange={e => setQuoteFormData({...quoteFormData, service: e.target.value})}
                          className="input-custom text-sm"
                        >
                          <option value="Garden Design">Garden Design & Planting</option>
                          <option value="Lawn Care">Lawn Care & Turf Management</option>
                          <option value="Landscape Hardscaping">Landscape & Patio Hardscaping</option>
                          <option value="Garden Maintenance">Routine Garden Maintenance</option>
                          <option value="Tree Care">Tree & Specimen Plant Care</option>
                          <option value="Outdoor Living">Outdoor Living & Lighting</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Property / Garden Size
                      </label>
                      <select
                        value={quoteFormData.propertySize}
                        onChange={e => setQuoteFormData({...quoteFormData, propertySize: e.target.value})}
                        className="input-custom text-sm"
                      >
                        <option>Small Courtyard / Townhouse (&lt; 2,000 sq ft)</option>
                        <option>Medium (1/4 to 1/2 acre)</option>
                        <option>Large (1/2 to 1 acre)</option>
                        <option>Estate / Commercial Property (1+ acre)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Tell us about your project & timeframe
                      </label>
                      <textarea
                        rows={3}
                        value={quoteFormData.message}
                        onChange={e => setQuoteFormData({...quoteFormData, message: e.target.value})}
                        placeholder="E.g., We'd like to replace our existing lawn with low-water perennials and add a small flagstone path before summer..."
                        className="input-custom text-sm resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary py-3.5 text-sm font-bold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Your Free Estimate</span>
                    </button>
                    
                    <p className="text-[11px] text-gray-500 text-center">
                      🔒 No spam. We never share your contact details. Free site visit included.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CALL TO ACTION BANNER */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to Transform Your Garden?
            </h2>
            <p className="text-primary-100/90 text-base sm:text-lg leading-relaxed">
              Whether you are planning a complete backyard renovation or looking for dependable weekly maintenance, our team is ready to help your landscape thrive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a 
                href="#contact" 
                className="btn-accent py-3.5 px-8 text-sm md:text-base font-bold shadow-lg"
              >
                Get a Free Estimate
              </a>
              <a 
                href="tel:+923001234567" 
                className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 py-3.5 px-8 text-sm md:text-base font-semibold"
              >
                Call +92 300 1234567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;