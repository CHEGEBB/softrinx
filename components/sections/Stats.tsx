import React from 'react'

function StatsSection() {
  return (
    <div>
        <section className="bg-white py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <h3 className="text-4xl font-bold text-blue-600">500+</h3>
                <p className="mt-2 text-lg">Projects Completed</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-blue-600">200+</h3>
                <p className="mt-2 text-lg">Satisfied Clients</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-blue-600">10+</h3>
                <p className="mt-2 text-lg">Years of Experience</p>
            </div>
            </div>
        </div>
        </section>
      
    </div>
  )
}

export default StatsSection
