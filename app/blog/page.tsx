// app/blog/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Search, Calendar, User, Clock, ArrowRight, 
  TrendingUp, Sparkles, BookOpen, Filter
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/styles/blog.scss";

export default function BlogPage() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const categoriesRef = useRef(null);
  
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.3 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.2 });
  const isCategoriesInView = useInView(categoriesRef, { once: true, amount: 0.3 });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blog categories
  const categories = [
    { name: "All", count: 24, icon: <BookOpen className="w-5 h-5" /> },
    { name: "Development", count: 12, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Design", count: 8, icon: <Sparkles className="w-5 h-5" /> },
    { name: "AI & ML", count: 6, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Mobile", count: 5, icon: <BookOpen className="w-5 h-5" /> },
    { name: "Cloud", count: 4, icon: <Sparkles className="w-5 h-5" /> }
  ];

  // Featured post
  const featuredPost = {
    title: "The Future of AI in Software Development: What 2025 Holds",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build software, from code generation to automated testing and beyond.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    category: "AI & ML",
    author: "Alex Reynolds",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    date: "November 25, 2025",
    readTime: "12 min read",
    slug: "future-of-ai-software-development"
  };

  // Blog posts
  const blogPosts = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Learn best practices for architecting microservices that can handle millions of requests per day.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      category: "Development",
      author: "Michael Osei",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      date: "November 22, 2025",
      readTime: "8 min read",
      slug: "building-scalable-microservices-nodejs"
    },
    {
      title: "Modern UI/UX Design Principles for 2025",
      excerpt: "Discover the latest design trends and principles that are shaping user experiences in modern applications.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      category: "Design",
      author: "Olivia Martinez",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
      date: "November 20, 2025",
      readTime: "10 min read",
      slug: "modern-ui-ux-design-principles-2025"
    },
    {
      title: "React Server Components: A Complete Guide",
      excerpt: "Deep dive into React Server Components and how they're changing the way we build React applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      category: "Development",
      author: "David Park",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      date: "November 18, 2025",
      readTime: "15 min read",
      slug: "react-server-components-complete-guide"
    },
    {
      title: "Mobile App Performance Optimization Tips",
      excerpt: "Essential techniques to make your mobile applications faster and more responsive.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      category: "Mobile",
      author: "Samantha Chen",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
      date: "November 15, 2025",
      readTime: "9 min read",
      slug: "mobile-app-performance-optimization"
    },
    {
      title: "Kubernetes Best Practices for Production",
      excerpt: "Learn how to deploy and manage containerized applications in production environments.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      category: "Cloud",
      author: "Alex Reynolds",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
      date: "November 12, 2025",
      readTime: "11 min read",
      slug: "kubernetes-best-practices-production"
    },
    {
      title: "The Rise of Edge Computing in Web Development",
      excerpt: "Understanding how edge computing is transforming web application performance and user experience.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      category: "Cloud",
      author: "Michael Osei",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      date: "November 10, 2025",
      readTime: "7 min read",
      slug: "rise-of-edge-computing-web-development"
    }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 blog-hero-pattern opacity-10"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 blog-particles">
          <div className="blog-particle"></div>
          <div className="blog-particle"></div>
          <div className="blog-particle"></div>
          <div className="blog-particle"></div>
          <div className="blog-particle"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="blog-hero-badge mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Latest Insights & Stories
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 blog-hero-title">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 blog-hero-subtitle max-w-2xl mx-auto">
              Discover insights, tutorials, and industry trends from our team of experts
            </p>
            
            {/* Search Bar */}
            <div className="blog-hero-search max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px]">
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Categories Filter */}
      <section ref={categoriesRef} className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`flex items-center justify-between mb-8 transform transition-all duration-1000 ${isCategoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold flex items-center">
                <Filter className="w-6 h-6 mr-2 text-emerald-600" />
                Browse by Category
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {categories.map((category, idx) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`blog-category-chip transform transition-all duration-700 ${isCategoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${
                    selectedCategory === category.name
                      ? 'bg-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.name
                      ? 'bg-white/20'
                      : 'bg-gray-200'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section ref={featuredRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isFeaturedInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-emerald-600" />
                Featured Article
              </h2>
              
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="blog-featured-card group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <Image
                            src={featuredPost.authorImage}
                            alt={featuredPost.author}
                            width={32}
                            height={32}
                            className="rounded-full mr-2"
                          />
                          <span className="font-medium">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                        Read Full Article
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section ref={gridRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transform transition-all duration-1000 ${isGridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-gray-600 text-lg">
                Stay updated with our latest posts and insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <Link 
                  key={idx} 
                  href={`/blog/${post.slug}`}
                  className={`blog-post-card group transform transition-all duration-700 ${isGridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-600 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={24}
                            height={24}
                            className="rounded-full mr-2"
                          />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get the latest articles, tutorials, and insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}