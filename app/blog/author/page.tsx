// app/blog/author/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Mail, Linkedin, Twitter, Github, MapPin, Award,
  BookOpen, TrendingUp, Users, Calendar, ArrowRight,
  MessageCircle, Eye, Star, Coffee
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/styles/blog.scss";

export default function AuthorPage() {
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  
  const heroRef = useRef(null);
  const authorsRef = useRef(null);
  const statsRef = useRef(null);
  
  const isAuthorsInView = useInView(authorsRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const authors = [
    {
      name: "Alex Reynolds",
      role: "CEO & Founder",
      bio: "Passionate about building scalable web applications and sharing knowledge with the developer community. 15+ years of experience in software architecture and team leadership.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      expertise: ["Web Development", "System Architecture", "Leadership"],
      location: "San Francisco, CA",
      articlesCount: 18,
      totalViews: "42.5k",
      followers: "3.2k",
      joinedDate: "Jan 2020",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "alex@softrinx.com"
      },
      recentArticles: [
        {
          title: "The Future of Web Development: What's Next in 2025",
          slug: "future-of-web-development-2025",
          views: "5.2k",
          date: "Nov 25, 2025"
        },
        {
          title: "Building Scalable React Applications with Next.js 16",
          slug: "scalable-react-nextjs-16",
          views: "3.1k",
          date: "Nov 22, 2025"
        }
      ]
    },
    {
      name: "Samantha Chen",
      role: "CTO & AI Specialist",
      bio: "Tech visionary specializing in AI/ML implementation and cloud architecture. Helping teams leverage cutting-edge technology to solve real-world problems.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      expertise: ["AI & ML", "Cloud Architecture", "Data Science"],
      location: "Seattle, WA",
      articlesCount: 15,
      totalViews: "38.2k",
      followers: "2.8k",
      joinedDate: "Mar 2020",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "samantha@softrinx.com"
      },
      recentArticles: [
        {
          title: "AI-Powered Development: Tools That Boost Productivity",
          slug: "ai-powered-development-tools",
          views: "4.5k",
          date: "Nov 18, 2025"
        },
        {
          title: "Machine Learning on Mobile: TensorFlow Lite Best Practices",
          slug: "ml-mobile-tensorflow-lite",
          views: "2.1k",
          date: "Nov 15, 2025"
        }
      ]
    },
    {
      name: "Michael Osei",
      role: "Lead Developer",
      bio: "Full-stack engineer with a passion for clean code and developer experience. Love teaching complex concepts through practical examples.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
      expertise: ["React", "Node.js", "TypeScript"],
      location: "London, UK",
      articlesCount: 22,
      totalViews: "56.8k",
      followers: "4.1k",
      joinedDate: "Feb 2020",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "michael@softrinx.com"
      },
      recentArticles: [
        {
          title: "State Management in 2025: Redux vs Zustand vs Jotai",
          slug: "state-management-comparison-2025",
          views: "1.5k",
          date: "Nov 20, 2025"
        },
        {
          title: "The Art of Component API Design in React",
          slug: "component-api-design-react",
          views: "1.4k",
          date: "Nov 17, 2025"
        }
      ]
    },
    {
      name: "Olivia Martinez",
      role: "Design Director",
      bio: "Award-winning designer focused on creating intuitive user experiences. Believer in design systems and accessible design for everyone.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      expertise: ["UI/UX Design", "Design Systems", "Accessibility"],
      location: "Barcelona, Spain",
      articlesCount: 16,
      totalViews: "45.3k",
      followers: "3.5k",
      joinedDate: "Apr 2020",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "olivia@softrinx.com"
      },
      recentArticles: [
        {
          title: "The Psychology of User Interface Design",
          slug: "psychology-ui-design",
          views: "3.7k",
          date: "Nov 19, 2025"
        },
        {
          title: "Mobile-First Design: Creating Responsive Experiences",
          slug: "mobile-first-design-guide",
          views: "2.8k",
          date: "Nov 16, 2025"
        }
      ]
    },
    {
      name: "David Park",
      role: "Mobile Development Lead",
      bio: "Native app specialist passionate about performance and user experience. Building mobile apps that users love on iOS and Android.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
      expertise: ["iOS", "Android", "React Native"],
      location: "Seoul, South Korea",
      articlesCount: 14,
      totalViews: "32.7k",
      followers: "2.4k",
      joinedDate: "May 2020",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "david@softrinx.com"
      },
      recentArticles: [
        {
          title: "Cross-Platform Mobile Development with React Native",
          slug: "react-native-cross-platform",
          views: "2.3k",
          date: "Nov 15, 2025"
        },
        {
          title: "SwiftUI vs Flutter: Native Performance Comparison 2025",
          slug: "swiftui-vs-flutter-2025",
          views: "1.8k",
          date: "Nov 12, 2025"
        }
      ]
    },
    {
      name: "Rebecca Johnson",
      role: "DevOps Engineer",
      bio: "Infrastructure enthusiast helping teams deploy faster and more reliably. Passionate about automation, monitoring, and cloud technologies.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&q=80",
      coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
      expertise: ["DevOps", "AWS", "Kubernetes"],
      location: "Austin, TX",
      articlesCount: 12,
      totalViews: "28.9k",
      followers: "2.1k",
      joinedDate: "Jun 2020",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
        email: "rebecca@softrinx.com"
      },
      recentArticles: [
        {
          title: "Serverless at Scale: Lessons from Production",
          slug: "serverless-at-scale",
          views: "3.2k",
          date: "Nov 14, 2025"
        },
        {
          title: "DevOps Best Practices for Modern Applications",
          slug: "devops-best-practices",
          views: "1.9k",
          date: "Nov 11, 2025"
        }
      ]
    }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="author-float-circle absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="author-float-circle-delayed absolute bottom-10 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="author-sparkle-bg absolute inset-0"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="author-badge inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Meet Our Writers</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 author-hero-title">
              Expert <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Authors</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 author-hero-subtitle">
              Learn from industry professionals sharing their knowledge and experience
            </p>

            <div className="author-stats flex flex-wrap justify-center gap-8">
              {[
                { icon: <BookOpen className="w-6 h-6" />, value: "97+", label: "Articles Published" },
                { icon: <Users className="w-6 h-6" />, value: "18k+", label: "Community Members" },
                { icon: <Award className="w-6 h-6" />, value: "6", label: "Expert Authors" }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <div className="text-purple-300">{stat.icon}</div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authors Grid */}
      <section ref={authorsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isAuthorsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Content Creators</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Industry experts passionate about sharing knowledge and helping you grow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authors.map((author, idx) => (
                <article 
                  key={idx}
                  className={`author-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isAuthorsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Cover Image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={author.coverImage}
                      alt={`${author.name} cover`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  </div>

                  {/* Profile Picture - Overlapping */}
                  <div className="relative px-6 -mt-16 mb-4">
                    <div className="relative w-32 h-32 mx-auto">
                      <Image
                        src={author.image}
                        alt={author.name}
                        fill
                        className="rounded-full border-4 border-white shadow-xl object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white border-4 border-white">
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="px-6 pb-6 text-center">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-emerald-600 transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-2">{author.role}</p>
                    
                    <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {author.location}
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {author.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {author.expertise.map((skill, skillIdx) => (
                        <span 
                          key={skillIdx}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-100">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{author.articlesCount}</div>
                        <div className="text-xs text-gray-500">Articles</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{author.totalViews}</div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{author.followers}</div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mb-4">
                      <a 
                        href={author.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 rounded-full transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={author.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 hover:bg-sky-100 hover:text-sky-600 rounded-full transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a 
                        href={author.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 rounded-full transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:${author.social.email}`}
                        className="p-2 bg-gray-100 hover:bg-emerald-100 hover:text-emerald-600 rounded-full transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    {/* View Profile Button */}
                    <button 
                      onClick={() => setSelectedAuthor(selectedAuthor === author.name ? null : author.name)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center group"
                    >
                      {selectedAuthor === author.name ? 'Hide' : 'View'} Articles
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Recent Articles Dropdown */}
                    <div className={`mt-4 overflow-hidden transition-all duration-500 ${
                      selectedAuthor === author.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="text-sm font-semibold text-gray-700 mb-3">Recent Articles:</div>
                        {author.recentArticles.map((article, articleIdx) => (
                          <Link
                            key={articleIdx}
                            href={`/blog/${article.slug}`}
                            className="block p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg transition-colors group/article"
                          >
                            <div className="font-medium text-sm mb-1 group-hover/article:text-emerald-600 transition-colors">
                              {article.title}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {article.date}
                              </span>
                              <span className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {article.views}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-12 transform transition-all duration-1000 ${isStatsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
              <p className="text-gray-600">Together, we're building a knowledge-sharing community</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: <BookOpen className="w-10 h-10" />, value: "97+", label: "Total Articles", color: "emerald" },
                { icon: <Eye className="w-10 h-10" />, value: "244k+", label: "Total Views", color: "blue" },
                { icon: <MessageCircle className="w-10 h-10" />, value: "3.4k+", label: "Comments", color: "purple" },
                { icon: <Coffee className="w-10 h-10" />, value: "18k+", label: "Community", color: "orange" }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className={`author-stat-card text-center p-8 bg-${stat.color}-50 rounded-2xl transform transition-all duration-700 ${isStatsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-${stat.color}-100 text-${stat.color}-600 rounded-full mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Contribute?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We're always looking for talented writers to join our team and share their expertise
            </p>
            <Link 
              href="/careers"
              className="inline-block px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}