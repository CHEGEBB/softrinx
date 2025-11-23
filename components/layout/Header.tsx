// "use client";

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Menu, X, ChevronRight, Code2 } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: '/services' },
//     { name: 'Portfolio', href: '/portfolio' },
//     { name: 'About', href: '/about' },
//     { name: 'Blog', href: '/blog' },
//   ];

//   return (
//     <>
//       <header 
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled 
//             ? 'bg-black/90 backdrop-blur-lg shadow-lg shadow-black/20' 
//             : 'bg-transparent'
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link 
//               href="/" 
//               className="flex items-center gap-2 group"
//             >
//               <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <Code2 className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-2xl font-bold text-white">
//                 Soft<span className="text-emerald-400">rinx</span>
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-gray-300 hover:text-white transition-colors relative group"
//                 >
//                   {item.name}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-300" />
//                 </Link>
//               ))}
//               <Link
//                 href="/contact"
//                 className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
//               >
//                 Get Started
//               </Link>
//             </nav>

//             {/* Hamburger Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors"
//               aria-label="Toggle menu"
//             >
//               <div className="w-6 h-5 flex flex-col justify-between">
//                 <span 
//                   className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
//                     isOpen ? 'rotate-45 translate-y-2' : ''
//                   }`}
//                 />
//                 <span 
//                   className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
//                     isOpen ? 'opacity-0' : ''
//                   }`}
//                 />
//                 <span 
//                   className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
//                     isOpen ? '-rotate-45 -translate-y-2' : ''
//                   }`}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu Overlay */}
//       <div 
//         className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
//           isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//         }`}
//         onClick={() => setIsOpen(false)}
//       />

//       {/* Mobile Menu */}
//       <div 
//         className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-gray-900 to-black z-40 transition-transform duration-500 ease-out md:hidden ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col h-full p-8">
//           {/* Close button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="self-end w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors mb-12"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           {/* Menu items with stagger animation */}
//           <nav className="flex flex-col gap-2">
//             {navItems.map((item, idx) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`group flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 hover:translate-x-2 ${
//                   isOpen ? 'animate-slide-in' : ''
//                 }`}
//                 style={{ 
//                   animationDelay: `${idx * 100}ms`,
//                   animationFillMode: 'backwards'
//                 }}
//               >
//                 <span className="text-xl font-medium">{item.name}</span>
//                 <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <Link
//             href="/contact"
//             onClick={() => setIsOpen(false)}
//             className={`mt-8 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full text-center transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/50 ${
//               isOpen ? 'animate-slide-in' : ''
//             }`}
//             style={{ 
//               animationDelay: `${navItems.length * 100}ms`,
//               animationFillMode: 'backwards'
//             }}
//           >
//             Start Your Project
//           </Link>

//           {/* Social Links */}
//           <div className={`mt-auto pt-8 border-t border-white/10 ${
//             isOpen ? 'animate-slide-in' : ''
//           }`}
//             style={{ 
//               animationDelay: `${(navItems.length + 1) * 100}ms`,
//               animationFillMode: 'backwards'
//             }}
//           >
//             <p className="text-gray-400 text-sm mb-4">Follow us</p>
//             <div className="flex gap-4">
//               {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
//                 <a
//                   key={social}
//                   href="#"
//                   className="w-10 h-10 bg-white/5 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all duration-300"
//                 >
//                   <span className="text-xs font-medium">{social[0]}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Decorative gradient */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
//       </div>

//       <style jsx>{`
//         @keyframes slide-in {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         .animate-slide-in {
//           animation: slide-in 0.5s ease-out;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;