// app/contact/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, ChevronRight, ChevronDown, Check } from "lucide-react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import "@/styles/animations.scss";
import Link from "next/link";

// Define form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string(),
  budget: z.string(),
  timeline: z.string(),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;



export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteTotal, setQuoteTotal] = useState<number | null>(null);
  const [quoteRange, setQuoteRange] = useState<string>("");

  // Quote calculator state
  const [quoteOptions, setQuoteOptions] = useState({
    projectType: "",
    features: [] as string[],
    complexity: "",
    timeline: "",
  });

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormValues>();

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
    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  // Calculate quote based on selected options
  useEffect(() => {
    if (quoteOptions.projectType && quoteOptions.complexity && quoteOptions.timeline) {
      let basePrice = 0;
      
      // Base price by project type
      switch (quoteOptions.projectType) {
        case "web":
          basePrice = 25000;
          break;
        case "mobile":
          basePrice = 35000;
          break;
        case "custom":
          basePrice = 45000;
          break;
        default:
          basePrice = 20000;
      }
      
      // Multiply by complexity factor
      const complexityMultiplier = 
        quoteOptions.complexity === "simple" ? 1 : 
        quoteOptions.complexity === "medium" ? 1.5 : 
        quoteOptions.complexity === "complex" ? 2 : 1;
      
      // Add feature costs
      const featureCost = quoteOptions.features.length * 5000;
      
      // Timeline factor (faster = more expensive)
      const timelineMultiplier = 
        quoteOptions.timeline === "asap" ? 1.3 : 
        quoteOptions.timeline === "3months" ? 1 : 
        quoteOptions.timeline === "6months" ? 0.9 : 1;
      
      // Calculate total
      const calculatedTotal = (basePrice + featureCost) * complexityMultiplier * timelineMultiplier;
      
      // Set range (±15%)
      const lowerRange = Math.round(calculatedTotal * 0.85 / 1000) * 1000;
      const upperRange = Math.round(calculatedTotal * 1.15 / 1000) * 1000;
      
      setQuoteTotal(calculatedTotal);
      setQuoteRange(`$${lowerRange.toLocaleString()} - $${upperRange.toLocaleString()}`);
    }
  }, [quoteOptions]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would send data to a backend API
      console.log(data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setQuoteOptions(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
            alt="Contact Softrinx" 
            fill 
            style={{objectFit: "cover"}}
            priority
            className="brightness-[0.2]"
          />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto slide-up">
            Start the conversation about your next software project
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail size={24} />,
                title: "Email",
                info: "hello@softrinx.com",
                detail: "We respond within 24 hours",
                link: "mailto:hello@softrinx.com",
              },
              {
                icon: <Phone size={24} />,
                title: "Phone",
                info: "+1 (555) 123-4567",
                detail: "Monday-Friday, 9AM-6PM EST",
                link: "tel:+15551234567",
              },
              {
                icon: <MapPin size={24} />,
                title: "Location",
                info: "San Francisco, CA",
                detail: "123 Tech Plaza, Suite 400",
                link: "https://maps.google.com",
              },
              {
                icon: <Clock size={24} />,
                title: "Working Hours",
                info: "9AM - 6PM EST",
                detail: "Available globally for clients",
                link: null,
              }
            ].map((contact, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a href={contact.link} className="text-primary-600 hover:underline">{contact.info}</a>
                ) : (
                  <p className="text-gray-800">{contact.info}</p>
                )}
                <p className="text-sm text-gray-500 mt-2">{contact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quote Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below to discuss your project, or use our interactive quote calculator for an instant estimate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div ref={formRef} className="transform-on-scroll">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
                    
                    {isSubmitted ? (
                      <div className="text-center py-10">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Check size={32} className="text-green-600" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                        <p className="text-gray-600 mb-6">
                          We&apos;ve received your message and will get back to you within 24 hours.
                        </p>
                        <button 
                          onClick={() => setIsSubmitted(false)} 
                          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Your Name *
                            </label>
                            <input
                              id="name"
                              type="text"
                              className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              placeholder="John Doe"
                              {...register("name", { required: true })}
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red-600">{errors.name.message || "Name is required"}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address *
                            </label>
                            <input
                              id="email"
                              type="email"
                              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              placeholder="john@example.com"
                              {...register("email", { required: true })}
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-600">{errors.email.message || "Valid email is required"}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                              Company Name
                            </label>
                            <input
                              id="company"
                              type="text"
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                              placeholder="Your Company"
                              {...register("company")}
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                              placeholder="+1 (555) 123-4567"
                              {...register("phone")}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                              Service Needed *
                            </label>
                            <select
                              id="service"
                              className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              {...register("service", { required: true })}
                            >
                              <option value="">Select a service</option>
                              <option value="web">Web Application</option>
                              <option value="mobile">Mobile Application</option>
                              <option value="custom">Custom Software</option>
                              <option value="cloud">Cloud Solutions</option>
                              <option value="ai">AI & Machine Learning</option>
                              <option value="data">Data Analytics</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.service && (
                              <p className="mt-1 text-sm text-red-600">Please select a service</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                              Budget Range *
                            </label>
                            <select
                              id="budget"
                              className={`w-full px-4 py-3 rounded-lg border ${errors.budget ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              {...register("budget", { required: true })}
                            >
                              <option value="">Select budget</option>
                              <option value="below25k">Below $25,000</option>
                              <option value="25k-50k">$25,000 - $50,000</option>
                              <option value="50k-100k">$50,000 - $100,000</option>
                              <option value="100k-250k">$100,000 - $250,000</option>
                              <option value="above250k">Above $250,000</option>
                              <option value="not_sure">Not sure yet</option>
                            </select>
                            {errors.budget && (
                              <p className="mt-1 text-sm text-red-600">Please select a budget range</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                              Timeline *
                            </label>
                            <select
                              id="timeline"
                              className={`w-full px-4 py-3 rounded-lg border ${errors.timeline ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              {...register("timeline", { required: true })}
                            >
                              <option value="">Select timeline</option>
                              <option value="immediate">Immediate (ASAP)</option>
                              <option value="1-3months">1-3 months</option>
                              <option value="3-6months">3-6 months</option>
                              <option value="6months+">6+ months</option>
                              <option value="not_sure">Not sure yet</option>
                            </select>
                            {errors.timeline && (
                              <p className="mt-1 text-sm text-red-600">Please select a timeline</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Details *
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            placeholder="Tell us about your project, goals, and any specific requirements..."
                            {...register("message", { required: true, minLength: 10 })}
                          ></textarea>
                          {errors.message && (
                            <p className="mt-1 text-sm text-red-600">{errors.message.message || "Please provide project details"}</p>
                          )}
                        </div>
                        
                        <button
                          type="submit"
                          className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium flex items-center justify-center transition-colors"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send size={20} className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Quote Calculator */}
              <div className="transform-on-scroll" style={{ transitionDelay: "200ms" }}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Project Estimator</h3>
                    <p className="text-gray-600 mb-6">
                      Get an instant estimate for your project. This calculator provides a ballpark figure based on your selections.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What type of project are you planning?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            { id: "web", label: "Web Application" },
                            { id: "mobile", label: "Mobile App" },
                            { id: "custom", label: "Custom Software" },
                            { id: "other", label: "Other / Not Sure" },
                          ].map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              className={`px-4 py-3 rounded-lg border ${
                                quoteOptions.projectType === option.id 
                                  ? 'bg-primary-50 border-primary-500 text-primary-700' 
                                  : 'border-gray-300 hover:border-gray-400'
                              } text-left transition-colors`}
                              onClick={() => setQuoteOptions(prev => ({ ...prev, projectType: option.id }))}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Which features do you need? (Select all that apply)
                        </label>
                        <div className="space-y-2">
                          {[
                            { id: "auth", label: "User Authentication" },
                            { id: "payment", label: "Payment Processing" },
                            { id: "api", label: "Third-party Integrations" },
                            { id: "ai", label: "AI/ML Features" },
                            { id: "analytics", label: "Analytics Dashboard" },
                            { id: "realtime", label: "Real-time Features" },
                          ].map((feature) => (
                            <div 
                              key={feature.id}
                              className={`px-4 py-3 rounded-lg border ${
                                quoteOptions.features.includes(feature.id) 
                                  ? 'bg-primary-50 border-primary-500' 
                                  : 'border-gray-300 hover:border-gray-400'
                              } flex items-center justify-between cursor-pointer transition-colors`}
                              onClick={() => handleFeatureToggle(feature.id)}
                            >
                              <span>{feature.label}</span>
                              <div className={`w-5 h-5 rounded-sm flex items-center justify-center ${
                                quoteOptions.features.includes(feature.id) 
                                  ? 'bg-primary-500' 
                                  : 'border border-gray-400'
                              }`}>
                                {quoteOptions.features.includes(feature.id) && (
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          How complex is your project?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { id: "simple", label: "Simple" },
                            { id: "medium", label: "Moderate" },
                            { id: "complex", label: "Complex" },
                          ].map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              className={`px-4 py-3 rounded-lg border ${
                                quoteOptions.complexity === option.id 
                                  ? 'bg-primary-50 border-primary-500 text-primary-700' 
                                  : 'border-gray-300 hover:border-gray-400'
                              } text-center transition-colors`}
                              onClick={() => setQuoteOptions(prev => ({ ...prev, complexity: option.id }))}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What&apos;s your timeline?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { id: "asap", label: "ASAP" },
                            { id: "3months", label: "3 months" },
                            { id: "6months", label: "6+ months" },
                          ].map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              className={`px-4 py-3 rounded-lg border ${
                                quoteOptions.timeline === option.id 
                                  ? 'bg-primary-50 border-primary-500 text-primary-700' 
                                  : 'border-gray-300 hover:border-gray-400'
                              } text-center transition-colors`}
                              onClick={() => setQuoteOptions(prev => ({ ...prev, timeline: option.id }))}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {quoteRange && (
                        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                          <h4 className="text-lg font-bold mb-2">Estimated Project Cost</h4>
                          <p className="text-3xl font-bold text-primary-600 mb-3">{quoteRange}</p>
                          <p className="text-sm text-gray-600 mb-4">
                            This is a ballpark estimate based on your selections. For a detailed quote, please contact us.
                          </p>
                          <a 
                            href="#contact-form" 
                            className="inline-flex items-center text-primary-600 hover:text-primary-800"
                            onClick={() => {
                              // Pre-fill contact form with quote info
                              setValue("budget", quoteTotal && quoteTotal < 25000 ? "below25k" : 
                                quoteTotal && quoteTotal < 50000 ? "25k-50k" : 
                                quoteTotal && quoteTotal < 100000 ? "50k-100k" : 
                                quoteTotal && quoteTotal < 250000 ? "100k-250k" : "above250k");
                              
                              setValue("service", quoteOptions.projectType || "");
                              setValue("timeline", quoteOptions.timeline === "asap" ? "immediate" : 
                                quoteOptions.timeline === "3months" ? "1-3months" : "6months+");
                              
                              // Scroll to form
                              formRef.current?.scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            Get a detailed quote <ChevronRight size={16} className="ml-1" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Office */}
      <section ref={mapRef} className="py-20 bg-white transform-on-scroll">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re always happy to meet in person to discuss your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 rounded-xl overflow-hidden h-[400px] shadow-lg">
              {/* Google Maps embed would go here in production */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
                  <p className="text-gray-500">
                    Google Maps would be embedded here in production.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 rounded-xl overflow-hidden h-[400px] shadow-lg relative">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
                alt="Softrinx Office"
                fill
                style={{objectFit: "cover"}}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">San Francisco Office</h3>
                <p className="text-gray-300 mb-4">
                  123 Tech Plaza, Suite 400<br />
                  San Francisco, CA 94105
                </p>
                <div className="flex space-x-4 mt-2">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-primary-900 text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about working with us? Find quick answers below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What happens after I submit my contact form?",
                answer: "Within 24 hours, a member of our team will reach out to schedule an initial consultation. This call helps us understand your project better and determine how we can best assist you."
              },
              {
                question: "Is the quote calculator estimate accurate?",
                answer: "The calculator provides a ballpark estimate based on typical projects with similar requirements. For a precise quote, we'll need to discuss your specific needs in detail during our consultation."
              },
              {
                question: "Do you work with clients outside of the US?",
                answer: "Absolutely! We work with clients globally and have experience managing remote collaboration across different time zones. Our team can adapt to your schedule for meetings and updates."
              },
              {
                question: "What information should I prepare before our first call?",
                answer: "Having a basic outline of your project goals, timeline, budget constraints, and any existing materials (wireframes, requirements docs, etc.) is helpful but not required. We can guide you through the discovery process."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 max-w-3xl mx-auto">Ready to Transform Your Business with Custom Software?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your goals and overcome your challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact-form" className="btn-primary px-8 py-4 rounded-lg text-lg font-medium bg-primary-600 hover:bg-primary-700 transition-colors">
              Start Your Project
            </a>
              <Link href="/portfolio" className="btn-secondary px-8 py-4 rounded-lg text-lg font-medium border-2 border-white hover:bg-white hover:text-gray-900 transition-colors">
                See Our Work
              </Link>
      
              <Link   href="/portfolio" className="btn-secondary px-8 py-4 rounded-lg text-lg font-medium border-2 border-white hover:bg-white hover:text-gray-900 transition-colors">
         
              See Our Work
              </Link>
          
          </div>
        </div>
      </section>
    </main>
  );
}