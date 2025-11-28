// app/pricing/page.tsx
"use client";

import { useState } from "react";
import { Check, X, HelpCircle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/styles/pricing.scss";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState("business");

  const pricingData = {
    startup: [
      {
        name: "Basic",
        description: "Perfect for startups and small projects",
        monthlyPrice: 4900,
        annualPrice: 4400,
        features: [
          { name: "Custom Web Application", included: true },
          { name: "Responsive Design", included: true },
          { name: "User Authentication", included: true },
          { name: "Database Integration", included: true },
          { name: "Basic API Integration", included: true },
          { name: "Basic Analytics", included: true },
          { name: "3 Months Support", included: true },
          { name: "Priority Development", included: false },
          { name: "Advanced Security", included: false },
          { name: "Performance Optimization", included: false },
          { name: "Advanced Integrations", included: false },
          { name: "Dedicated Project Manager", included: false }
        ]
      },
      {
        name: "Growth",
        description: "Scale your startup with advanced features",
        monthlyPrice: 9900,
        annualPrice: 8900,
        popular: true,
        features: [
          { name: "Custom Web Application", included: true },
          { name: "Responsive Design", included: true },
          { name: "User Authentication", included: true },
          { name: "Database Integration", included: true },
          { name: "Advanced API Integration", included: true },
          { name: "Comprehensive Analytics", included: true },
          { name: "6 Months Support", included: true },
          { name: "Priority Development", included: true },
          { name: "Advanced Security", included: true },
          { name: "Performance Optimization", included: true },
          { name: "Advanced Integrations", included: false },
          { name: "Dedicated Project Manager", included: false }
        ]
      },
      {
        name: "Scale",
        description: "Enterprise-grade solutions for growing startups",
        monthlyPrice: 14900,
        annualPrice: 13400,
        features: [
          { name: "Custom Web Application", included: true },
          { name: "Responsive Design", included: true },
          { name: "User Authentication", included: true },
          { name: "Database Integration", included: true },
          { name: "Advanced API Integration", included: true },
          { name: "Comprehensive Analytics", included: true },
          { name: "12 Months Support", included: true },
          { name: "Priority Development", included: true },
          { name: "Advanced Security", included: true },
          { name: "Performance Optimization", included: true },
          { name: "Advanced Integrations", included: true },
          { name: "Dedicated Project Manager", included: true }
        ]
      }
    ],
    business: [
      {
        name: "Professional",
        description: "Tailored solutions for established businesses",
        monthlyPrice: 9900,
        annualPrice: 8900,
        features: [
          { name: "Custom Web & Mobile Apps", included: true },
          { name: "Advanced User Management", included: true },
          { name: "Database Architecture", included: true },
          { name: "API Development", included: true },
          { name: "Business Analytics", included: true },
          { name: "6 Months Support", included: true },
          { name: "Priority Development", included: true },
          { name: "Security Audit", included: true },
          { name: "Cloud Infrastructure", included: false },
          { name: "Legacy System Integration", included: false },
          { name: "AI/ML Features", included: false },
          { name: "24/7 Support", included: false }
        ]
      },
      {
        name: "Enterprise",
        description: "Comprehensive solutions for complex needs",
        monthlyPrice: 19900,
        annualPrice: 17900,
        popular: true,
        features: [
          { name: "Custom Web & Mobile Apps", included: true },
          { name: "Advanced User Management", included: true },
          { name: "Database Architecture", included: true },
          { name: "API Development", included: true },
          { name: "Business Analytics", included: true },
          { name: "12 Months Support", included: true },
          { name: "Priority Development", included: true },
          { name: "Security Audit", included: true },
          { name: "Cloud Infrastructure", included: true },
          { name: "Legacy System Integration", included: true },
          { name: "AI/ML Features", included: false },
          { name: "24/7 Support", included: false }
        ]
      },
      {
        name: "Premium",
        description: "Ultimate enterprise-grade solution",
        monthlyPrice: 29900,
        annualPrice: 26900,
        features: [
          { name: "Custom Web & Mobile Apps", included: true },
          { name: "Advanced User Management", included: true },
          { name: "Database Architecture", included: true },
          { name: "API Development", included: true },
          { name: "Business Analytics", included: true },
          { name: "Lifetime Support", included: true },
          { name: "Priority Development", included: true },
          { name: "Security Audit", included: true },
          { name: "Cloud Infrastructure", included: true },
          { name: "Legacy System Integration", included: true },
          { name: "AI/ML Features", included: true },
          { name: "24/7 Support", included: true }
        ]
      }
    ],
    agency: [
      {
        name: "White Label",
        description: "Resell our solutions under your brand",
        monthlyPrice: 14900,
        annualPrice: 13400,
        features: [
          { name: "White Labeled Products", included: true },
          { name: "Client Management", included: true },
          { name: "Customizable Interface", included: true },
          { name: "API Access", included: true },
          { name: "Analytics Dashboard", included: true },
          { name: "Priority Support", included: true },
          { name: "Team Training", included: true },
          { name: "Marketing Materials", included: true },
          { name: "Multiple Projects", included: false },
          { name: "Custom Development", included: false },
          { name: "Account Manager", included: false },
          { name: "Revenue Share Option", included: false }
        ]
      },
      {
        name: "Partner",
        description: "Full partnership with technical support",
        monthlyPrice: 24900,
        annualPrice: 22400,
        popular: true,
        features: [
          { name: "White Labeled Products", included: true },
          { name: "Client Management", included: true },
          { name: "Customizable Interface", included: true },
          { name: "API Access", included: true },
          { name: "Analytics Dashboard", included: true },
          { name: "Priority Support", included: true },
          { name: "Team Training", included: true },
          { name: "Marketing Materials", included: true },
          { name: "Multiple Projects", included: true },
          { name: "Custom Development", included: true },
          { name: "Account Manager", included: false },
          { name: "Revenue Share Option", included: false }
        ]
      },
      {
        name: "Strategic",
        description: "Deep partnership with shared success",
        monthlyPrice: 39900,
        annualPrice: 35900,
        features: [
          { name: "White Labeled Products", included: true },
          { name: "Client Management", included: true },
          { name: "Customizable Interface", included: true },
          { name: "API Access", included: true },
          { name: "Analytics Dashboard", included: true },
          { name: "Priority Support", included: true },
          { name: "Team Training", included: true },
          { name: "Marketing Materials", included: true },
          { name: "Multiple Projects", included: true },
          { name: "Custom Development", included: true },
          { name: "Account Manager", included: true },
          { name: "Revenue Share Option", included: true }
        ]
      }
    ]
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const activePlans = pricingData[activeTab as keyof typeof pricingData];

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-emerald-900 pt-32 pb-20 overflow-hidden pricing-hero">
        <div className="absolute inset-0 pricing-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 pricing-title">
              Transparent <span className="text-emerald-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 pricing-subtitle">
              Choose the plan that fits your business needs. All plans include high-quality development, thorough testing, and dedicated support.
            </p>
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
      
      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-2 rounded-full flex items-center billing-toggle">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    !annual ? "bg-emerald-500 text-white shadow-md" : "text-gray-600"
                  }`}
                  onClick={() => setAnnual(false)}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    annual ? "bg-emerald-500 text-white shadow-md" : "text-gray-600"
                  }`}
                  onClick={() => setAnnual(true)}
                >
                  Annual <span className="text-xs opacity-75">(Save 10%)</span>
                </button>
              </div>
            </div>
            
            {/* Category Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg p-1 bg-gray-100 category-tabs">
                {Object.keys(pricingData).map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab
                        ? "bg-emerald-500 text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "startup" ? "Startup" : tab === "business" ? "Business" : "Agency"}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all duration-500 pricing-card ${
                    plan.popular
                      ? "border-4 border-emerald-500 shadow-xl scale-105 hover:scale-110 z-10"
                      : "border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-emerald-500 py-2 text-center">
                      <span className="text-white text-sm font-bold uppercase tracking-wide">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <p className="text-5xl font-bold text-gray-900">
                        {formatPrice(annual ? plan.annualPrice : plan.monthlyPrice)}
                      </p>
                      <p className="text-gray-500 mt-1">per month</p>
                    </div>
                    
                    <a
                      href="/contact"
                      className={`block w-full py-3 px-4 rounded-lg text-center text-white font-medium transition-colors mb-8 ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      Get Started
                    </a>
                    
                    <div className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`ml-3 text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                            {feature.name}
                          </span>
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
      
      {/* Enterprise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 enterprise-section">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our listed plans cover many common scenarios, but we understand that every business is unique. Contact us for a tailored solution that meets your specific requirements.
                </p>
                <div className="space-y-4">
                  {[
                    "Tailored to your specific business needs",
                    "Custom development timelines",
                    "Specialized features and integrations",
                    "Flexible support arrangements",
                    "Customized pricing structure"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors shadow-md"
                  >
                    Contact for Custom Quote
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="text-xl font-semibold mb-4">Common Custom Requirements</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Enterprise Integration",
                        desc: "Connect with existing enterprise systems, CRMs, ERPs, and legacy platforms."
                      },
                      {
                        title: "Regulatory Compliance",
                        desc: "Ensure your solutions meet industry-specific regulations like HIPAA, GDPR, or SOC2."
                      },
                      {
                        title: "High Performance at Scale",
                        desc: "Solutions that can handle millions of users and maintain performance."
                      },
                      {
                        title: "Advanced Security",
                        desc: "Custom security protocols, penetration testing, and compliance verification."
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 p-1.5 bg-emerald-100 rounded-md">
                            <HelpCircle className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Have questions about our pricing? Find answers to common questions below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Do you offer custom pricing outside of these plans?",
                  answer: "Yes, we offer custom pricing for projects with specific requirements that fall outside our standard plans. Contact us for a consultation and personalized quote."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept credit cards, wire transfers, and ACH payments. For larger projects, we can establish a payment schedule tied to project milestones."
                },
                {
                  question: "Is there a minimum contract length?",
                  answer: "Our pricing is typically project-based rather than subscription-based. However, for ongoing support and maintenance, we offer flexible contract terms starting from 3 months."
                },
                {
                  question: "Do you offer refunds if we're not satisfied?",
                  answer: "We work closely with clients throughout the development process to ensure satisfaction. Our contracts include clear deliverables and approval stages to address any concerns before proceeding to the next phase."
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer: "Yes, you can upgrade your plan at any time. We'll credit any unused portion of your current plan toward the new plan."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 faq-item">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions about our pricing?</p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}