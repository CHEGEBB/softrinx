"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Brain, Cpu, Sparkles, Zap,
  Database, Network, Eye, MessageSquare,
  CheckCircle2, ArrowRight, TrendingUp, Bot
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import "@/styles/features.scss";

export default function AISolutionsPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const useCasesRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, amount: 0.3 });
  const isUseCasesInView = useInView(useCasesRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const [particles, setParticles] = useState<Array<{x: number; y: number; size: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1
    }));
    setParticles(newParticles);
  }, []);

  const aiServices = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Machine Learning",
      description: "Custom ML models trained on your data to solve specific business challenges and automate decision-making.",
      color: "orange",
      features: ["Predictive analytics", "Pattern recognition", "Automated classification"]
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Natural Language Processing",
      description: "Advanced NLP systems that understand, interpret, and generate human language at scale.",
      color: "blue",
      features: ["Sentiment analysis", "Text generation", "Language translation"]
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Computer Vision",
      description: "Visual recognition systems that analyze images and video with superhuman accuracy.",
      color: "purple",
      features: ["Object detection", "Image classification", "Facial recognition"]
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational AI that provides 24/7 support and enhances customer experiences.",
      color: "emerald",
      features: ["Multi-language support", "Context awareness", "Seamless integration"]
    }
  ];

  const capabilities = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Deep Learning",
      stat: "99.5%",
      label: "Accuracy"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Big Data Processing",
      stat: "10TB+",
      label: "Daily Data"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Neural Networks",
      stat: "100M+",
      label: "Parameters"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Model Optimization",
      stat: "10x",
      label: "Faster"
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      title: "Medical Diagnosis AI",
      description: "AI-powered diagnostic tools that analyze medical images and patient data with 95%+ accuracy.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      results: ["95% accuracy", "50% faster diagnosis", "70% cost reduction"]
    },
    {
      industry: "Finance",
      title: "Fraud Detection System",
      description: "Real-time fraud detection that processes millions of transactions and prevents financial losses.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
      results: ["99.9% detection rate", "$50M saved annually", "Real-time processing"]
    },
    {
      industry: "E-Commerce",
      title: "Personalization Engine",
      description: "AI recommendations that increase conversions by understanding customer behavior patterns.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80",
      results: ["180% conversion ↑", "3x engagement", "40% revenue ↑"]
    }
  ];

  const techStack = [
    "TensorFlow", "PyTorch", "Keras", "Scikit-learn",
    "OpenAI GPT", "Hugging Face", "LangChain", "BERT",
    "YOLO", "ResNet", "Apache Spark", "Pandas"
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section with Animated Particles */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-900 via-slate-900 to-purple-900"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80"
            alt="AI Solutions"
            fill
            className="object-cover opacity-20"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-purple-900/80" />
        </div>
        
        {/* AI Particles */}
        <div className="absolute inset-0">
          {particles.map((particle, idx) => (
            <div
              key={idx}
              className="ai-particle absolute rounded-full bg-orange-400/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${idx * 0.1}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="ai-badge mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-300 font-medium">
                <Brain className="w-5 h-5 mr-2" />
                Artificial Intelligence Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 ai-hero-title">
              Intelligent Solutions <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">Powered By AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed ai-hero-subtitle">
              From machine learning to natural language processing—we build AI systems that learn, adapt, and deliver exceptional results for your business.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ai-stats">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-orange-400">100+</div>
                <div className="text-xs text-gray-400">AI Models</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-orange-400">10TB+</div>
                <div className="text-xs text-gray-400">Data Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-orange-400">99.5%</div>
                <div className="text-xs text-gray-400">Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-orange-400">24/7</div>
                <div className="text-xs text-gray-400">Automation</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center ai-cta">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg"
              >
                Explore AI Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Services */}
      <section ref={servicesRef} className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isServicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI <span className="text-orange-600">Capabilities</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions that transform how you operate, compete, and grow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiServices.map((service, idx) => (
                <div
                  key={idx}
                  className={`ai-service-card group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-500 overflow-hidden ${isServicesInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
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
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Capabilities Stats */}
      <section ref={capabilitiesRef} className="py-32 bg-gradient-to-br from-slate-900 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 ai-grid-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isCapabilitiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built On <span className="text-orange-400">Cutting-Edge Technology</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                State-of-the-art AI infrastructure that delivers real results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {capabilities.map((capability, idx) => (
                <div
                  key={idx}
                  className={`ai-capability-card text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-500 ${isCapabilitiesInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="inline-flex p-4 rounded-xl bg-orange-500/20 text-orange-400 mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                  <div className="text-4xl font-bold text-orange-400 mb-2">{capability.stat}</div>
                  <p className="text-gray-400">{capability.label}</p>
                </div>
              ))}
            </div>
            
            {/* Tech Stack */}
            <div className={`transform transition-all duration-1000 delay-500 ${isCapabilitiesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold mb-8 text-center">Powered By Industry-Leading Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="ai-tech-badge px-5 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section ref={useCasesRef} className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-20 transform transition-all duration-1000 ${isUseCasesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Real-World <span className="text-orange-600">AI Applications</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our AI solutions deliver measurable results across different industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className={`ai-use-case-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isUseCasesInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                        {useCase.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                    
                    <div className="space-y-2">
                      {useCase.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-center text-sm">
                          <Sparkles className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                          <span className="font-semibold text-gray-700">{result}</span>
                        </div>
                      ))}
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
        className="py-32 bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 ai-cta-circuit"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ready To <span className="text-slate-900">Harness AI</span> For Your Business?
            </h2>
            <p className={`text-xl mb-12 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's discuss how AI can transform your operations, enhance decision-making, and drive unprecedented growth.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center transform transition-all duration-1000 delay-500 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                Get AI Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/features" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}