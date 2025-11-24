// app/about/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { Users, Award, Code2, Timer, Briefcase } from "lucide-react";
import Image from "next/image";

// Import SASS styles for animations
import "@/styles/animations.scss";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";


export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation triggers on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements
    if (statsRef.current) observer.observe(statsRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (processRef.current) observer.observe(processRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      <Navigation/>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
            alt="Softrinx Team" 
            fill 
            style={{objectFit: "cover"}}
            priority
            className="brightness-[0.3]"
          />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
            We Build Software That <span className="text-gradient">Matters</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto slide-up">
            A team of passionate technologists building enterprise-grade solutions since 2015
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg"></div>
              <div className="absolute bottom-0 right-0 w-[80%] h-[80%] z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Our mission"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">Our Mission</h2>
              <h3 className="text-4xl font-bold mb-6">Transforming Ideas Into Impactful Software</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Softrinx was founded with a simple yet powerful mission: to help businesses solve complex problems through elegant software solutions. We&apos;re not just coders – we&apos;re strategic partners invested in your success.
              </p>
              <ul className="space-y-4">
                {[
                  "Creating software that delivers measurable business value",
                  "Building lasting partnerships with our clients",
                  "Staying at the forefront of technology innovation",
                  "Maintaining the highest standards of code quality"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-4 p-1 bg-primary-100 rounded-full text-primary-600">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact By The Numbers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users size={40} />, number: "120+", label: "Enterprise Clients" },
              { icon: <Briefcase size={40} />, number: "250+", label: "Projects Delivered" },
              { icon: <Timer size={40} />, number: "8+", label: "Years of Excellence" },
              { icon: <Code2 size={40} />, number: "1.5M+", label: "Lines of Code" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg text-center transform-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-primary-600 mb-4 mx-auto">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2 counter">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">Our Team</h2>
            <h3 className="text-4xl font-bold mb-6">Meet The Experts Behind Softrinx</h3>
            <p className="text-gray-600 text-lg">
              Our diverse team brings together decades of experience across industries, technologies, and continents. Each member is handpicked for their expertise and passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Chen",
                role: "CEO & Founder",
                bio: "Former Google engineer with 15+ years of enterprise software experience",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              },
              {
                name: "Marcus Johnson",
                role: "CTO",
                bio: "Architect behind scalable systems serving millions of users",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Sophia Patel",
                role: "Design Director",
                bio: "Award-winning UX/UI designer with a focus on user-centered experiences",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "David Mendez",
                role: "Lead Developer",
                bio: "Full-stack expert specializing in React, Node.js, and cloud architecture",
                image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              },
              {
                name: "Emma Takahashi",
                role: "Project Manager",
                bio: "Certified PMP with expertise in agile methodologies and enterprise delivery",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              },
              {
                name: "James Wilson",
                role: "DevOps Engineer",
                bio: "Infrastructure specialist with deep AWS and Azure expertise",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="team-card bg-white rounded-xl overflow-hidden shadow-lg transform-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{objectFit: "cover"}}
                    className="team-image transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-400 mb-3">Our Process</h2>
            <h3 className="text-4xl font-bold mb-6">How We Deliver Excellence</h3>
            <p className="text-gray-300 text-lg">
              Our battle-tested development process ensures consistent quality, on-time delivery, and transparent communication every step of the way.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery & Strategy",
                description: "We start by deeply understanding your business goals, user needs, and technical requirements to define a clear roadmap."
              },
              {
                number: "02",
                title: "Design & Architecture",
                description: "Our team creates intuitive UI/UX designs and robust technical architectures that form the foundation of your solution."
              },
              {
                number: "03",
                title: "Agile Development",
                description: "Using an iterative approach, we build your software in sprints, giving you visibility and control throughout development."
              },
              {
                number: "04",
                title: "Testing & Quality Assurance",
                description: "Rigorous testing ensures your software is reliable, secure, and performs exceptionally under real-world conditions."
              },
              {
                number: "05",
                title: "Deployment & Integration",
                description: "We carefully deploy your solution and integrate it with existing systems to ensure a smooth transition."
              },
              {
                number: "06",
                title: "Ongoing Support & Evolution",
                description: "Our partnership continues with proactive maintenance, performance monitoring, and continuous improvement."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="process-step relative pl-20 pb-16 transform-on-scroll"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {index < 5 && (
                  <div className="absolute left-8 top-0 w-1 h-full bg-primary-600 ml-0.5"></div>
                )}
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">Our Values</h2>
            <h3 className="text-4xl font-bold mb-6">What Sets Us Apart</h3>
            <p className="text-gray-600 text-lg">
              These core principles guide our work and define our approach to every project and client relationship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Excellence",
                description: "We never compromise on code quality, performance, or security. Our solutions are built to last."
              },
              {
                title: "Strategic Partnership",
                description: "We're more than vendors – we're partners in your success, invested in your long-term growth."
              },
              {
                title: "Radical Transparency",
                description: "Clear, honest communication is the foundation of our client relationships, even when challenges arise."
              },
              {
                title: "Continuous Learning",
                description: "Technology evolves rapidly, and we're committed to staying at the cutting edge for our clients."
              },
              {
                title: "Results-Driven Approach",
                description: "We measure our success by the tangible business outcomes our software delivers for clients."
              },
              {
                title: "User-Centered Design",
                description: "Beautiful design isn't just about aesthetics – it's about creating intuitive experiences that users love."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all hover:transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-primary-600 text-xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 max-w-3xl mx-auto">Ready to Build Something Extraordinary?</h2>
          <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise can transform your business challenges into powerful software solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary px-8 py-4 rounded-lg text-lg font-medium bg-white text-primary-900 hover:bg-gray-100 transition-colors">
              Start a Project
            <Link href="/portfolio" className="btn-secondary px-8 py-4 rounded-lg text-lg font-medium border-2 border-white hover:bg-white hover:text-primary-900 transition-colors"></Link>
              View Our Work
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}