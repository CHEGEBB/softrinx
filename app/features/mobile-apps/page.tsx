"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Smartphone, Apple, PlayCircle, Layers,
  Battery, Wifi, Bell, Lock,
  CheckCircle2, ArrowRight, Zap, Users
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import "@/styles/features.scss";

export default function MobileAppsPage() {
  const heroRef = useRef(null);
  const platformsRef = useRef(null);
  const featuresRef = useRef(null);
  const showcaseRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isPlatformsInView = useInView(platformsRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isShowcaseInView = useInView(showcaseRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const [activeTab, setActiveTab] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const platforms = [
    {
      icon: <Apple className="w-12 h-12" />,
      title: "iOS Development",
      description: "Native iOS apps built with Swift and SwiftUI for the best performance on Apple devices.",
      color: "from-gray-700 to-black",
      features: ["Swift & SwiftUI", "App Store optimization", "Apple Watch & iPad support"],
      stats: "150+ iOS Apps"
    },
    {
      icon: <PlayCircle className="w-12 h-12" />,
      title: "Android Development",
      description: "High-performance Android apps using Kotlin and Jetpack Compose for millions of users.",
      color: "from-green-600 to-green-700",
      features: ["Kotlin & Jetpack", "Play Store compliance", "Wear OS support"],
      stats: "200+ Android Apps"
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Cross-Platform",
      description: "Build once, deploy everywhere with React Native and Flutter for maximum reach.",
      color: "from-blue-600 to-purple-600",
      features: ["React Native & Flutter", "Single codebase", "Native performance"],
      stats: "100+ Hybrid Apps"
    }
  ];

  const appFeatures = [
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Battery Optimization",
      description: "Apps engineered for minimal battery consumption and maximum efficiency."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Offline Functionality",
      description: "Work seamlessly without internet with smart caching and local storage."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Push Notifications",
      description: "Engage users with timely, personalized notifications across platforms."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Biometric Security",
      description: "Face ID, Touch ID, and fingerprint authentication for secure access."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Sync",
      description: "Instant data synchronization across all devices and platforms."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Integration",
      description: "Seamless integration with social media platforms and sharing features."
    }
  ];

  const showcaseApps = [
    {
      name: "FinanceTrack Pro",
      category: "Finance",
      downloads: "500K+",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
    },
    {
      name: "FitLife Coach",
      category: "Health & Fitness",
      downloads: "1M+",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80"
    },
    {
      name: "ShopEase",
      category: "E-Commerce",
      downloads: "2M+",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80"
    }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"
      >
        <div className="absolute inset-0">
          <div style={{ transform: `translateY(${parallaxY}px)` }}>
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80"
              alt="Mobile Apps"
              fill
              className="object-cover opacity-20"
              priority
              quality={90}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80" />
        </div>
        
        {/* Floating Phone Mockups */}
        <div className="absolute right-10 top-1/4 mobile-float-slow hidden lg:block">
          <div className="w-64 h-auto bg-white/10 backdrop-blur-sm rounded-3xl p-2 border-2 border-white/30">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-96"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="mobile-badge mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 font-medium">
                <Smartphone className="w-5 h-5 mr-2" />
                Mobile App Development
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 mobile-hero-title">
              Apps That <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Users Love</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed mobile-hero-subtitle">
              From iOS to Android and cross-platform solutions—we create mobile experiences that engage, delight, and convert users into loyal customers.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 mobile-stats">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20 text-center">
                <div className="text-2xl font-bold text-blue-400">300+</div>
                <div className="text-xs text-gray-400">Apps Built</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20 text-center">
                <div className="text-2xl font-bold text-blue-400">10M+</div>
                <div className="text-xs text-gray-400">Downloads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20 text-center">
                <div className="text-2xl font-bold text-blue-400">4.8★</div>
                <div className="text-xs text-gray-400">Avg Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20 text-center">
                <div className="text-2xl font-bold text-blue-400">95%</div>
                <div className="text-xs text-gray-400">Retention</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mobile-cta">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Build Your App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                See Examples
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platforms Section */}
      <section ref={platformsRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isPlatformsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Build For <span className="text-blue-600">Every Platform</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you need a native iOS app, Android app, or cross-platform solution—we've got you covered.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className={`mobile-platform-card group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 overflow-hidden ${isPlatformsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {platform.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {platform.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {platform.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-sm font-semibold text-blue-600">{platform.stats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section ref={featuresRef} className="py-32 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isFeaturesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built-In <span className="text-blue-400">Essential Features</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every app we build comes packed with powerful features that users expect and love.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className={`mobile-feature-card bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 ${isFeaturesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-blue-500/20 text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* App Showcase */}
      <section ref={showcaseRef} className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isShowcaseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="text-blue-600">App Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real apps, real results. See what we've built for clients across different industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {showcaseApps.map((app, idx) => (
                <div
                  key={idx}
                  className={`mobile-showcase-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isShowcaseInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                        {app.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{app.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{app.downloads} downloads</span>
                      <span className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        {app.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 mobile-cta-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's Build Your <span className="text-yellow-300">Dream App</span>
            </h2>
            <p className={`text-xl mb-12 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              From concept to launch and beyond—we'll guide you through every step of the mobile app development journey.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center transform transition-all duration-1000 delay-500 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/features" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}