"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/animations.scss';
import { ArrowRight, Zap, Rocket, Target } from 'lucide-react';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated background images */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt="Hero background"
              fill
              className="object-cover"
              priority={idx === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
        ))}
      </div>



      {/* Main content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 py-32 relative z-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm mb-8 hero-badge">
            <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="text-sm text-emerald-400 font-medium">
              Trusted by Fortune 500 Companies
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white hero-text-1">
              Enterprise Software
            </span>
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hero-text-2 gradient-shift">
              That Drives Results
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 hero-text-3">
            We build scalable, secure applications that transform businesses. 
            From concept to launch, we deliver excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 hero-buttons">
            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <Link 
              href="/portfolio"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/10 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Projects Delivered', icon: Target },
              { value: '15+', label: 'Years Experience', icon: Zap },
              { value: '200+', label: 'Enterprise Clients', icon: Rocket },
              { value: '99.8%', label: 'Success Rate', icon: Target },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 cursor-pointer stat-card"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <stat.icon className="w-6 h-6 text-emerald-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;