// app/about/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  Users, Award, Clock, Zap, ChevronRight, 
  Globe, Code, Smartphone, BrainCircuit, 
  PenToolIcon,
  RocketIcon,
  LifeBuoyIcon,
  Linkedin
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// Import custom SCSS for animations (you'll need to create this)
import "@/styles/about.scss";

export default function AboutPage() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const timelineRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxY(scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Team Members Data
  const teamMembers = [
    {
      name: "Alex Reynolds",
      role: "CEO & Founder",
      bio: "With over 15 years in software development, Alex founded Softrinx to create transformative digital solutions for enterprises.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Samantha Chen",
      role: "CTO",
      bio: "Technical visionary with expertise in cloud architecture, AI implementation, and scaling distributed systems.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Michael Osei",
      role: "Lead Developer",
      bio: "Full-stack expert specializing in React and Node.js ecosystems with a passion for clean, efficient code.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Olivia Martinez",
      role: "Design Director",
      bio: "Award-winning designer who transforms complex requirements into intuitive, beautiful user experiences.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "David Park",
      role: "Mobile Development Lead",
      bio: "Native app specialist with deep expertise in iOS, Android, and cross-platform development frameworks.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Rebecca Johnson",
      role: "Project Manager",
      bio: "Certified PMP with a track record of delivering complex enterprise projects on time and within budget.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&q=80",
      linkedin: "https://linkedin.com"
    }
  ];

  // Company Timeline Data
  const timelineEvents = [
    {
      year: "2010",
      title: "Founded",
      description: "Softrinx was established with a mission to create high-quality software solutions for businesses."
    },
    {
      year: "2013",
      title: "First Enterprise Client",
      description: "Secured our first Fortune 500 client, delivering a transformative supply chain management system."
    },
    {
      year: "2016",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia to better serve our growing international client base."
    },
    {
      year: "2018",
      title: "AI Division Launch",
      description: "Created a dedicated AI solutions team to help clients harness machine learning capabilities."
    },
    {
      year: "2022",
      title: "Cloud Excellence Award",
      description: "Recognized for innovative cloud architecture solutions that reduced client costs by 40%."
    },
    {
      year: "2025",
      title: "Today",
      description: "Leading a team of 100+ professionals, serving clients across 20+ countries worldwide."
    }
  ];

  // Development Process Steps
  const processSteps = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Discovery",
      description: "We deeply analyze your business needs, target audience, and project requirements."
    },
    {
      icon: <PenToolIcon className="w-8 h-8" />,
      title: "Design",
      description: "Creating intuitive UI/UX designs that balance aesthetics with functionality."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Building your solution with clean, maintainable code and best practices."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Testing",
      description: "Rigorous quality assurance to ensure your software is robust and bug-free."
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: "Deployment",
      description: "Smooth launch with continuous integration and deployment pipelines."
    },
    {
      icon: <LifeBuoyIcon className="w-8 h-8" />,
      title: "Support",
      description: "Ongoing maintenance and support to ensure your solution evolves with your business."
    }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center overflow-hidden bg-gray-900"
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 z-10"
            style={{ transform: `translateY(${parallaxY}px)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 about-heading">
              We're on a mission to <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent gradient-shift">build better software</span> for a digital world
            </h1>
            <p className="text-xl text-gray-300 mb-8 about-subheading">
              For over a decade, we've been helping businesses transform their ideas into powerful, scalable, and user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4 about-stats">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-gray-400">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section ref={missionRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Mission Content */}
              <div className={`transform transition-all duration-1000 ${isMissionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
                <div className="w-20 h-1 bg-emerald-500 mb-8"></div>
                <p className="text-gray-600 mb-6 text-lg">
                  At Softrinx, we believe that great software has the power to transform businesses and improve lives. Our mission is to deliver innovative, high-quality solutions that drive real results for our clients.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  We envision a world where technology enables businesses to operate more efficiently, connect more meaningfully with their customers, and create more positive impact in their communities.
                </p>
                
                {/* Core Values */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Excellence</h3>
                      <p className="text-gray-600">We're committed to excellence in everything we do, from code quality to client communication.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Collaboration</h3>
                      <p className="text-gray-600">We believe the best solutions come from true partnership between our team and our clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Innovation</h3>
                      <p className="text-gray-600">We continuously explore new technologies and approaches to deliver cutting-edge solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission Image */}
              <div className={`transform transition-all duration-1000 delay-300 ${isMissionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mission-image">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                    alt="Our mission"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg mission-float-element">
                    <Code className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="absolute top-1/2 right-4 bg-white p-3 rounded-lg shadow-lg mission-float-element delay-300">
                    <BrainCircuit className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="absolute bottom-4 left-1/3 bg-white p-3 rounded-lg shadow-lg mission-float-element delay-600">
                    <Smartphone className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isTeamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're a diverse team of experts passionate about creating innovative software solutions that drive real business outcomes.
              </p>
            </div>
            
            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform group hover:shadow-2xl ${isTeamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-emerald-600 hover:bg-emerald-50"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Join the Team CTA */}
            <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${isTeamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/careers" 
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Join our growing team
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isTimelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to industry leadership, our story is one of continuous growth and innovation.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, idx) => (
                  <div 
                    key={idx} 
                    className={`relative flex items-center transform transition-all duration-700 ${isTimelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    {/* Left Side (Even) or Right Side (Odd) */}
                    <div className={`flex w-full ${idx % 2 === 0 ? 'justify-end md:pr-8' : 'md:flex-row-reverse md:pl-8'}`}>
                      <div className="hidden md:block w-1/2"></div>
                      
                      <div className="relative bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-500 md:w-1/2">
                        <div className="absolute top-6 right-full mr-4 hidden md:block">
                          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                            {event.year}
                          </div>
                        </div>
                        <div className="absolute top-6 left-full ml-4 hidden md:block">
                          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                            {event.year}
                          </div>
                        </div>
                        
                        {/* Mobile Year */}
                        <div className="mb-3 md:hidden">
                          <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-medium">{event.year}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isProcessInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology that ensures quality, efficiency, and successful project delivery.
              </p>
            </div>
            
            {/* Process Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-700 transform border-b-4 border-emerald-500 hover:shadow-xl ${isProcessInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="text-emerald-500 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-emerald-600">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      {idx + 1}
                    </span>
                    Step {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4">Trusted By Industry Leaders</h2>
              <p className="text-gray-600">We've partnered with companies of all sizes across various industries</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {/* Replace with actual client logos */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 transform transition-all duration-1000 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ready to transform your business with custom software?
            </h2>
            <p className={`text-xl mb-8 text-white/80 transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's discuss your project and explore how we can help you achieve your business goals.
            </p>
            <div className={`space-x-4 transform transition-all duration-1000 delay-500 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link 
                href="/services" 
                className="inline-block px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}