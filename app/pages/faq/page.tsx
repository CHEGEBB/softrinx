// app/faq/page.tsx
"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/styles/faq.scss";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("general");

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    { id: "general", label: "General Questions" },
    { id: "services", label: "Our Services" },
    { id: "pricing", label: "Pricing & Plans" },
    { id: "technical", label: "Technical Support" },
    { id: "process", label: "Our Process" }
  ];

  const faqData = {
    general: [
      {
        question: "What is Softrinx?",
        answer: "Softrinx is a premium software development agency specializing in enterprise-grade applications, web development, mobile apps, and AI solutions. We work with businesses of all sizes to create custom software that drives results."
      },
      {
        question: "How long has Softrinx been in business?",
        answer: "Softrinx was founded in 2010 and has over 15 years of experience delivering high-quality software solutions to clients across various industries including healthcare, finance, e-commerce, and manufacturing."
      },
      {
        question: "What makes Softrinx different from other development agencies?",
        answer: "We differentiate ourselves through our enterprise-focused approach, technical excellence, and commitment to delivering measurable results. Our team consists of senior developers with specialized expertise, and we emphasize long-term partnerships over short-term projects."
      },
      {
        question: "Where is Softrinx located?",
        answer: "Our headquarters is located in San Francisco, with additional offices in New York, London, and Singapore. We work with clients globally and have the capability to collaborate effectively across different time zones."
      }
    ],
    services: [
      {
        question: "What services does Softrinx offer?",
        answer: "We offer a comprehensive range of services including web application development, mobile app development, UI/UX design, cloud infrastructure, database solutions, AI and machine learning integration, and ongoing maintenance and support."
      },
      {
        question: "Does Softrinx work with startups?",
        answer: "Yes, we work with funded startups that have clear product visions. Our startup packages are tailored to help new businesses build scalable, market-ready products while maintaining the flexibility to grow and evolve."
      },
      {
        question: "Can Softrinx help with an existing project?",
        answer: "Absolutely. We regularly take over and improve existing projects. Our team can audit your current codebase, resolve technical debt, and implement improvements to enhance performance, security, and scalability."
      },
      {
        question: "What technologies does Softrinx specialize in?",
        answer: "We specialize in modern technologies including React, Next.js, Node.js, Python, Flutter, React Native, AWS, Azure, Google Cloud, and various database solutions. We're constantly evolving our tech stack to incorporate the most effective tools for each project."
      }
    ],
    pricing: [
      {
        question: "How does Softrinx price its services?",
        answer: "We offer flexible pricing models including project-based fixed price, hourly rates, and retainer arrangements. The right model depends on your project scope, timeline, and requirements. We provide detailed estimates after understanding your specific needs."
      },
      {
        question: "What is the typical budget range for a Softrinx project?",
        answer: "Our projects typically start at $50,000 for smaller initiatives and can range up to $500,000+ for enterprise-level applications. We work with you to scope projects that align with your budget while delivering the features and quality you need."
      },
      {
        question: "Does Softrinx offer any payment plans?",
        answer: "Yes, we offer milestone-based payment plans for larger projects, allowing costs to be spread out over the development timeline. We typically require a deposit to begin work, with subsequent payments tied to specific deliverables."
      },
      {
        question: "Is there a minimum contract length?",
        answer: "For ongoing support and maintenance, we offer minimum 3-month contracts. For project work, contract length is determined by the scope and complexity of the project. We're transparent about timelines during the proposal stage."
      }
    ],
    technical: [
      {
        question: "How does Softrinx ensure code quality?",
        answer: "We maintain rigorous code quality through code reviews, automated testing, CI/CD practices, and adherence to industry standards. Our development process includes unit tests, integration tests, and end-to-end tests to ensure reliability."
      },
      {
        question: "What is Softrinx's approach to security?",
        answer: "Security is integrated into every stage of our development process. We implement best practices for data encryption, authentication, authorization, and protection against common vulnerabilities. We also offer security audits and penetration testing for critical applications."
      },
      {
        question: "How does Softrinx handle ongoing maintenance?",
        answer: "We offer comprehensive maintenance packages that include bug fixes, security updates, performance monitoring, and regular feature enhancements. Our support team is available to address issues promptly and ensure your application continues to run smoothly."
      },
      {
        question: "Can Softrinx help with deployment and infrastructure?",
        answer: "Yes, we provide full DevOps services including infrastructure setup, deployment automation, monitoring, and scaling solutions. We work with major cloud providers and can recommend the most cost-effective and reliable setup for your application."
      }
    ],
    process: [
      {
        question: "What is Softrinx's development process?",
        answer: "We follow an agile development methodology with regular sprints, demos, and feedback cycles. Our typical process includes discovery, planning, design, development, testing, deployment, and post-launch support phases."
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity and scope. A standard web application might take 3-6 months from concept to launch, while more complex enterprise systems can take 6-12 months. We provide detailed timelines during the proposal phase."
      },
      {
        question: "How does Softrinx communicate during projects?",
        answer: "We maintain clear, consistent communication through dedicated project managers. We use tools like Slack, Jira, and regular video calls to keep you updated on progress. Weekly sprint demos ensure you're always aware of what's being delivered."
      },
      {
        question: "Does Softrinx provide documentation?",
        answer: "Yes, we provide comprehensive documentation for all projects, including technical documentation, user guides, and API documentation when applicable. This ensures your team can understand and maintain the system effectively."
      }
    ]
  };

  const filteredFAQs = searchQuery.length > 2
    ? Object.values(faqData).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqData[activeTab as keyof typeof faqData];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-emerald-900 pt-32 pb-20 overflow-hidden faq-hero">
        <div className="absolute inset-0 faq-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 faq-title">
              Frequently Asked <span className="text-emerald-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 faq-subtitle">
              Find answers to the most common questions about our services, process, and expertise.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {searchQuery.length <= 2 && (
              <div className="mb-10 overflow-x-auto faq-tabs">
                <div className="flex space-x-2 min-w-max">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                        activeTab === category.id
                          ? "bg-emerald-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveTab(category.id)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {searchQuery.length > 2 && filteredFAQs.length === 0 && (
              <div className="text-center py-10">
                <p className="text-2xl text-gray-600 mb-4">No results found</p>
                <p className="text-gray-500">Try different keywords or browse our categories</p>
              </div>
            )}
            
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={index}
                  className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "shadow-lg" : "hover:shadow-md"
                  }`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left p-6 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-500 transition-transform duration-300 ${
                        activeIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96 faq-answer-visible" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 faq-answer">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="mailto:support@softrinx.com"
                className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full border-2 border-emerald-500 hover:bg-emerald-50 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default FAQPage;