import React from 'react'

function CaseStudiesSection() {
  return (
    <div>
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Case Study 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">E-Commerce Platform</h3>
                <p className="text-lg mb-4">
                    Developed a scalable e-commerce platform that increased client sales by 40% within the first six months of launch.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
                {/* Case Study 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Mobile Banking App</h3>
                <p className="text-lg mb-4">
                    Created a secure mobile banking application that improved user engagement by 55% and received a 4.8-star rating on app stores.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
                {/* Case Study 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Chatbot</h3>
                <p className="text-lg mb-4">
                    Implemented an AI-powered chatbot for customer support, reducing response times by 70% and enhancing customer satisfaction.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
            </div>
            </div>
        </section>
      
    </div>
  )
}

export default CaseStudiesSection
