"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Code, Smartphone, Palette, Brain, 
  ArrowRight, Zap, Shield, Globe,
  Sparkles, Cpu, Users, TrendingUp
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import "@/styles/features.scss";

export default function FeaturesPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isWhyUsInView = useInView(whyUsRef, { once: true, amount: 0.3 });
  const isTechInView = useInView(techRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxY(scrollY * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainFeatures = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Enterprise-grade web applications built with cutting-edge technologies and best practices.",
      color: "emerald",
      link: "/features/web-development",
      stats: "500+ Projects"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
      color: "blue",
      link: "/features/mobile-apps",
      stats: "300+ Apps"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that combine aesthetics with functionality and usability.",
      color: "purple",
      link: "/features/ui-ux-design",
      stats: "1000+ Designs"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Solutions",
      description: "Intelligent systems powered by machine learning and artificial intelligence technologies.",
      color: "orange",
      link: "/features/ai-solutions",
      stats: "100+ AI Models"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "We deliver projects 40% faster than industry average without compromising quality."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance with international standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "100+ certified developers, designers, and AI specialists at your service."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "Average 250% ROI increase for our clients within the first year."
    }
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI/ML" },
    { name: "TensorFlow", category: "AI" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "GraphQL", category: "API" },
    { name: "Kubernetes", category: "Orchestration" }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section with Rotating Images */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Rotating Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transform: `translateY(${parallaxY}px)` }}
            >
              <Image
                src={img}
                alt={`Feature showcase ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
                quality={90}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-emerald-900/90" />
          
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 features-grid-overlay"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="features-badge mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-emerald-500/20 backdrop-blur-sm rounded-full text-emerald-300 font-medium">
                <Sparkles className="w-5 h-5 mr-2" />
                Transforming Ideas Into Reality
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 features-hero-title">
              Cutting-Edge <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent features-gradient-shift">Technology Solutions</span> For Your Business
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto features-hero-subtitle">
              From web and mobile development to AI-powered solutions and stunning UI/UX design—we build digital experiences that drive real business results.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center features-hero-cta">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Our Work
              </Link>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-3 mt-16">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'w-12 bg-emerald-400' 
                      : 'w-8 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-20 left-10 features-float-slow">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
            <Globe className="w-8 h-8 text-emerald-400" />
          </div>
        </div>
        <div className="absolute top-40 right-20 features-float-medium">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
            <Cpu className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </section>
      
      {/* Main Features Grid */}
      <section ref={servicesRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isServicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Core <span className="text-emerald-600">Capabilities</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions powered by cutting-edge technology and delivered by industry experts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mainFeatures.map((feature, idx) => (
                <Link
                  key={idx}
                  href={feature.link}
                  className={`features-card group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-${feature.color}-500 overflow-hidden ${isServicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-${feature.color}-100 text-${feature.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold text-${feature.color}-600`}>
                        {feature.stats}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Corner Decoration */}
                  <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl`}></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="features-dots-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isWhyUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Partner With <span className="text-emerald-400">Softrinx</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't just build software—we create transformative digital experiences that propel your business forward.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className={`features-why-card text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-500 ${isWhyUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="inline-flex p-4 rounded-xl bg-emerald-500/20 text-emerald-400 mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section ref={techRef} className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isTechInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powered By <span className="text-emerald-600">Modern Technology</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the latest and most robust technologies to build scalable, secure, and future-proof solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className={`features-tech-badge px-6 py-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 ${isTechInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="font-bold text-gray-900">{tech.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className="relative py-32 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="features-cta-animation"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ready To Build Something <span className="text-yellow-300">Extraordinary</span>?
            </h2>
            <p className={`text-xl mb-12 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's transform your vision into a powerful digital solution that drives growth and delivers exceptional results.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center transform transition-all duration-1000 delay-500 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}