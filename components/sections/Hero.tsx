import React from 'react'

function HeroSection() {
  return (
    <div>
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Softrinx</h1>
            <p className="text-lg mb-8">
                Premium Software Development Agency - Crafting Solutions for the Future
            </p>
            <a
                href="#services"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
                Explore Our Services
            </a>
            </div>
        </section>
      
    </div>
  )
}

export default HeroSection
