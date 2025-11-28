"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Palette, Figma, Layers, Layout,
  Eye, MousePointer, Monitor,
  CheckCircle2, ArrowRight, Sparkles, Heart
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import "@/styles/features.scss";

export default function UIUXDesignPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const principlesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isPrinciplesInView = useInView(principlesRef, { once: true, amount: 0.3 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const designServices = [
    {
      icon: <Layout className="w-10 h-10" />,
      title: "User Interface Design",
      description: "Pixel-perfect interfaces that combine aesthetics with functionality for maximum impact.",
      color: "purple",
      features: ["Visual design", "Design systems", "Responsive layouts"]
    },
    {
      icon: <MousePointer className="w-10 h-10" />,
      title: "User Experience Design",
      description: "Research-driven UX that understands your users and creates intuitive experiences.",
      color: "pink",
      features: ["User research", "Journey mapping", "Usability testing"]
    },
    {
      icon: <Figma className="w-10 h-10" />,
      title: "Prototyping",
      description: "Interactive prototypes that bring your ideas to life before a single line of code.",
      color: "blue",
      features: ["High-fidelity mockups", "Interactive prototypes", "Animation design"]
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Design Systems",
      description: "Scalable design systems that ensure consistency across your entire product ecosystem.",
      color: "emerald",
      features: ["Component libraries", "Style guides", "Design tokens"]
    }
  ];

  const designPrinciples = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "User-Centered",
      description: "Every decision is guided by user needs, behaviors, and feedback."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional Design",
      description: "Creating experiences that delight users and build emotional connections."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Device Agnostic",
      description: "Seamless experiences across desktop, tablet, and mobile devices."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Accessibility First",
      description: "Inclusive design that works for everyone, regardless of ability."
    }
  ];

  const designProcess = [
    {
      number: "01",
      title: "Discover",
      description: "Research users, competitors, and market trends to inform design decisions.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Define",
      description: "Create user personas, journey maps, and define core user flows.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Design",
      description: "Craft beautiful interfaces with attention to every pixel and interaction.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Prototype",
      description: "Build interactive prototypes to test and validate design concepts.",
      icon: <Figma className="w-6 h-6" />
    },
    {
      number: "05",
      title: "Test",
      description: "Conduct usability testing with real users to refine the experience.",
      icon: <MousePointer className="w-6 h-6" />
    },
    {
      number: "06",
      title: "Iterate",
      description: "Continuously improve based on user feedback and analytics.",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  const showcaseImages = [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&q=80",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80"
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section with Parallax Mouse Effect */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-slate-900"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80"
            alt="UI/UX Design"
            fill
            className="object-cover opacity-20"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/80" />
        </div>
        
        {/* Interactive Floating Elements */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl design-float-mouse"
          style={{
            left: mousePosition.x * 0.05,
            top: mousePosition.y * 0.05,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl design-float-mouse"
          style={{
            right: mousePosition.x * 0.03,
            bottom: mousePosition.y * 0.03,
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="design-badge mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 font-medium">
                <Palette className="w-5 h-5 mr-2" />
                UI/UX Design Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 design-hero-title">
              Design That <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">Captivates</span> & Converts
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed design-hero-subtitle">
              We create stunning, intuitive interfaces that don't just look beautiful—they solve problems, delight users, and drive measurable business results.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 design-stats">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-purple-400">1000+</div>
                <div className="text-xs text-gray-400">Designs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-purple-400">150%</div>
                <div className="text-xs text-gray-400">Conversion ↑</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-purple-400">10+</div>
                <div className="text-xs text-gray-400">Awards</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center design-cta">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg"
              >
                Start a Design Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Design Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Services */}
      <section ref={servicesRef} className="py-32 bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isServicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-purple-600">Design Services</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive design solutions that cover every aspect of the user experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {designServices.map((service, idx) => (
                <div
                  key={idx}
                  className={`design-service-card group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 overflow-hidden ${isServicesInView ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-3'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-${service.color}-100 text-${service.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-${service.color}-400 to-${service.color}-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Principles */}
      <section ref={principlesRef} className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="design-mesh-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isPrinciplesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Design <span className="text-purple-400">Philosophy</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Principles that guide every design decision we make.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designPrinciples.map((principle, idx) => (
                <div
                  key={idx}
                  className={`design-principle-card text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 ${isPrinciplesInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="inline-flex p-4 rounded-xl bg-purple-500/20 text-purple-400 mb-6">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Process */}
      <section ref={processRef} className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isProcessInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Design <span className="text-purple-600">Process</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach that ensures exceptional results every time.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designProcess.map((step, idx) => (
                <div
                  key={idx}
                  className={`design-process-card group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 ${isProcessInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  
                  <div className="inline-flex p-3 rounded-lg bg-purple-200 text-purple-700 mb-4">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Showcase */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Recent <span className="text-purple-400">Design Work</span>
              </h2>
              <p className="text-xl text-gray-400">Beautiful interfaces that users love</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {showcaseImages.map((img, idx) => (
                <div
                  key={idx}
                  className="design-showcase-card group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={img}
                    alt={`Design showcase ${idx + 1}`}
                    width={600}
                    height={450}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Project {idx + 1}</h3>
                      <p className="text-sm text-gray-300">UI/UX Design • 2024</p>
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
        className="py-32 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 design-cta-waves"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ready For A <span className="text-yellow-300">Design Transformation</span>?
            </h2>
            <p className={`text-xl mb-12 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's create an unforgettable experience that your users will love and your business will benefit from.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center transform transition-all duration-1000 delay-500 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                Start Your Design
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/features" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                All Features
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}