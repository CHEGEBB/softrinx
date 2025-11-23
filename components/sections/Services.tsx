// components/sections/Services.jsx
"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Globe, Code, Smartphone, PenTool, Database, LineChart, 
  ArrowUpRight, Server, BrainCircuit
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom web applications built with Next.js, React and other modern frameworks for exceptional user experiences.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3',
    link: '/services/web-development'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless performance across all devices.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3',
    link: '/services/mobile-development'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create intuitive and engaging interfaces.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3',
    link: '/services/design'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database Solutions',
    description: 'Robust database architecture and optimization for efficient data management and retrieval.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3',
    link: '/services/database'
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure deployment and management on AWS, Azure, and Google Cloud.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3',
    link: '/services/cloud'
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: 'AI Solutions',
    description: 'Cutting-edge AI and machine learning integration to power intelligent business applications.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3',
    link: '/services/ai'
  }
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`relative bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-700 opacity-0 translate-y-16 group hover:shadow-2xl`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/90"></div>
      
      <Image
        src={service.image}
        alt={service.title}
        width={500}
        height={300}
        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="relative z-20 p-6 h-full flex flex-col justify-end">
        <div className="p-3 bg-emerald-600 rounded-lg w-fit mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-white/80 mb-4">{service.description}</p>
        <Link 
          href={service.link} 
          className="inline-flex items-center text-white font-medium mt-auto group-hover:underline"
        >
          Learn more 
          <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="max-w-3xl mx-auto text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            We provide comprehensive software development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/services" 
            className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            View All Services
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;