import React from 'react'

function ServicesSection() {
  return (
    <div>
        <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
            <p className="text-lg mb-8 text-center">
                At Softrinx, we offer a comprehensive suite of software development services tailored to meet the unique needs of your business. Our expertise spans various domains and technologies, ensuring that we deliver solutions that drive growth and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Custom Software Development</h3>
                    <p>
                        We build bespoke software solutions that align perfectly with your business objectives, ensuring scalability and performance.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
                    <p>
                        Our team creates intuitive and engaging mobile applications for both iOS and Android platforms, enhancing user experience and accessibility.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                    <p>
                        We develop responsive and dynamic websites that not only look great but also perform seamlessly across all devices.
                    </p>
                </div>
            </div>
        </div>
        </section>
      
    </div>
  )
}

export default ServicesSection
