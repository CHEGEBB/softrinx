// app/services/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Code, Layout, Smartphone, Database, Cloud, Globe, ChevronRight, Cpu, LineChart } from "lucide-react";

import "@/styles/animations.scss";

export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

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
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (techStackRef.current) observer.observe(techStackRef.current);
    if (industriesRef.current) observer.observe(industriesRef.current);

    return () => observer.disconnect();
  }, []);

  // Service offerings data
  const services = [
    {
      icon: <Layout size={32} />,
      title: "Web Applications",
      description: "Scalable, high-performance web apps that deliver exceptional user experiences and drive business growth.",
      features: ["Modern UI/UX", "Scalable architecture", "SEO optimization", "Enterprise integration"],
      priceRange: "$25k - $150k+",
      timeline: "2-6 months",
      ctaLink: "/contact",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions with seamless performance and stunning interfaces.",
      features: ["iOS & Android", "React Native", "Offline capabilities", "App store optimization"],
      priceRange: "$30k - $120k+",
      timeline: "3-5 months",
      ctaLink: "/contact",
    },
    {
      icon: <Database size={32} />,
      title: "Custom Software",
      description: "Bespoke software tailored to your unique business requirements and workflows.",
      features: ["Requirements analysis", "Custom architecture", "Seamless integrations", "Training & documentation"],
      priceRange: "$50k - $250k+",
      timeline: "3-8 months",
      ctaLink: "/contact",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS/Azure/GCP", "Serverless architecture", "DevOps automation", "Cost optimization"],
      priceRange: "$15k - $100k+",
      timeline: "1-4 months",
      ctaLink: "/contact",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage machine learning and AI to transform your business capabilities.",
      features: ["Data analysis", "Predictive models", "Natural language processing", "Computer vision"],
      priceRange: "$40k - $200k+",
      timeline: "3-7 months",
      ctaLink: "/contact",
    },
    {
      icon: <LineChart size={32} />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with custom dashboards and reporting solutions.",
      features: ["Real-time analytics", "Interactive dashboards", "Data visualization", "BI integration"],
      priceRange: "$20k - $120k+",
      timeline: "2-5 months",
      ctaLink: "/contact",
    },
  ];

  // Tech stack categories
  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vue", "Angular", "Svelte", "TypeScript"],
      color: "bg-blue-600",
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "Go", "C#", ".NET", "PHP"],
      color: "bg-green-600",
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
      color: "bg-orange-600",
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "ElasticSearch"],
      color: "bg-purple-600",
    },
    {
      category: "DevOps",
      technologies: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "CI/CD", "Terraform"],
      color: "bg-red-600",
    },
  ];

  // Industry expertise
  const industries = [
    { name: "FinTech", image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
    { name: "E-commerce", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
    { name: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80" },
    { name: "SaaS", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" },
    { name: "Manufacturing", image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1762&q=80" },
  ];

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
            alt="Softrinx Services" 
            fill 
            style={{objectFit: "cover"}}
            priority
            className="brightness-[0.2]"
          />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto slide-up">
            Comprehensive software development solutions crafted for your business needs
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">Our Approach</h2>
              <h3 className="text-4xl font-bold mb-6">We Don&apos;t Just Build Software, We Solve Business Problems</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Our approach goes beyond just writing code. We start by understanding your business goals, user needs, and market challenges. This strategic foundation ensures we build solutions that deliver real business value.
              </p>
              <ul className="space-y-4">
                {[
                  "Strategic discovery to identify the core business problems",
                  "User-centered design that prioritizes the end-user experience",
                  "Agile development methodology for flexibility and transparency",
                  "Enterprise-grade security and scalability built in from day one",
                  "Ongoing support and optimization for long-term success"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-4 p-1 bg-primary-100 rounded-full text-primary-600 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Our approach to software development"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">Our Services</h2>
            <h3 className="text-4xl font-bold mb-6">Comprehensive Software Solutions</h3>
            <p className="text-gray-600 text-lg">
              From innovative startups to global enterprises, we deliver tailored software solutions that drive real business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 transform-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary-100 text-primary-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-600">
                          <ChevronRight size={16} className="mr-2 text-primary-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between pt-6 border-t border-gray-100">
                    <div className="mb-4 sm:mb-0">
                      <span className="text-sm text-gray-500 block">Typical Budget</span>
                      <span className="font-medium">{service.priceRange}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block">Timeline</span>
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <Link 
                    href={service.ctaLink}
                    className="text-primary-600 font-medium hover:text-primary-800 flex items-center"
                  >
                    Get Started
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">Interactive Demo</h2>
            <h3 className="text-4xl font-bold mb-6">Experience Our Expertise Firsthand</h3>
            <p className="text-gray-600 text-lg">
              Explore this interactive demo to see how we approach web application development with modern technologies and best practices.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="p-4 bg-gray-800 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-gray-400 text-sm">Demo Application</div>
            </div>
            <div className="relative h-[600px] border border-gray-800">
              <iframe 
                src="about:blank" // Replace with an actual demo URL in production
                className="absolute inset-0 w-full h-full"
                title="Interactive Demo"
              ></iframe>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center mx-auto mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Interactive Project Demo</h4>
                  <p className="text-gray-300 mb-8 max-w-md mx-auto">
                    Click to explore a real-world application we&apos;ve built and see our development approach in action.
                  </p>
                  <button className="px-6 py-3 bg-white text-primary-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Launch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techStackRef} className="py-24 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-400 mb-3">Our Tech Stack</h2>
            <h3 className="text-4xl font-bold mb-6">Cutting-Edge Technologies</h3>
            <p className="text-gray-300 text-lg">
              We leverage the best technologies for each project, ensuring optimal performance, scalability, and maintainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 ${category.color}`}></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section ref={industriesRef} className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">Industry Expertise</h2>
            <h3 className="text-4xl font-bold mb-6">Domain-Specific Knowledge</h3>
            <p className="text-gray-600 text-lg">
              We&apos;ve developed deep expertise across various industries, allowing us to understand your specific challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="relative h-72 rounded-xl overflow-hidden shadow-lg group transform-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  style={{objectFit: "cover"}}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-white">{industry.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">Our Process</h2>
            <h3 className="text-4xl font-bold mb-6">How We Deliver Excellence</h3>
            <p className="text-gray-600 text-lg">
              Our well-defined process ensures consistent quality, transparency, and on-time delivery for every project.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description: "We analyze your requirements, goals, and challenges to create a strategic roadmap.",
                  color: "bg-blue-600",
                },
                {
                  number: "02",
                  title: "Design",
                  description: "Our team creates intuitive UI/UX designs and robust technical architectures.",
                  color: "bg-green-600",
                },
                {
                  number: "03",
                  title: "Development",
                  description: "We build your solution using agile methodology with regular demos and feedback.",
                  color: "bg-yellow-600",
                },
                {
                  number: "04",
                  title: "Deployment",
                  description: "We carefully deploy and integrate your solution with ongoing support.",
                  color: "bg-red-600",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className={`h-2 ${step.color}`}></div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <span className="text-gray-800 font-bold">{step.number}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary-600 mb-3">FAQ</h2>
            <h3 className="text-4xl font-bold mb-6">Common Questions</h3>
            <p className="text-gray-600 text-lg">
              Answers to questions we frequently receive about our services and process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How do you determine the cost of a project?",
                  answer: "We evaluate project complexity, timeline, features, and technical requirements to provide a detailed estimate. We offer both fixed-price and time-and-materials pricing models depending on your needs."
                },
                {
                  question: "What's your typical development timeline?",
                  answer: "Timelines vary by project complexity. A simple web application might take 2-3 months, while enterprise systems can take 6+ months. We provide detailed timelines during the discovery phase."
                },
                {
                  question: "Do you provide post-launch support?",
                  answer: "Yes, we offer flexible maintenance and support packages to ensure your software continues to perform optimally. This includes bug fixes, security updates, and ongoing optimization."
                },
                {
                  question: "How do you handle intellectual property rights?",
                  answer: "Upon final payment, all intellectual property rights for custom-developed software transfer to you. We provide complete source code and documentation."
                },
                {
                  question: "Can you work with our existing technology stack?",
                  answer: "Absolutely. We're technology-agnostic and can work with your existing systems. We'll evaluate your current stack and recommend the best approach for integration or enhancement."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 max-w-3xl mx-auto">Ready to Discuss Your Project?</h2>
          <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals with custom software solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary px-8 py-4 rounded-lg text-lg font-medium bg-white text-primary-900 hover:bg-gray-100 transition-colors">
              Schedule Consultation
            <Link href="/portfolio" className="btn-secondary px-8 py-4 rounded-lg text-lg font-medium border-2 border-white hover:bg-white hover:text-primary-900 transition-colors"></Link>
              Browse Our Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}