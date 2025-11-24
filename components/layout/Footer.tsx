// components/layout/Footer.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, Mail, Phone, Facebook, Twitter, LinkedIn, Instagram, 
  Github, ArrowRight, ChevronRight, 
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top curved shape */}
      <div className="relative">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-gray-100"
          ></path>
        </svg>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-emerald-600 to-[#4F50FF] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3')] opacity-10 mix-blend-overlay"></div>
          
          <div className="z-10 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-white/80 text-lg max-w-xl">
              Let's discuss your ideas and transform them into exceptional digital experiences
            </p>
          </div>
          
          <Link 
            href="/contact"
            className="z-10 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-full transition-all duration-300 flex items-center group"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/images/logo3.png" 
                alt="Softrinx Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              We craft cutting-edge software solutions that drive innovation and deliver 
              exceptional user experiences for businesses worldwide.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Portfolio', link: '/portfolio' },
                { name: 'Blog', link: '/blog' },
                { name: 'Contact', link: '/contact' },
                { name: 'Careers', link: '/careers' },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item.link}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Web Development', link: '/services/web-development' },
                { name: 'Mobile Development', link: '/services/mobile-development' },
                { name: 'UI/UX Design', link: '/services/ui-ux-design' },
                { name: 'Cloud Services', link: '/services/cloud-services' },
                { name: 'AI Solutions', link: '/services/ai-solutions' },
                { name: 'DevOps', link: '/services/devops' },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item.link}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://goo.gl/maps/1234" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-emerald-500" />
                  <span>123 Innovation Drive, Tech City, TC 10111</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@softrinx.com" 
                  className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-emerald-500" />
                  <span>contact@softrinx.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+11234567890" 
                  className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-emerald-500" />
                  <span>+1 (123) 456-7890</span>
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="text-md font-medium mb-4">Subscribe to our newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-200"
                />
                <button 
                  type="button" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-r-lg px-4 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Softrinx. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center space-x-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;