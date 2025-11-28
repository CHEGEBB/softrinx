"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Github 
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (name: string | null) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Pages",
      path: "/pages",
      dropdown: [
        { name: "Team", path: "/pages/team" },
        { name: "FAQ", path: "/pages/faq" },
        { name: "Pricing", path: "/pages/pricing" },
        { name: "Testimonials", path: "/pages/testimonials" }
      ]
    },
    {
      name: "Blog",
      path: "/blog",
      dropdown: [
        { name: "Latest Posts", path: "/blog/latest" },
        { name: "Categories", path: "/blog/categories" },
        { name: "Author", path: "/blog/author" }
      ]
    },
    {
      name: "Features",
      path: "#",
      dropdown: [
        { name: "Web Development", path: "/features/web-development" },
        { name: "Mobile Apps", path: "/features/mobile-apps" },
        { name: "UI/UX Design", path: "/features/design" },
        { name: "AI Solutions", path: "/features/ai-solutions" }
      ]
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Consultation", path: "/services/consultation" },
        { name: "Development", path: "/services/development" },
        { name: "Maintenance", path: "/services/maintenance" },
        { name: "Training", path: "/services/training" }
      ]
    },
    { name: "Contact", path: "/contact" }
  ];

  const socialIcons = [
    { icon: <Facebook size={20} />, link: "https://facebook.com" },
    { icon: <Twitter size={20} />, link: "https://twitter.com" },
    { icon: <Instagram size={20} />, link: "https://instagram.com" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com" },
    { icon: <Github size={20} />, link: "https://github.com" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/images/logo3.png" 
              alt="Softrinx Logo" 
              width={150} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button 
                    onClick={() => handleDropdown(item.name)}
                    className="flex items-center px-4 py-2 text-sm uppercase tracking-wider font-medium text-white hover-gradient-text transition-colors"
                  >
                    {item.name}
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    href={item.path}
                    className="px-4 py-2 text-sm uppercase tracking-wider font-medium text-white hover-gradient-text transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 transform origin-top-right ${
                      activeDropdown === item.name 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link 
                          href={dropdownItem.path}
                          key={dropdownItem.name}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Simple White Hamburger - Always visible */}
          <button 
            className="p-2"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <Menu size={28} className={`text-white ${isOpen ? 'hidden' : 'block'}`} />
            <X size={28} className={`text-white ${isOpen ? 'block' : 'hidden'}`} />
          </button>
        </div>
      </div>

      {/* Mobile & Desktop Full-Screen Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-md transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-8 h-full">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-10">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/images/logo3.png" 
                  alt="Softrinx Logo" 
                  width={150} 
                  height={40} 
                  className="h-10 w-auto"
                />
              </Link>
              <button 
                className="p-2 rounded-md text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Hero Image with Text */}
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-8 menu-image">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm text-emerald-400 mb-1">Ready to innovate?</p>
                <h3 className="text-xl font-bold">Let's Build Together</h3>
              </div>
            </div>

            <div className="flex flex-col space-y-6 text-2xl font-medium">
              {navItems.map((item, idx) => (
                <div key={item.name} className="border-b border-gray-100 pb-4">
                  {item.dropdown ? (
                    <div>
                      <button 
                        onClick={() => handleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-gray-800 hover:text-emerald-600 transition-colors menu-item"
                        style={{ animationDelay: `${idx * 80}ms` }}
                      >
                        {item.name}
                        <ChevronDown 
                          size={24} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      <div 
                        className={`mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.name 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link 
                            href={dropdownItem.path}
                            key={dropdownItem.name}
                            className="block py-2 text-lg text-gray-600 hover:text-emerald-600"
                            onClick={toggleMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.path}
                      className="block text-gray-800 hover:text-emerald-600 transition-colors menu-item"
                      style={{ animationDelay: `${idx * 80}ms` }}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600">Have questions? Get in touch!</p>
                <p className="text-emerald-600 font-medium mt-1">contact@softrinx.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;