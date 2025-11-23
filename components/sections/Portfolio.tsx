// components/sections/Portfolio.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3',
    tags: ['Next.js', 'Tailwind CSS', 'Shopify'],
    client: 'FashionBrand Inc.',
    link: '/portfolio/e-commerce-platform'
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
    tags: ['React', 'Chart.js', 'Firebase'],
    client: 'FinTech Solutions',
    link: '/portfolio/finance-dashboard'
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    client: 'MediCare',
    link: '/portfolio/healthcare-app'
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    client: 'HomeFindr',
    link: '/portfolio/real-estate-platform'
  },
  {
    id: 5,
    title: 'AI Content Generator',
    category: 'AI Solution',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3',
    tags: ['Python', 'OpenAI API', 'React'],
    client: 'ContentLab',
    link: '/portfolio/ai-content-generator'
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3',
    tags: ['Flutter', 'Firebase', 'Wearable API'],
    client: 'FitLife',
    link: '/portfolio/fitness-tracking-app'
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'AI Solution', 'Web Application'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

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

  const scrollCategories = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="max-w-3xl mx-auto text-center mb-12 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Explore our portfolio of successful projects delivered to clients worldwide
          </p>
        </div>

        <div className="relative mb-8">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scrollCategories('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div 
            ref={containerRef} 
            className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-8 relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scrollCategories('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
              ref={(el) => {
                if (el) {
                  setTimeout(() => {
                    el.style.opacity = 1;
                    el.style.transform = 'translateY(0)';
                  }, 100 + index * 100);
                }
              }}
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white/80 text-sm mb-1">{item.client}</p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{item.category}</span>
                  <Link 
                    href={item.link}
                    className="inline-flex items-center text-emerald-600 font-medium hover:underline"
                  >
                    View project <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium rounded-lg transition-colors duration-300"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;