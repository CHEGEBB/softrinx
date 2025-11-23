import Image from 'next/image'
import React from 'react'

function Navigation() {
  return (
    <div>
        <nav className="bg-white shadow flex flex-row justify-between">
            <div className="logo p-6 ">
                <Image
                    src="/images/images/logo3.png"
                    alt="Logo"
                    width={250}
                    height={250}
                />
            </div>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">MyWebsite</div>
            <div>
            <a href="#home" className="text-gray-800 hover:text-blue-600 mx-4">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-600 mx-4">About</a>
            <a href="#services" className="text-gray-800 hover:text-blue-600 mx-4">Services</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 mx-4">Contact</a>
            </div>
        </div>
        </nav>
      
    </div>
  )
}

export default Navigation
