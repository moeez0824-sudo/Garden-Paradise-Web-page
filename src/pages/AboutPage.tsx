import React from 'react';
import { Leaf, Users, Award, ShieldCheck, Check, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative bg-gray-950 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=80"
            alt="Garden Paradise Grounds"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-300 bg-white/10 px-3 py-1 rounded-full inline-block mb-4">
              Our Heritage & Philosophy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Cultivating Nature's Best Since 2010
            </h1>
            <p className="text-lg text-white/90 leading-relaxed font-normal">
              Garden Paradise was established on a simple conviction: healthy, breathtaking landscapes are built from thoughtful soil care, climate-adapted plants, and genuine craft.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full inline-block">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Sustainable Practices That Let Gardens Thrive Season After Season
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                We believe exceptional outdoor spaces should not only look magnificent upon installation, but grow healthier, more resilient, and easier to maintain over time.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-primary-100 text-primary-700 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-gray-600"><strong>Organic Soil Enrichments:</strong> Nourishing micro-biology rather than relying on harsh synthetic chemicals.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-primary-100 text-primary-700 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-gray-600"><strong>Water-Wise Irrigation:</strong> Precision drip systems and zoned scheduling reducing unnecessary water usage by up to 40%.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-primary-100 text-primary-700 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-gray-600"><strong>Native Flora Selection:</strong> Selecting hardy perennials and architectural shrubs adapted to regional conditions.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-medium border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80"
                  alt="Lush flourishing border garden"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-earth-50/70 border-y border-earth-200/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-100 px-3 py-1 rounded-full inline-block mb-3">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The Values Behind Every Garden We Tend
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-xl flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Uncompromising Quality</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From hand-selected nursery specimens to precision flagstone edging, we never cut corners on materials or craftsmanship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-xl flex items-center justify-center mb-5">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ecological Balance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We design with pollinator-friendly perennials, natural mulches, and responsible practices that respect surrounding wildlife and waterways.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft">
              <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-xl flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client Trust & Integrity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Clear communication, punctual crews, transparent billing, and dedicated post-installation support keep our clients with us year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Specialists */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full inline-block mb-3">
              Specialist Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Led by Passionate Horticulturists
            </h2>
            <p className="text-gray-600 text-sm">
              Our crew leads hold advanced certifications in landscape architecture, soil science, and tree preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Elena Vance',
                role: 'Founder & Principal Landscape Architect',
                bio: '16+ years designing perennial gardens and estate grounds.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Michael Roberts',
                role: 'Head of Turf & Lawn Sciences',
                bio: 'Certified turf manager specialized in organic soil conditioning.',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Reshma Patel',
                role: 'Senior Horticulturist & Plant Buyer',
                bio: 'Passionate botanical curator inspecting every nursery specimen.',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'David Lindholm',
                role: 'Hardscaping & Construction Lead',
                bio: 'Master stonemason crafting enduring patios and retaining walls.',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
              },
            ].map((member) => (
              <div key={member.name} className="bg-earth-50/50 p-6 rounded-2xl border border-gray-100 text-center">
                <div className="mb-4 relative w-32 h-32 mx-auto overflow-hidden rounded-full border-2 border-primary-600 shadow-soft">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs font-semibold text-primary-700 mt-1 mb-2">{member.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Ready to Discuss Your Landscape Project?</h2>
          <p className="text-primary-100 text-sm sm:text-base">
            Book an on-site consultation with Elena and our horticultural team today.
          </p>
          <div>
            <Link to="/#contact" className="btn-accent py-3 px-8 text-sm font-bold">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;