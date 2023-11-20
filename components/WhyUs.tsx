import React from 'react'
import Image from 'next/image'
import image from '../public/why-choose-us.jpg'

const WhyUs = () => {


  const features = [
    {
      title: "Exceptional Quality, Exceptional Value",
      desc: "We have over 10 years of experience providing high-quality services to our customers. We are committed to providing our experience."
    },
    {
      title: "Experience the Difference, Choose Us",
      desc: "We are passionate about helping our customers succeed. We believe that our products and services can help you achieve your goals."
    },
    {
      title: "Your Success, Our Passion, Your Choice",
      desc: "Our team of experts has the knowledge and experience to help you with any challenge you may face."
    },
    {
      title: "Experience Matters, Choose Expertise",
      desc: "We are committed to providing our customers with the best possible results. We will go above and beyond to meet your needs."
    },

  ]

  return (
    <section className="py-14">
      <div className="container mx-auto text-gray-600">
        <div className="space-y-3">
          <h3 className="text-gray-600 font-semibold">
            Why Choose Us
          </h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Trusted Experts, Unparalleled Service
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 flex items-center justify-between sm:grid-cols-2 lg:grid-cols-2">
            <div className='grid lg:grid-cols-2 flex-wrap flex gap-2'>
              {
                features.map((item, idx) => (
                  <li key={idx} className="space-y-3 border py-2 px-4">
                    <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h4 className="text-lg text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p>
                      {item.desc}
                    </p>
                  </li>
                ))
              }
            </div>
            <div>
              <picture>
                <Image src={image} alt='picture' />
              </picture>
            </div>
          </ul>
        </div>
      </div>
    </section>
  )


}

export default WhyUs