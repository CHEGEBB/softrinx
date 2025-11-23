// components/sections/Hero.jsx
"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, LineChart, Database } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const floatingElementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!floatingElementsRef.current) return;
      
      const elements = floatingElementsRef.current.querySelectorAll('.floating-element');
      
      elements.forEach((element) => {
        const speed = element.dataset.speed || 0.05;
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4F50FF_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div ref={floatingElementsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div data-speed="0.03" className="floating-element absolute top-[15%] left-[10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div data-speed="0.05" className="floating-element absolute top-[50%] right-[5%] w-96 h-96 bg-[#4F50FF]/10 rounded-full blur-3xl"></div>
        <div data-speed="0.02" className="floating-element absolute bottom-[10%] left-[30%] w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
        
        <Code data-speed="0.08" className="floating-element absolute top-[25%] left-[15%] text-emerald-400/20 w-20 h-20" />
        <Database data-speed="0.06" className="floating-element absolute bottom-[20%] right-[25%] text-[#4F50FF]/20 w-24 h-24" />
        <LineChart data-speed="0.04" className="floating-element absolute top-[60%] left-[75%] text-emerald-500/20 w-16 h-16" />
      </div>

      <div 
        ref={heroRef}
        className="container mx-auto px-4 py-20 flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6 text-sm text-white/80">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
          We're launching our new AI platform
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          <span className="block">Transform Your Ideas Into</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-[#4F50FF]">
            Digital Reality
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-10">
          We craft cutting-edge software solutions that drive innovation and deliver 
          exceptional user experiences for businesses worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link 
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20 flex items-center justify-center group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/portfolio"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full transition-all duration-300 border border-white/20 hover:border-white/30"
          >
            View Our Work
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-1">200+</span>
            <span className="text-white/60">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-1">10+</span>
            <span className="text-white/60">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-1">50+</span>
            <span className="text-white/60">Global Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-1">99%</span>
            <span className="text-white/60">Client Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;