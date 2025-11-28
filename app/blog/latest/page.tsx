// app/blog/latest/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Calendar, Clock, TrendingUp, Flame, Star, 
  ArrowRight, Eye, MessageCircle, Bookmark, Share2
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/styles/blog.scss";

export default function LatestBlogPage() {
  const [filter, setFilter] = useState("all");
  
  const heroRef = useRef(null);
  const trendingRef = useRef(null);
  const postsRef = useRef(null);
  
  const isTrendingInView = useInView(trendingRef, { once: true, amount: 0.3 });
  const isPostsInView = useInView(postsRef, { once: true, amount: 0.2 });

  const latestPosts = [
    {
      title: "Real-Time Collaboration: Building the Next Generation of Team Tools",
      excerpt: "Dive deep into WebSockets, operational transforms, and CRDT algorithms powering modern collaborative applications like Figma and Notion.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      category: "Web Development",
      author: "Alex Reynolds",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
      date: "2 hours ago",
      readTime: "14 min read",
      views: "1.2k",
      comments: 45,
      trending: true,
      slug: "realtime-collaboration-tools"
    },
    {
      title: "Microservices Architecture: When to Break the Monolith",
      excerpt: "A practical guide to understanding when microservices make sense for your application and how to migrate successfully.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      category: "DevOps",
      author: "Rebecca Johnson",
      authorImage: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&q=80",
      date: "5 hours ago",
      readTime: "11 min read",
      views: "890",
      comments: 32,
      trending: true,
      slug: "microservices-architecture-guide"
    },
    {
      title: "Designing for Accessibility: Beyond WCAG Compliance",
      excerpt: "Creating truly inclusive digital experiences that go beyond checkboxes and truly serve all users effectively.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      category: "UI/UX Design",
      author: "Olivia Martinez",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
      date: "8 hours ago",
      readTime: "10 min read",
      views: "756",
      comments: 28,
      trending: false,
      slug: "accessibility-design-guide"
    },
    {
      title: "State Management in 2025: Redux vs Zustand vs Jotai",
      excerpt: "Comparing modern state management solutions to help you choose the right tool for your React application's needs.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      category: "Web Development",
      author: "Michael Osei",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      date: "12 hours ago",
      readTime: "13 min read",
      views: "1.5k",
      comments: 67,
      trending: true,
      slug: "state-management-comparison-2025"
    },
    {
      title: "Machine Learning on Mobile: TensorFlow Lite Best Practices",
      excerpt: "Optimize and deploy ML models on iOS and Android devices with practical tips for performance and battery efficiency.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      category: "AI & ML",
      author: "Samantha Chen",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
      date: "1 day ago",
      readTime: "16 min read",
      views: "2.1k",
      comments: 89,
      trending: true,
      slug: "ml-mobile-tensorflow-lite"
    },
    {
      title: "SwiftUI vs Flutter: Native Performance Comparison 2025",
      excerpt: "An in-depth analysis of performance, developer experience, and ecosystem maturity between Apple's and Google's frameworks.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      category: "Mobile Apps",
      author: "David Park",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      date: "1 day ago",
      readTime: "12 min read",
      views: "1.8k",
      comments: 54,
      trending: false,
      slug: "swiftui-vs-flutter-2025"
    },
    {
      title: "Serverless at Scale: Lessons from Production",
      excerpt: "Real-world insights on running serverless architectures for millions of requests per day with AWS Lambda and Azure Functions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      category: "DevOps",
      author: "Rebecca Johnson",
      authorImage: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&q=80",
      date: "2 days ago",
      readTime: "15 min read",
      views: "3.2k",
      comments: 112,
      trending: true,
      slug: "serverless-at-scale"
    },
    {
      title: "The Art of Component API Design in React",
      excerpt: "Learn how to create intuitive, flexible, and maintainable component interfaces that other developers will love using.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      category: "Web Development",
      author: "Alex Reynolds",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
      date: "2 days ago",
      readTime: "9 min read",
      views: "1.4k",
      comments: 41,
      trending: false,
      slug: "component-api-design-react"
    }
  ];

  const filteredPosts = filter === "all" 
    ? latestPosts 
    : filter === "trending"
    ? latestPosts.filter(post => post.trending)
    : latestPosts;

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section - Minimal & Clean */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="latest-pulse-ring absolute top-20 right-20 w-96 h-96 border-4 border-emerald-200 rounded-full"></div>
          <div className="latest-pulse-ring-delayed absolute bottom-20 left-20 w-64 h-64 border-4 border-teal-200 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="latest-badge inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 mb-6">
              <Flame className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Hot Off the Press</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 latest-hero-title">
              Latest <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Articles</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 latest-hero-subtitle">
              Fresh insights, tutorials, and stories from the world of technology
            </p>

            {/* Filter Tabs */}
            <div className="latest-filter-tabs flex justify-center gap-4">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === "all"
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                All Posts
              </button>
              <button
                onClick={() => setFilter("trending")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                  filter === "trending"
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Highlight Bar */}
      {filter === "all" && (
        <section className="py-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 text-center">
              <Flame className="w-5 h-5 animate-pulse" />
              <span className="font-medium">
                6 articles are trending right now • Top article has 3.2k views
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts Grid - Timeline Style */}
      <section ref={postsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {filteredPosts.map((post, idx) => (
                <article 
                  key={idx}
                  className={`latest-timeline-card group bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform ${isPostsInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="grid md:grid-cols-5 gap-6 p-6">
                    {/* Image Column */}
                    <div className="md:col-span-2 relative h-56 md:h-full min-h-[200px] rounded-xl overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {post.trending && (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center">
                          <Flame className="w-3 h-3 mr-1" />
                          Trending
                        </div>
                      )}
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <div className="font-medium text-sm">{post.author}</div>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {post.readTime}
                              </span>
                              <span className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {post.views}
                              </span>
                              <span className="flex items-center">
                                <MessageCircle className="w-3 h-3 mr-1" />
                                {post.comments}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                            <Bookmark className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                            <Share2 className="w-5 h-5" />
                          </button>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-colors ml-2"
                          >
                            Read
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className={`text-center mt-12 transform transition-all duration-1000 delay-700 ${isPostsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Star className="w-8 h-8" />, value: "48+", label: "Articles" },
              { icon: <Eye className="w-8 h-8" />, value: "125k+", label: "Total Views" },
              { icon: <MessageCircle className="w-8 h-8" />, value: "2.3k+", label: "Comments" },
              { icon: <TrendingUp className="w-8 h-8" />, value: "15k+", label: "Readers" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center latest-stat-card">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}